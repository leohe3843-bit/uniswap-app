'use client';
import Link from 'next/link';
import { useLang } from '../lib/i18n';

export default function Footer() {
  const { t } = useLang();

  const quickLinks = [
    { href: '/', label: t('navHome') },
    { href: '/browse', label: t('navBrowse') },
    { href: '/want-to-buy', label: t('navWantToBuy') },
    { href: '/safety', label: t('navSafety') },
    { href: '/post', label: t('navPost') },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-2xl font-black mb-4">
              <span className="text-white">Swap</span>
              <span className="text-brand-400">U</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footerAboutDesc')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">{t('footerLinks')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">{t('footerContactTitle')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="text-base mt-0.5">📧</span>
                <div>
                  <div className="text-xs text-gray-500">{t('footerEmailLabel')}</div>
                  <a href={`mailto:${t('footerEmail')}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {t('footerEmail')}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-base mt-0.5">📱</span>
                <div>
                  <div className="text-xs text-gray-500">{t('footerPhoneLabel')}</div>
                  <span className="text-sm">{t('footerPhone')}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-base mt-0.5">💬</span>
                <div>
                  <div className="text-xs text-gray-500">{t('footerWeChatLabel')}</div>
                  <span className="text-sm">{t('footerWeChat')}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-base mt-0.5">📕</span>
                <div>
                  <div className="text-xs text-gray-500">{t('footerXhsLabel')}</div>
                  <span className="text-sm">{t('footerXhs')}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">{t('footerLegalTitle')}</h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              {t('footerLegalText')}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              {t('footerRightsText')}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t('footerDisclaimerText')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">{t('footerCopyright')}</p>
          <div className="flex items-center gap-4">
            <Link href="/safety" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t('navSafety')}
            </Link>
            <span className="text-gray-700">|</span>
            <span className="text-xs text-gray-500">DMV Area</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
