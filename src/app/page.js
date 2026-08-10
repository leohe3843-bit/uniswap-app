'use client';
import { useState, useEffect } from 'react';
import { useLang, CATEGORIES, SCHOOLS, catI18nKey } from '../lib/i18n';
import { fetchItems } from '../lib/supabase';
import ItemCard from '../components/ItemCard';

export default function HomePage() {
  const { t } = useLang();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [school, setSchool] = useState('');
  const [search, setSearch] = useState('');
  const [searchDebounce, setSearchDebounce] = useState('');

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setSearchDebounce(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch items
  useEffect(() => {
    setLoading(true);
    fetchItems({
      category: category !== 'all' ? category : undefined,
      search: searchDebounce || undefined,
      school: school || undefined,
    }).then(({ data }) => {
      setItems(data);
      setLoading(false);
    });
  }, [category, searchDebounce, school]);

  return (
    <div>
      {/* Hero with USP */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-amber-50 px-4 sm:px-6 pt-12 pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-3">
            {t('homeTitle')}
          </h1>
          <p className="text-gray-500 text-lg mb-8">{t('homeSubtitle')}</p>

          {/* USP strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            {[
              { icon: '💰', title: t('uspFree'), desc: t('uspFreeDesc'), color: 'bg-blue-50 border-blue-100' },
              { icon: '🎓', title: t('uspCampus'), desc: t('uspCampusDesc'), color: 'bg-amber-50 border-amber-100' },
              { icon: '🛡️', title: t('uspPrivacy'), desc: t('uspPrivacyDesc'), color: 'bg-emerald-50 border-emerald-100' },
              { icon: '📦', title: t('uspSeason'), desc: t('uspSeasonDesc'), color: 'bg-purple-50 border-purple-100' },
            ].map((usp, i) => (
              <div key={i} className={`${usp.color} border rounded-xl p-4 text-left`}>
                <div className="text-2xl mb-2">{usp.icon}</div>
                <div className="font-bold text-sm text-gray-900">{usp.title}</div>
                <div className="text-xs text-gray-500 mt-1">{usp.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-[68px] z-40 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          {/* Search bar */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="input-field !pl-11"
              />
            </div>
            <select
              value={school}
              onChange={e => setSchool(e.target.value)}
              className="input-field !w-auto min-w-[140px]"
            >
              <option value="">{t('schoolAll')}</option>
              {SCHOOLS.map(s => (
                <option key={s.key} value={s.key}>{s.short}</option>
              ))}
            </select>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  category === cat.key
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{cat.icon}</span>
                {t(catI18nKey(cat.key))}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                <div className="aspect-[4/3] bg-gray-100 animate-pulse" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4" />
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('noItems')}</h3>
            <p className="text-gray-500">{t('noItemsSub')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
