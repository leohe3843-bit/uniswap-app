'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLang, CATEGORIES, catI18nKey } from '../../lib/i18n';
import { getUser, fetchMyItems, toggleItemActive, deleteItem } from '../../lib/supabase';

export default function MyListingsPage() {
  const { t } = useLang();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser().then(u => {
      if (!u) { router.push('/login'); return; }
      setUser(u);
      fetchMyItems(u.id).then(({ data }) => {
        setItems(data);
        setLoading(false);
      });
    });
  }, [router]);

  const handleToggle = async (item) => {
    const newStatus = !item.is_active;
    // Optimistic update
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, is_active: newStatus } : i));
    const { error } = await toggleItemActive(item.id, newStatus);
    if (error) {
      // Revert
      setItems(prev => prev.map(i => i.id === item.id ? { ...i, is_active: !newStatus } : i));
    }
  };

  const handleDelete = async (item) => {
    if (!confirm(t('myDeleteConfirm'))) return;
    setItems(prev => prev.filter(i => i.id !== item.id));
    const { error } = await deleteItem(item.id);
    if (error) {
      // Refetch
      const { data } = await fetchMyItems(user.id);
      setItems(data);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{t('myTitle')}</h1>
        <Link href="/post" className="btn-primary text-sm !py-2.5">
          ➕ {t('navPost')}
        </Link>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 animate-pulse">
              <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-100 rounded w-1/2" />
                <div className="h-3 bg-gray-100 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t('myEmpty')}</h3>
          <Link href="/post" className="btn-primary mt-4 inline-block">
            {t('myEmptyAction')}
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map(item => {
            const cat = CATEGORIES.find(c => c.key === item.category);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border p-4 flex gap-4 transition-all duration-200 ${
                  item.is_active ? 'border-gray-100' : 'border-gray-100 opacity-60'
                }`}
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl text-gray-300">
                      {cat?.icon || '📦'}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-bold text-brand-600">
                          {item.price === 0 ? t('freeLabel') : `$${item.price}`}
                        </span>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs text-gray-400">{cat?.icon} {t(catI18nKey(item.category))}</span>
                      </div>
                    </div>

                    {/* Status badge */}
                    <span className={`badge flex-shrink-0 ${item.is_active ? 'badge-active' : 'badge-inactive'}`}>
                      {item.is_active ? t('myOnline') : t('myOffline')}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-3">
                    {/* Toggle switch */}
                    <button
                      onClick={() => handleToggle(item)}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className={`toggle ${item.is_active ? 'toggle-active' : 'toggle-inactive'}`}>
                        <span className={`toggle-dot ${item.is_active ? 'toggle-dot-on' : 'toggle-dot-off'}`} />
                      </div>
                      <span className="text-gray-500 font-medium">
                        {item.is_active ? t('myToggleOff') : t('myToggleOn')}
                      </span>
                    </button>

                    <span className="text-gray-200">|</span>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(item)}
                      className="text-sm text-red-400 hover:text-red-600 font-medium transition-colors"
                    >
                      {t('myDelete')}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
