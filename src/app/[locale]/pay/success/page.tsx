import { useTranslations } from 'next-intl';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface PageProps {
  params: {
    locale: string;
  };
  searchParams: {
    session_id?: string;
  };
}

export default function PaymentSuccess({ params, searchParams }: PageProps) {
  const t = useTranslations('payment');
  const { locale } = params;
  const { session_id } = searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <CheckCircleIcon className="mx-auto h-24 w-24 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            {t('success.title')}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {t('success.message')}
          </p>
          {session_id && (
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
              {t('success.transactionId')}: {session_id}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {t('success.nextSteps')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('success.step1')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('success.step2')}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t('success.step3')}
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/${locale}/contact`}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
            >
              {t('success.contactUs')}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
            >
              {t('success.backToServices')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
