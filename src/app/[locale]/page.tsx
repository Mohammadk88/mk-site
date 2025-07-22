import HeroSection from "@/components/sections/HeroSection";
import { prisma } from "@/lib/prisma";

export default async function Home({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  // Fetch data from database
  const [personalInfo, contactInfo, socialMedia, skills, projects] = await Promise.all([
    prisma.personalInfo.findFirst(),
    prisma.contactInfo.findMany({ where: { lang: locale } }),
    prisma.socialMedia.findMany({ where: { isVisible: true } }),
    prisma.skill.findMany({ orderBy: { level: 'desc' } }),
    prisma.project.findMany({ 
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: 6
    })
  ]);

  return (
    <div>
      <HeroSection 
        personalInfo={personalInfo}
        contactInfo={contactInfo}
        socialMedia={socialMedia}
        skills={skills}
        projects={projects}
        locale={locale}
      />
    </div>
  );
}
