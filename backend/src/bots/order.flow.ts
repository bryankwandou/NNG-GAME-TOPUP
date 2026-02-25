import { PrismaClient, ResellerTier } from '@prisma/client';
import { CommandContext } from './command.registry';
import { PriceBreakdownService, DetailedPriceBreakdown } from '../modules/pricing/price-breakdown.service';
import {
  OrderPreviewData
} from './order-message-templates';
import { sessionManager } from './session.manager';
import { QRISService } from '../modules/payments/qris.service';

export type OrderFlowStep =
  | 'CHOOSE_GAME'
  | 'CHOOSE_DENOMINATION'
  | 'ENTER_UID'
  | 'REVIEW'
  | 'CONFIRM'
  | 'COMPLETE';

export interface OrderFlowState {
  sessionId: string;
  userId: string;
  platform: 'discord' | 'telegram' | 'whatsapp';
  currentStep: OrderFlowStep | string;
  selectedGame?: string;
  selectedGameName?: string;
  selectedDenomination?: number;
  selectedUid?: string;
  priceDetails?: DetailedPriceBreakdown;
  expiresAt: Date;
}

export class OrderFlow {
  constructor(
    private prisma: PrismaClient,
    private priceBreakdownService: PriceBreakdownService
  ) { }

  async startOrderFlow(context: CommandContext, userId: string): Promise<void> {
    const state: OrderFlowState = {
      sessionId: Math.random().toString(36).substring(7),
      userId,
      platform: context.platform as any,
      currentStep: 'CHOOSE_GAME',
      expiresAt: new Date(Date.now() + 30 * 60 * 1000)
    };

    sessionManager.saveSession(state);
    await this.showGameSelector(context, state);
  }

  private async showGameSelector(
    context: CommandContext,
    state: OrderFlowState
  ): Promise<void> {
    const products = await this.prisma.product.findMany({
      where: { active: true },
      select: { code: true, gameName: true, displayName: true },
      distinct: ['gameName'],
    });

    const menu: any = {
      id: `menu:game:${state.sessionId}`,
      placeholder: 'Select Game to Top-Up',
      options: products.map(p => ({
        label: p.gameName,
        value: p.code,
        description: `Top-up ${p.gameName}`
      }))
    };

    const message = `
**🎮 Step 1: Select Game**
━━━━━━━━━━━━━━━━━━━
Please use the menu below to choose your game:
    `.trim();

    if (context.sendEmbed) {
      await context.sendEmbed({
        text: message,
        menus: [menu]
      });
    } else {
      const fallbackList = products.map((p, i) => `${i + 1}. **${p.gameName}** (\`${p.code}\`)`).join('\n');
      await context.send(`${message}\n\n${fallbackList}`);
    }
  }

  async promptForUid(context: CommandContext, state: OrderFlowState): Promise<void> {
    const reseller = await this.prisma.reseller.findUnique({
      where: { id: state.userId },
      select: { metadata: true }
    });
    const lastPlayerIds = (reseller?.metadata as any)?.lastPlayerIds || {};
    const gameType = (state.selectedGame || '').split('_')[0] || 'GENERAL';
    const lastId = lastPlayerIds[gameType];

    const baseMessage = `
**🆔 Step 3: Enter Player ID**
━━━━━━━━━━━━━━━━━━━

Game: **${state.selectedGameName}**
Denomination: **${state.selectedDenomination}**

Please enter your **Player ID / UID** for this game:
*Format example: 12345678(1234)*
    `.trim();

    if (lastId && context.sendEmbed) {
      await context.sendEmbed({
        text: baseMessage + `\n\n💡 **Smart Suggestion:** Click the button below to use your last ID (\`${lastId}\`).`,
        buttons: [
          { label: `Use ${lastId}`, id: `uid:same:${state.sessionId}`, style: 'primary' }
        ]
      });
    } else if (lastId) {
      await context.send(baseMessage + `\n\n💡 **Smart Suggestion:** You recently used \`${lastId}\` for this game.\n*Reply with "same" to use it.*`);
    } else {
      await context.send(baseMessage);
    }
  }

  async handleUidInput(context: CommandContext, state: OrderFlowState, input: string): Promise<void> {
    const reseller = await this.prisma.reseller.findUnique({
      where: { id: state.userId },
      select: { metadata: true }
    });

    let processedUid = input.trim();

    if (processedUid.toLowerCase() === 'same' || processedUid.startsWith('uid:same:')) {
      const lastPlayerIds = (reseller?.metadata as any)?.lastPlayerIds || {};
      const gameType = (state.selectedGame || '').split('_')[0] || 'GENERAL';
      const lastId = lastPlayerIds[gameType];

      if (!lastId) {
        await context.send("❌ You don't have a previous ID saved for this game. Please enter your Player ID / UID manually:");
        return;
      }
      processedUid = lastId;
      await context.send(`✅ Using your last ID: \`${processedUid}\``);
    }

    state.selectedUid = processedUid;
    state.currentStep = 'REVIEW';
  }

  async showPriceBreakdown(
    context: CommandContext,
    gameCode: string,
    denomination: number,
    resellerTier: ResellerTier
  ): Promise<DetailedPriceBreakdown> {
    const product = await this.prisma.product.findUnique({
      where: { code: gameCode },
    });

    if (!product) {
      throw new Error(`Product not found: ${gameCode}`);
    }

    const breakdown = await this.priceBreakdownService.generatePriceBreakdown(
      gameCode,
      denomination,
      resellerTier
    );

    const previewData: OrderPreviewData = {
      gameName: product.gameName,
      denomination: breakdown.product.denomination.toString(),
      playerId: 'TBD',
      breakdown,
      estimatedTime: '1-5 minutes',
    };

    // polymorphic rendering via Platform Adapter (Phase D Perfection)
    const renderedView = context.adapter.formatPriceBreakdownView(previewData);

    const qrisService = new QRISService();
    const qrisPayload = qrisService.generateQRIS({
      merchantName: 'NNG TOPUP STORE',
      merchantCity: 'JAKARTA',
      amount: Number(breakdown.finalPrice),
      transactionId: Math.random().toString(36).substring(7).toUpperCase()
    });

    const paymentEmbed: any = {
      title: '💳 QRIS Payment Instruction',
      description: `Please scan the QRIS payload below using your Banking or E-Wallet app.\n\n\`\`\`${qrisPayload}\`\`\`\n\n_Once paid, the order will be processed seamlessly._`,
      color: '#00FF00',
    };

    // Safely integrate payment instructions into the polymorphic view
    if (renderedView.embeds) {
      renderedView.embeds.push(paymentEmbed);
    } else {
      renderedView.embeds = [paymentEmbed];
    }

    if (context.sendEmbed) {
      await context.sendEmbed(renderedView);
    } else {
      // WhatsApp text fallback
      await context.send((renderedView.text || '') + `\n\n💳 QRIS Payment:\n${qrisPayload}`);
    }

    return breakdown;
  }
}
