'use client';
import { useLang } from '../lib/i18n';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
      {t('footerText')}
    </footer>
  );
}
