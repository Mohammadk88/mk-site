import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default async function AboutPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
    </div>
  );
}
