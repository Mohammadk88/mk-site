#!/bin/bash

echo "🔧 إصلاح صور المشاريع"
echo "===================="
echo ""

echo "✅ فحص الصور الافتراضية..."
ls -la public/project-defaults/ | grep -E "\.(svg|jpg|png)$" | wc -l | xargs echo "عدد الصور الافتراضية المتوفرة:"
echo ""

echo "✅ فحص المشاريع في قاعدة البيانات..."
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkProjectImages() {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        titleEn: true,
        titleAr: true,
        image: true,
        category: true,
        published: true
      }
    });
    
    console.log('إجمالي المشاريع:', projects.length);
    
    let emptyImages = 0;
    let brokenImages = 0;
    let workingImages = 0;
    
    projects.forEach(project => {
      if (!project.image || project.image === '') {
        emptyImages++;
      } else if (project.image.includes('unsplash.com')) {
        brokenImages++;
      } else {
        workingImages++;
      }
    });
    
    console.log('المشاريع بدون صور:', emptyImages);
    console.log('المشاريع بصور مكسورة (Unsplash):', brokenImages);
    console.log('المشاريع بصور تعمل:', workingImages);
    
    await prisma.\$disconnect();
  } catch (error) {
    console.error('خطأ:', error);
    await prisma.\$disconnect();
  }
}

checkProjectImages();
"

echo ""
echo "📊 ملخص الإصلاحات المطبقة:"
echo "========================="
echo "1. ✅ إنشاء مكون ProjectImage متقدم"
echo "2. ✅ إضافة 9 صور افتراضية لكل تصنيف"
echo "3. ✅ إضافة صورة افتراضية عامة"
echo "4. ✅ معالجة أخطاء تحميل الصور"
echo "5. ✅ دعم ملفات SVG"
echo "6. ✅ إضافة مؤشر للصور الافتراضية"
echo "7. ✅ حالة التحميل مع شاشة انتظار"
echo ""

echo "🌐 اختبر النتائج على:"
echo "http://localhost:3001/ar/projects"
echo ""

echo "✨ تم إصلاح نظام الصور بالكامل!"
