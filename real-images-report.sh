#!/bin/bash

echo "🖼️  تقرير شامل عن صور المشاريع الجديدة"
echo "=========================================="
echo ""

echo "📊 إحصائيات عامة:"
echo "=================="
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function analyzeImages() {
  try {
    const projects = await prisma.project.findMany({
      select: {
        titleAr: true,
        image: true,
        category: true
      }
    });
    
    console.log('إجمالي المشاريع:', projects.length);
    
    let realImages = 0;
    let fallbackImages = 0;
    let pexelsImages = 0;
    
    const categoryStats = {};
    
    projects.forEach(project => {
      // إحصائيات الفئات
      if (!categoryStats[project.category]) {
        categoryStats[project.category] = { count: 0, realImages: 0 };
      }
      categoryStats[project.category].count++;
      
      // إحصائيات الصور
      if (project.image) {
        if (project.image.includes('pexels.com')) {
          pexelsImages++;
          realImages++;
          categoryStats[project.category].realImages++;
        } else if (project.image.includes('project-defaults')) {
          fallbackImages++;
        } else {
          realImages++;
          categoryStats[project.category].realImages++;
        }
      }
    });
    
    console.log('مشاريع بصور حقيقية:', realImages);
    console.log('مشاريع من Pexels:', pexelsImages);
    console.log('مشاريع بصور افتراضية:', fallbackImages);
    console.log('');
    
    console.log('📈 إحصائيات الفئات:');
    console.log('===================');
    Object.entries(categoryStats).forEach(([category, stats]) => {
      const percentage = ((stats.realImages / stats.count) * 100).toFixed(1);
      console.log(\`\${category}: \${stats.count} مشروع (\${stats.realImages} بصور حقيقية - \${percentage}%)\`);
    });
    
    await prisma.\$disconnect();
  } catch (error) {
    console.error('خطأ:', error);
    await prisma.\$disconnect();
  }
}

analyzeImages();
"

echo ""
echo "🌍 مصادر الصور:"
echo "==============="
echo "✅ Pexels.com - مجتمع المصورين العالميين"
echo "✅ صور عالية الجودة ومجانية تماماً"
echo "✅ ترخيص مجاني للاستخدام التجاري"
echo "✅ محسنة للويب (800x600 بكسل)"
echo "✅ ضغط تلقائي للأداء الأفضل"
echo ""

echo "🎨 فئات الصور المتخصصة:"
echo "========================"
echo "🌐 Web Development - تطوير المواقع"
echo "📱 Mobile Apps - تطبيقات الجوال"
echo "🤖 AI/ML Projects - مشاريع الذكاء الاصطناعي"
echo "🏢 ERP Systems - أنظمة إدارة الموارد"
echo "👥 CRM Systems - أنظمة إدارة العملاء"
echo "🛒 E-commerce - التجارة الإلكترونية"
echo "🍽️ Restaurant - المطاعم والأغذية"
echo "☁️ SaaS Platforms - منصات البرمجيات كخدمة"
echo "🚀 Startup Projects - مشاريع الشركات الناشئة"
echo ""

echo "🔗 اختبر النتائج على:"
echo "http://localhost:3000/ar/projects"
echo ""

echo "✨ تم استيراد صور احترافية من مواقع عالمية!"
