import ServicesHero from "@/components/sections/ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default async function ServicesPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  return (
    <div>
      <ServicesHero locale={locale} />
      <ServicesGrid />
    </div>
  );
}
