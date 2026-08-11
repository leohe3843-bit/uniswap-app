'use client';
import Link from 'next/link';
import { useLang, CATEGORIES, catI18nKey } from '../lib/i18n';
import { getAllSchools, getSchoolCount, getStates } from '../lib/schools';

export default function HomePage() {
  const { t } = useLang();

  const philosophies = [
    { icon: 'ð¤', titleKey: 'phil1Title', descKey: 'phil1Desc', bg: 'bg-blue-50' },
    { icon: 'ð±', titleKey: 'phil2Title', descKey: 'phil2Desc', bg: 'bg-emerald-50' },
    { icon: 'ðï¸', titleKey: 'phil3Title', descKey: 'phil3Desc', bg: 'bg-purple-50' },
    { icon: 'ð', titleKey: 'phil4Title', descKey: 'phil4Desc', bg: 'bg-amber-50' },
  ];

  const advantages = [
    { icon: 'ð°', titleKey: 'adv1Title', descKey: 'adv1Desc' },
    { icon: 'ð¯', titleKey: 'adv2Title', descKey: 'adv2Desc' },
    { icon: 'ð¡ï¸', titleKey: 'adv3Title', descKey: 'adv3Desc' },
    { icon: 'â¡', titleKey: 'adv4Title', descKey: 'adv4Desc' },
    { icon: 'ð«', titleKey: 'adv5Title', descKey: 'adv5Desc' },
    { icon: 'ð¦', titleKey: 'adv6Title', descKey: 'adv6Desc' },
  ];

  const steps = [
    { num: '01', icon: 'ð§', titleKey: 'how1Title', descKey: 'how1Desc' },
    { num: '02', icon: 'ð', titleKey: 'how2Title', descKey: 'how2Desc' },
    { num: '03', icon: 'ð¤', titleKey: 'how3Title', descKey: 'how3Desc' },
  ];

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ð {t('heroTagline')}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            {t('homeTitle')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('heroDesc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/browse" className="btn-primary text-base !py-4 !px-8 shadow-lg shadow-brand-200">
              ð {t('ctaBrowse')}
            </Link>
            <Link href="/post" className="inline-flex items-center gap-2 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl px-8 py-4 hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm">
              â {t('ctaPost')}
            </Link>
          </div>
        </div>
        {/* Decorative gradient blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      </section>

      {/* ===== USP Banner ===== */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'ð°', titleKey: 'uspFree', descKey: 'uspFreeDesc', bg: 'bg-amber-50 border-amber-100' },
              { icon: 'ð', titleKey: 'uspCampus', descKey: 'uspCampusDesc', bg: 'bg-green-50 border-green-100' },
              { icon: 'ð¡ï¸', titleKey: 'uspPrivacy', descKey: 'uspPrivacyDesc', bg: 'bg-purple-50 border-purple-100' },
              { icon: 'ð¦', titleKey: 'uspSeason', descKey: 'uspSeasonDesc', bg: 'bg-blue-50 border-blue-100' },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border p-5 ${item.bg}`}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{t(item.titleKey)}</div>
                <div className="text-sm text-gray-500">{t(item.descKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Philosophy Section ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{t('philosophyTitle')}</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">{t('philosophySubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophies.map((phil, i) => (
              <div key={i} className={`${phil.bg} rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow`}>
                <div className="text-4xl mb-4">{phil.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(phil.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(phil.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Advantages Section ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{t('advantageTitle')}</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">{t('advantageSubtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-2xl mb-5">{adv.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(adv.titleKey)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(adv.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{t('howTitle')}</h2>
            <p className="text-lg text-gray-500">{t('howSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-0.5 bg-brand-100" />
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 relative z-10 border-4 border-white">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2">Step {step.num}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(step.titleKey)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Categories Preview ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{t('categoryTitle')}</h2>
            <p className="text-lg text-gray-500">{t('categorySubtitle')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {CATEGORIES.filter(c => c.key !== 'all').map(cat => (
              <Link
                key={cat.key}
                href={`/browse?category=${cat.key}`}
                className="bg-white rounded-2xl border border-gray-100 p-5 text-center hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div className="text-sm font-semibold text-gray-600 group-hover:text-brand-600">{t(catI18nKey(cat.key))}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/browse" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              {t('ctaBrowse')} â
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Schools Section ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{t('schoolsSectionTitle')}</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">{t('schoolsSectionDesc')}</p>
            <div className="flex justify-center gap-10 mt-6">
              <div>
                <div className="text-3xl font-bold text-brand-600">{getSchoolCount()}</div>
                <div className="text-sm text-gray-500">{t('schoolsCount')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600">{getStates().length}</div>
                <div className="text-sm text-gray-500">{t('schoolsStatesCount')}</div>
              </div>
            </div>
          </div>
          {/* Show a grid of featured schools */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {getAllSchools().slice(0, 12).map(school => (
              <Link
                key={school.slug}
                href={`/school/${school.slug}`}
                className="bg-white rounded-xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-brand-200 transition-all group"
              >
                <div className="text-3xl mb-2">{school.emoji}</div>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-brand-600 truncate">{school.abbr}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/schools" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:underline">
              {t('schoolViewAll')} {getSchoolCount()} {t('schoolsCount')} â
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-20 bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">ð</div>
          <div className="absolute bottom-10 right-10 text-8xl">ð¦</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl">ð¤</div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{t('ctaTitle')}</h2>
          <p className="text-lg text-brand-100 mb-10">{t('ctaDesc')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/browse" className="inline-flex items-center gap-2 bg-white text-brand-600 font-bold rounded-xl px-8 py-4 hover:bg-brand-50 transition-colors shadow-lg text-base">
              ð {t('ctaBrowse')}
            </Link>
            <Link href="/login" className="inline-flex items-center gap-2 text-white border-2 border-white/30 font-bold rounded-xl px-8 py-4 hover:bg-white/10 transition-colors text-base">
              ð {t('navLogin')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
