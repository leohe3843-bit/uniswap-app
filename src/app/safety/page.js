'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '../../lib/i18n';

export default function SafetyPage() {
  const { t, lang } = useLang();
  const [openFaq, setOpenFaq] = useState(null);

  const tips = [
    { icon: '📍', titleKey: 'safetyTip1Title', descKey: 'safetyTip1Desc', color: 'bg-blue-50 border-blue-100' },
    { icon: '☀️', titleKey: 'safetyTip2Title', descKey: 'safetyTip2Desc', color: 'bg-amber-50 border-amber-100' },
    { icon: '👥', titleKey: 'safetyTip3Title', descKey: 'safetyTip3Desc', color: 'bg-green-50 border-green-100' },
    { icon: '🔍', titleKey: 'safetyTip4Title', descKey: 'safetyTip4Desc', color: 'bg-purple-50 border-purple-100' },
    { icon: '💳', titleKey: 'safetyTip5Title', descKey: 'safetyTip5Desc', color: 'bg-emerald-50 border-emerald-100' },
    { icon: '🛡️', titleKey: 'safetyTip6Title', descKey: 'safetyTip6Desc', color: 'bg-red-50 border-red-100' },
  ];

  const faqs = [
    { qKey: 'faq1Q', aKey: 'faq1A' },
    { qKey: 'faq2Q', aKey: 'faq2A' },
    { qKey: 'faq3Q', aKey: 'faq3A' },
    { qKey: 'faq4Q', aKey: 'faq4A' },
    { qKey: 'faq5Q', aKey: 'faq5A' },
    { qKey: 'faq6Q', aKey: 'faq6A' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🛡️ {t('navSafety')}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{t('safetyTitle')}</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('safetySubtitle')}</p>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {tips.map((tip, i) => (
              <div key={i} className={`rounded-2xl border p-6 ${tip.color} hover:shadow-md transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl shrink-0 mt-0.5">{tip.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{t(tip.titleKey)}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{t(tip.descKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency notice */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-3xl shrink-0">🚨</span>
            <div>
              <h3 className="font-bold text-red-800 mb-1">
                {lang === 'en' ? 'Emergency?' : '遇到紧急情况？'}
              </h3>
              <p className="text-sm text-red-700 leading-relaxed">
                {lang === 'en'
                  ? 'If you feel unsafe at any point, call 911 or your campus police immediately. Your safety comes first — never put yourself at risk for any item.'
                  : '如果你在任何时候感到不安全，请立即拨打 911 或联系校园警察。你的安全永远是第一位的，不要为了任何物品让自己陷入危险。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-10">{t('faqTitle')}</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{t(faq.qKey)}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm text-gray-600 leading-relaxed">{t(faq.aKey)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4">{t('ctaTitle')}</h2>
          <p className="text-gray-500 mb-8">{t('ctaDesc')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/browse" className="btn-primary !py-3 !px-8">
              🔍 {t('ctaBrowse')}
            </Link>
            <Link href="/want-to-buy" className="inline-flex items-center gap-2 font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl px-8 py-3 hover:border-brand-300 hover:text-brand-600 transition-all">
              📝 {t('navWantToBuy')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
