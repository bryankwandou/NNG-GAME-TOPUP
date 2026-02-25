import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create default admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.adminUser.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      passwordHash: hashedPassword,
      role: 'superadmin',
    },
  });

  console.log('✅ Created admin user:', admin.username);

  // Create default tier configurations
  const tiers = [
    { name: 'Bronze', minTurnover: 0, markupDelta: 0 },
    { name: 'Silver', minTurnover: 5000000, markupDelta: -500 },
    { name: 'Gold', minTurnover: 20000000, markupDelta: -1000 },
    { name: 'Agency', minTurnover: 50000000, markupDelta: -2000 },
  ];

  for (const tier of tiers) {
    await prisma.tierConfig.upsert({
      where: { name: tier.name },
      update: {},
      create: tier,
    });
  }

  console.log('✅ Created tier configurations');

  // Create sample products (Mobile Legends example)
  const products = [
    {
      code: 'ML_DIAMOND_5',
      gameName: 'Mobile Legends',
      displayName: '5 Diamonds',
      costPrice: 2000,
      baseMarkup: 500,
      active: true,
    },
    {
      code: 'ML_DIAMOND_12',
      gameName: 'Mobile Legends',
      displayName: '12 Diamonds',
      costPrice: 4500,
      baseMarkup: 1000,
      active: true,
    },
    {
      code: 'ML_DIAMOND_28',
      gameName: 'Mobile Legends',
      displayName: '28 Diamonds',
      costPrice: 10000,
      baseMarkup: 2000,
      active: true,
    },
    {
      code: 'ML_DIAMOND_56',
      gameName: 'Mobile Legends',
      displayName: '56 Diamonds',
      costPrice: 19500,
      baseMarkup: 3500,
      active: true,
    },
    {
      code: 'ML_DIAMOND_85',
      gameName: 'Mobile Legends',
      displayName: '85 Diamonds',
      costPrice: 29000,
      baseMarkup: 5000,
      active: true,
    },
    {
      code: 'ML_DIAMOND_170',
      gameName: 'Mobile Legends',
      displayName: '170 Diamonds',
      costPrice: 58000,
      baseMarkup: 9000,
      active: true,
    },
    {
      code: 'ML_DIAMOND_296',
      gameName: 'Mobile Legends',
      displayName: '296 Diamonds',
      costPrice: 97000,
      baseMarkup: 15000,
      active: true,
    },
    {
      code: 'ML_WEEKLY_PASS',
      gameName: 'Mobile Legends',
      displayName: 'Weekly Diamond Pass',
      costPrice: 27000,
      baseMarkup: 5000,
      active: true,
    },
    {
      code: 'ML_TWILIGHT_PASS',
      gameName: 'Mobile Legends',
      displayName: 'Twilight Pass',
      costPrice: 135000,
      baseMarkup: 20000,
      active: true,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { code: product.code },
      update: {},
      create: product,
    });
  }

  console.log(`✅ Created ${products.length} sample products`);

  // Create a test reseller
  const testResellerPassword = await bcrypt.hash('testpass123', 10);
  
  const testReseller = await prisma.reseller.upsert({
    where: { username: 'testreseller' },
    update: {},
    create: {
      name: 'Test Reseller',
      username: 'testreseller',
      passwordHash: testResellerPassword,
      tier: 'Bronze',
      balance: 100000, // Start with 100k balance for testing
      totalTurnoverMonthly: 0,
      status: 'active',
    },
  });

  console.log('✅ Created test reseller:', testReseller.username);

  console.log('\n🎉 Seeding completed!');
  console.log('\n📝 Default credentials:');
  console.log('   Admin: admin / admin123');
  console.log('   Test Reseller: testreseller / testpass123');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
