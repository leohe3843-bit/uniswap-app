'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLang, CATEGORIES, SCHOOLS, catI18nKey } from '../../lib/i18n';
import { fetchItems } from '../../lib/supabase';
import ItemCard from '../../components/ItemCard';

function BrowseContent() {
  const { t } = useLang();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSchool = searchParams.get('school') || '';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(initialCategory);
  const [school, setSchool] = useState(initialSchool);
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">{t('browseTitle')}</h1>
        <p className="text-gray-500">{t('browseSubtitle')}</p>
      </div>

      {/* Moving Season Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🔥</span>
          <div>
            <h3 className="font-bold text-lg">{t('movingBannerTitle')}</h3>
            <p className="text-sm text-orange-100">{t('movingBannerDesc')}</p>
          </div>
        </div>
        <button className="bg-white/20 backdrop-blur-sm text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/30 transition-colors shrink-0 border border-white/20">
          {t('movingBannerBtn')} →
        </button>
      </div>

      {/* Search + School filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="input-field !pl-12"
          />
        </div>
        <select
          value={school}
          onChange={e => setSchool(e.target.value)}
          className="input-field sm:!w-48"
        >
          <option value="">{t('schoolAll')}</option>
          {SCHOOLS.map(s => (
            <option key={s.key} value={s.key}>{s.short}</option>
          ))}
        </select>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-gray-100">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              category === cat.key
                ? 'bg-brand-600 text-white shadow-sm shadow-brand-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-200 hover:text-brand-600'
            }`}
          >
            <span>{cat.icon}</span>
            {t(catI18nKey(cat.key))}
          </button>
        ))}
      </div>

      {/* Items Grid */}
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
          <p className="text-gray-500 mb-6">{t('noItemsSub')}</p>
          <Link href="/post" className="btn-primary inline-block">
            ➕ {t('navPost')}
          </Link>
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
    </div>
  );
}

export default function BrowsePage() {
  return (
    <Suspense fallback={
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="h-8 bg-gray-100 rounded w-48 mb-8 animate-pulse" />
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
      </div>
    }>
      <BrowseContent />
    </Suspense>
  );
}
