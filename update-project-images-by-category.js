const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Category-specific professional images from Unsplash
const categoryImages = {
  web: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Web development
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Analytics dashboard
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop", // Project management
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop", // Cloud storage
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop", // Online learning
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"  // Event management
  ],
  mobile: [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop", // Mobile app development
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop", // Fitness app
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop", // Travel app
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", // Shopping app
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"  // Health app
  ],
  ai: [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop", // AI/ML
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop", // Computer vision
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop", // Chatbot/AI
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop", // AI operations
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop", // Content creation
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"  // Machine learning
  ],
  erp: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", // Manufacturing
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", // Business management
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Enterprise software
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop"  // Resource planning
  ],
  crm: [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop", // CRM/Sales
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop", // Customer support
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", // Real estate
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Marketing
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop"  // Business relationships
  ],
  ecommerce: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", // E-commerce/Shopping
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop", // Fashion store
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop", // Grocery/Food
    "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop", // Electronics
    "https://images.unsplash.com/photo-1486312338219-ce68ba2137d?w=800&h=600&fit=crop"   // Online marketplace
  ],
  restaurant: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", // Restaurant POS
    "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop", // Food delivery
    "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop", // Chef/Kitchen
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop"  // Restaurant management
  ],
  saas: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // SaaS dashboard
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop", // Email marketing
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop", // Invoicing/Billing
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop", // Inventory
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop", // Customer service
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop", // Team collaboration
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Cloud software
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop"  // Business automation
  ],
  startup: [
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop", // Startup/Business
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", // Investment/Funding
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop"  // Prototyping/MVP
  ],
  healthcare: [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop", // Healthcare/Medical
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop", // Hospital
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop"  // Medical technology
  ],
  fintech: [
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", // Finance/Banking
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop", // Payment processing
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"  // Financial analytics
  ],
  education: [
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop", // Education/Learning
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop", // Online education
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"  // Learning management
  ],
  logistics: [
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop", // Supply chain
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop", // Logistics/Shipping
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=600&fit=crop"  // Transportation
  ],
  iot: [
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop", // IoT devices
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop", // Smart technology
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"  // Industrial IoT
  ],
  analytics: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Data analytics
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Business intelligence
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop"  // Data visualization
  ],
  security: [
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", // Cybersecurity
    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop", // Security systems
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"  // Data protection
  ],
  consulting: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Business consulting
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop", // Digital transformation
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"  // Strategy consulting
  ],
  devops: [
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop", // DevOps/Infrastructure
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", // Server/Cloud
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"  // Automation
  ],
  backend: [
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop", // Backend development
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop", // API development
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"  // Server architecture
  ],
  portfolio: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Portfolio/Personal
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Professional showcase
    "https://images.unsplash.com/photo-1486312338219-ce68ba2137d6?w=800&h=600&fit=crop"  // Personal branding
  ]
};

async function checkAndUpdateProjectImages() {
  try {
    console.log('🔍 Checking all project images for category relevance...\n');
    
    // Get all projects with their current images
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        titleEn: true,
        titleAr: true,
        category: true,
        image: true
      },
      orderBy: { category: 'asc' }
    });

    console.log(`📊 Total Projects: ${projects.length}\n`);

    // Group projects by category
    const projectsByCategory = projects.reduce((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, {});

    let totalUpdated = 0;

    // Process each category
    for (const [category, categoryProjects] of Object.entries(projectsByCategory)) {
      console.log(`📁 ${category.toUpperCase()} Category (${categoryProjects.length} projects):`);
      
      const availableImages = categoryImages[category] || categoryImages.web; // Fallback to web images
      
      for (let i = 0; i < categoryProjects.length; i++) {
        const project = categoryProjects[i];
        const imageIndex = i % availableImages.length; // Cycle through available images
        const newImage = availableImages[imageIndex];
        
        // Check if project needs image update (default or inappropriate image)
        const needsUpdate = !project.image || 
                           project.image === '' || 
                           project.image.includes('default') ||
                           !project.image.includes('unsplash.com');

        if (needsUpdate || project.image !== newImage) {
          await prisma.project.update({
            where: { id: project.id },
            data: { image: newImage }
          });
          
          console.log(`   ✅ Updated: ${project.titleEn}`);
          console.log(`      New image: ${newImage}`);
          totalUpdated++;
        } else {
          console.log(`   ✓ OK: ${project.titleEn}`);
        }
      }
      console.log('');
    }

    // Summary
    console.log('🎉 Image Update Complete!');
    console.log('═══════════════════════════');
    console.log(`📊 Total Projects: ${projects.length}`);
    console.log(`🔄 Images Updated: ${totalUpdated}`);
    console.log(`✅ All projects now have category-appropriate images`);
    
    // Show final category distribution
    console.log('\n📋 Projects by Category:');
    for (const [category, categoryProjects] of Object.entries(projectsByCategory)) {
      console.log(`   ${category}: ${categoryProjects.length} projects`);
    }

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAndUpdateProjectImages();
