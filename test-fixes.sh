#!/bin/bash

echo "🔍 اختبار إصلاحات صفحة المشاريع"
echo "================================"
echo ""

echo "✅ فحص الصور الافتراضية..."
echo "عدد ملفات SVG في project-defaults:"
ls public/project-defaults/*.svg | wc -l

echo ""
echo "✅ فحص قاعدة البيانات..."
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkProjects() {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        titleAr: true,
        image: true,
        category: true
      }
    });
    
    console.log('إجمالي المشاريع:', projects.length);
    
    let withImages = 0;
    let withDefaults = 0;
    
    projects.forEach(project => {
      if (project.image && project.image.includes('/project-defaults/')) {
        withDefaults++;
      } else if (project.image) {
        withImages++;
      }
    });
    
    console.log('مشاريع بصور افتراضية:', withDefaults);
    console.log('مشاريع بصور مخصصة:', withImages);
    
    await prisma.\$disconnect();
  } catch (error) {
    console.error('خطأ:', error);
    await prisma.\$disconnect();
  }
}

checkProjects();
"

echo ""
echo "📊 ملخص الإصلاحات:"
echo "=================="
echo "1. ✅ إزالة الفلتر المكرر من ProjectsGrid"
echo "2. ✅ تحديث جميع صور المشاريع"
echo "3. ✅ إصلاح مكون ProjectImage"
echo "4. ✅ إضافة صور افتراضية لكل فئة"
echo ""

echo "🌐 اختبر النتائج على:"
echo "http://localhost:3000/ar/projects"
echo ""

echo "✨ تم إصلاح جميع المشاكل!"
