const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('📦 Current Pricing Plans:');
    const pricingPlans = await prisma.pricingPlan.findMany();
    console.log(`Found ${pricingPlans.length} pricing plans`);
    
    console.log('\n🔄 Current Recurring Services:');
    const recurringServices = await prisma.recurringService.findMany();
    console.log(`Found ${recurringServices.length} recurring services`);
    
    console.log('\n🛠️ Current Services:');
    const services = await prisma.service.findMany();
    console.log(`Found ${services.length} services`);
    
    // Check for packages with minimal features
    console.log('\n🔍 Checking for incomplete packages...');
    const incompletePackages = pricingPlans.filter(plan => {
      try {
        const features = JSON.parse(plan.features);
        return !features.deliveryTime || !features.description || !features.features || features.features.length < 3;
      } catch (e) {
        // If features is not valid JSON or is just a simple array
        return plan.features.includes('Included') || plan.features.length < 50;
      }
    });
    
    console.log(`Found ${incompletePackages.length} incomplete packages that need enhancement`);
    incompletePackages.forEach(pkg => {
      console.log(`- ${pkg.name} (${pkg.lang}): ${pkg.features.substring(0, 100)}...`);
    });

    // Check recurring services specifically
    console.log('\n🔍 Checking recurring services features...');
    recurringServices.forEach(service => {
      try {
        const features = JSON.parse(service.features);
        console.log(`\n📋 ${service.name} (${service.lang}):`);
        console.log(`  Features count: ${features.features ? features.features.length : 0}`);
        if (features.features && features.features.length > 0) {
          features.features.forEach((feature, index) => {
            console.log(`    ${index + 1}. ${feature}`);
          });
        } else {
          console.log(`  ⚠️  NO FEATURES FOUND - Raw features: ${service.features.substring(0, 100)}...`);
        }
      } catch (e) {
        console.log(`\n❌ ${service.name} (${service.lang}): INVALID JSON - ${service.features.substring(0, 100)}...`);
      }
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
