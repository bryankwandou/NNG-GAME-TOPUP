import { FastifyRequest, FastifyReply } from 'fastify';
import { SustainabilityService } from '../../modules/analytics/sustainability.service';
import { logger } from '../../config/logger';

export class DashboardRoutes {
  constructor(private sustainabilityService: SustainabilityService) { }

  async getDashboardHTML(_request: FastifyRequest, reply: FastifyReply) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NNG Bot Admin | Sustainability Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Outfit', sans-serif; background: #0f172a; color: #f8fafc; }
        .glass { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); }
        .gradient-text { background: linear-gradient(90deg, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    </style>
</head>
<body class="p-4 md:p-8">
    <div class="max-w-6xl mx-auto">
        <header class="flex justify-between items-center mb-10">
            <div>
                <h1 class="text-3xl font-bold gradient-text">NNG BOT ANALYTICS</h1>
                <p class="text-slate-400">Sustainability & Economic Health Control</p>
            </div>
            <div class="glass px-4 py-2 rounded-full text-sm font-medium border-emerald-500/30 text-emerald-400">
                ● System Operational
            </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" id="stat-cards">
            <!-- Dynamic Stats -->
            <div class="glass p-6 rounded-2xl animate-pulse bg-slate-800/50 h-32"></div>
            <div class="glass p-6 rounded-2xl animate-pulse bg-slate-800/50 h-32"></div>
            <div class="glass p-6 rounded-2xl animate-pulse bg-slate-800/50 h-32"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="glass p-8 rounded-3xl">
                <h2 class="text-xl font-semibold mb-6 flex items-center">
                    <span class="mr-2">📈</span> Sustainability Outlook
                </h2>
                <div id="break-even-chart" class="h-64 flex items-end justify-between gap-2 px-4">
                    <!-- Progress bars -->
                </div>
                <div class="mt-8 pt-8 border-t border-slate-700/50 flex justify-between">
                    <div>
                        <p class="text-slate-500 text-xs uppercase tracking-wider">Break-Even Status</p>
                        <p id="be-status" class="text-lg font-bold">Calculating...</p>
                    </div>
                    <div class="text-right">
                        <p class="text-slate-500 text-xs uppercase tracking-wider">Target Volume</p>
                        <p id="target-volume" class="text-lg font-bold">-- orders</p>
                    </div>
                </div>
            </div>

            <div class="glass p-8 rounded-3xl">
                <h2 class="text-xl font-semibold mb-6 flex items-center">
                    <span class="mr-2">💰</span> Top Performers
                </h2>
                <div class="space-y-6" id="margin-table">
                    <!-- Margin breakdown -->
                </div>
            </div>
        </div>
    </div>

    <script>
        async function loadData() {
            const res = await fetch('/api/admin/sustainability');
            const data = await res.json();
            
            document.getElementById('stat-cards').innerHTML = \`
                <div class="glass p-6 rounded-2xl">
                    <p class="text-slate-500 text-sm mb-1">Total Revenue (30d)</p>
                    <p class="text-2xl font-bold text-white">Rp \\\${data.totalOrderValue.toLocaleString()}</p>
                </div>
                <div class="glass p-6 rounded-2xl">
                    <p class="text-slate-500 text-sm mb-1">Net Profit</p>
                    <p class="text-2xl font-bold text-emerald-400">Rp \\\${data.netProfitAfterCosts.toLocaleString()}</p>
                </div>
                <div class="glass p-6 rounded-2xl">
                    <p class="text-slate-500 text-sm mb-1">Margin Rate</p>
                    <p class="text-2xl font-bold text-sky-400">\\\${data.profitMarginRate.toFixed(2)}%</p>
                </div>
            \`;

            document.getElementById('be-status').innerText = data.isBreakEven ? 'PROFITABLE' : 'SUBSIDIZED';
            document.getElementById('be-status').className = data.isBreakEven ? 'text-lg font-bold text-emerald-400' : 'text-lg font-bold text-rose-400';
            document.getElementById('target-volume').innerText = data.ordersNeededToBreakEven + ' orders/mo';

            // Simple visual chart for break-even
            const pct = Math.min((data.totalOrders / data.ordersNeededToBreakEven) * 100, 100);
            document.getElementById('break-even-chart').innerHTML = \`
                <div class="flex-1 rounded-t-lg bg-slate-700/30 h-full relative group">
                    <div class="absolute bottom-0 left-0 w-full bg-sky-500/50 rounded-t-lg transition-all duration-1000" style="height: \\\${pct}%"></div>
                    <div class="absolute -top-6 left-0 w-full text-center text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition">Volume</div>
                </div>
                <div class="flex-1 rounded-t-lg bg-slate-700/30 h-full relative">
                    <div class="absolute bottom-0 left-0 w-full bg-emerald-500/50 rounded-t-lg h-full"></div>
                    <div class="absolute -top-6 left-0 w-full text-center text-xs text-slate-400">Threshold</div>
                </div>
            \`;

            // Load Top Resellers
            const resTop = await fetch('/api/admin/top-resellers');
            const topResellers = await resTop.json();
            
            document.getElementById('margin-table').innerHTML = topResellers.map((r, i) => \\\`
                <div class="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 transition hover:border-slate-500">
                    <div class="flex items-center">
                        <span class="w-8 text-slate-500 font-bold">#\\\${i+1}</span>
                        <div>
                            <p class="font-semibold">\\\${r.username}</p>
                            <p class="text-xs text-slate-500">\\\${r.tier}</p>
                        </div>
                    </div>
                    <p class="font-mono text-sky-400">Rp \\\${Number(r.monthlyTurnover).toLocaleString()}</p>
                </div>
            \\\`).join('') || '<p class="text-center text-slate-500">No active resellers this period.</p>';
        }
        loadData();
    </script>
</body>
</html>
    `;
    reply.type('text/html').send(html);
  }

  async getSustainabilityMetrics(
    _request: FastifyRequest<{ Querystring: { period: string } }>,
    reply: FastifyReply
  ) {
    try {
      const now = new Date();
      const startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      const metrics = await this.sustainabilityService.calculateMetrics(startDate, now);
      reply.send(metrics);
    } catch (error) {
      logger.error('Error calculating metrics', error);
      reply.code(500).send({ error: 'Internal error' });
    }
  }
}

export async function registerDashboardRoutes(
  app: any,
  dashboardRoutes: DashboardRoutes
) {
  app.get('/admin/dashboard', (req: any, reply: any) =>
    dashboardRoutes.getDashboardHTML(req, reply)
  );

  app.get('/api/admin/sustainability', (req: any, reply: any) =>
    dashboardRoutes.getSustainabilityMetrics(req, reply)
  );
}
