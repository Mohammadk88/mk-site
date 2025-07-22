import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 px-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Professional Avatar */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl">
            <Image
              src="/images/avatar.jpg"
              alt="Mohammad Kfelati - 404 Page"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          {/* Status indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
            <span className="text-white text-xs">?</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-8xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
        
        <div className="space-y-6">
          <Link href="/">
            <Button size="lg" className="btn-professional px-8 py-4 text-lg">
              {t('backHome')}
            </Button>
          </Link>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {t('tryLinks')}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors">
              {t('links.about')}
            </Link>
            <Link href="/projects" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors">
              {t('links.projects')}
            </Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors">
              {t('links.services')}
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors">
              {t('links.contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
