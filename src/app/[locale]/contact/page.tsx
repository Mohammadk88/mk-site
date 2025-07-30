import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default function ContactPage({ params }: ContactPageProps) {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
