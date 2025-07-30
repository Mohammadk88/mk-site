import HeroSection from "@/components/sections/HeroSection";
import { prisma } from "@/lib/prisma";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Fetch data from database
  const [personalInfo, contactInfo] = await Promise.all([
    prisma.personalInfo.findFirst(),
    prisma.contactInfo.findMany({ where: { lang: locale } })
  ]);

  return (
    <div>
      <HeroSection 
        personalInfo={personalInfo}
        contactInfo={contactInfo}
        locale={locale}
      />
     
    </div>
  );
}
