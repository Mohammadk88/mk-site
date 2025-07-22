const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testImageFallback() {
  try {
    // إنشاء مشروع تجريبي بصورة مفقودة أو فارغة لاختبار النظام
    const testProject = await prisma.project.create({
      data: {
        titleEn: "Test Project with Missing Image",
        titleAr: "مشروع تجريبي بصورة مفقودة",
        titleTr: "Eksik Resimli Test Projesi",
        descriptionEn: "This is a test project to verify image fallback functionality works correctly.",
        descriptionAr: "هذا مشروع تجريبي للتحقق من عمل نظام الصور الافتراضية بشكل صحيح.",
        descriptionTr: "Bu, resim yedekleme işlevselliğinin doğru çalıştığını doğrulamak için bir test projesidir.",
        image: "", // صورة فارغة لاختبار النظام
        category: "web",
        published: true,
        githubUrl: "https://github.com/example/test",
        technologies: JSON.stringify(["React", "TypeScript", "Tailwind CSS"])
      }
    });

    console.log("✅ تم إنشاء مشروع تجريبي لاختبار الصور الافتراضية:");
    console.log(`ID: ${testProject.id}`);
    console.log(`العنوان: ${testProject.titleAr}`);
    console.log(`الصورة: "${testProject.image}" (فارغة)`);
    console.log(`التصنيف: ${testProject.category}`);
    
    console.log("\n🔍 اختبر المشروع على:");
    console.log("http://localhost:3001/ar/projects");
    
    await prisma.$disconnect();
  } catch (error) {
    console.error('خطأ:', error);
    await prisma.$disconnect();
  }
}

testImageFallback();
