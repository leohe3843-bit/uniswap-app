'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLang, CATEGORIES, SCHOOLS, catI18nKey } from '../../lib/i18n';

const DEMO_REQUESTS = [
  {
    id: 1,
    title: { zh: '求一张书桌', en: 'Looking for a desk' },
    desc: { zh: '搬进新公寓，需要一张简单的书桌，IKEA 的最好。能送到 Homewood 校区附近加分！', en: 'Just moved into a new apartment, need a simple desk. IKEA preferred. Bonus if you can deliver near Homewood campus!' },
    budget: '$0-50',
    category: 'furniture',
    school: 'jhu',
    user: 'Alex W.',
    date: '2 hours ago',
    urgent: false,
  },
  {
    id: 2,
    title: { zh: '急求！毕业搬家需要行李箱', en: 'URGENT: Need luggage for graduation move' },
    desc: { zh: '下周就要搬家了，急需一个大号行李箱！28寸以上最好。可以马上来取。', en: 'Moving out next week, urgently need a large suitcase! 28 inches or bigger. Can pick up right away.' },
    budget: '$0-30',
    category: 'other',
    school: 'umd',
    user: 'Mia L.',
    date: '5 hours ago',
    urgent: true,
  },
  {
    id: 3,
    title: { zh: '收一台二手显示器', en: 'Want to buy a used monitor' },
    desc: { zh: '找一台 24 寸左右的显示器用来写代码，不需要太高配置，能用就行。预算有限求好心人！', en: 'Looking for a ~24 inch monitor for coding. Nothing fancy needed, just functional. Budget is tight!' },
    budget: '$30-80',
    category: 'electronics',
    school: 'georgetown',
    user: 'Kevin Z.',
    date: '1 day ago',
    urgent: false,
  },
  {
    id: 4,
    title: { zh: '求购厨房用品套装', en: 'Looking for kitchen starter set' },
    desc: { zh: '刚来美国，什么都没有。需要锅碗瓢盆基本厨房用品，最好是打包出的那种。College Park 附近。', en: 'Just arrived in the US with nothing. Need basic kitchen essentials — pots, pans, utensils. Prefer a bundle deal. Near College Park.' },
    budget: '$0-40',
    category: 'kitchen',
    school: 'umd',
    user: 'Sarah C.',
    date: '1 day ago',
    urgent: false,
  },
  {
    id: 5,
    title: { zh: '求二手自行车', en: 'Looking for a used bike' },
    desc: { zh: '想买一辆代步自行车，上下课用。不需要太好，能骑就行。最好在 JHU 附近取。', en: 'Need a commuter bike for getting to class. Doesn\'t have to be fancy, just rideable. Prefer pickup near JHU.' },
    budget: '$30-100',
    category: 'transport',
    school: 'jhu',
    user: 'David H.',
    date: '3 days ago',
    urgent: false,
  },
];

export default function WantToBuyPage() {
  const { t, lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? DEMO_REQUESTS
    : DEMO_REQUESTS.filter(r => r.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">{t('wantTitle')}</h1>
          <p className="text-gray-500">{t('wantSubtitle')}</p>
        </div>
        <Link href="/login" className="btn-primary inline-flex items-center gap-2 text-sm !py-3 !px-6 shrink-0">
          📝 {t('wantPostBtn')}
        </Link>
      </div>

      {/* Demo notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 mb-6 flex items-center gap-3">
        <span className="text-xl">💡</span>
        <p className="text-sm text-amber-700">{t('wantDemoNotice')}</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === cat.key
                ? 'bg-brand-600 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-200 hover:text-brand-600'
            }`}
          >
            <span>{cat.icon}</span>
            {t(catI18nKey(cat.key))}
          </button>
        ))}
      </div>

      {/* Request cards */}
      <div className="space-y-4">
        {filtered.map(req => (
          <div key={req.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {req.urgent && (
                    <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full">
                      🔥 {t('tagUrgent')}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                    {CATEGORIES.find(c => c.key === req.category)?.icon} {t(catI18nKey(req.category))}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full">
                    📍 {SCHOOLS.find(s => s.key === req.school)?.short}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{req.title[lang] || req.title.zh}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{req.desc[lang] || req.desc.zh}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>👤 {req.user}</span>
                  <span>🕐 {req.date}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3 shrink-0">
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">{t('wantBudget')}</div>
                  <div className="text-lg font-bold text-brand-600">{req.budget}</div>
                </div>
                <button className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-brand-100 transition-colors">
                  💬 {t('wantContact')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t('wantEmpty')}</h3>
          <p className="text-gray-500">{t('wantEmptySub')}</p>
        </div>
      )}
    </div>
  );
}
