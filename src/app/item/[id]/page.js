'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useLang, CATEGORIES, SCHOOLS, catI18nKey } from '../../../lib/i18n';
import { fetchItemById } from '../../../lib/supabase';

export default function ItemDetailPage() {
  const { t } = useLang();
  const router = useRouter();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchItemById(id).then(({ data, error }) => {
      if (error || !data) router.push('/');
      else setItem(data);
      setLoading(false);
    });
  }, [id, router]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
          <div className="aspect-video bg-gray-100" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-100 rounded w-2/3" />
            <div className="h-4 bg-gray-100 rounded w-1/3" />
            <div className="h-20 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!item) return null;

  const cat = CATEGORIES.find(c => c.key === item.category);
  const school = SCHOOLS.find(s => s.key === item.school);
  const date = new Date(item.created_at).toLocaleDateString();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6 font-medium"
      >
        â {t('detailBack')}
      </button>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        {/* Image */}
        {item.image_url ? (
          <div className="aspect-video bg-gray-100">
            <img src={item.image_url} alt={item.title} className="w-full h-full object-contain bg-gray-50" />
          </div>
        ) : (
          <div className="aspect-video bg-gray-50 flex items-center justify-center text-6xl text-gray-200">
            {cat?.icon || 'ð¦'}
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Title + Price */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{item.title}</h1>
            <span className={`text-2xl font-black flex-shrink-0 ${
              item.price === 0 ? 'text-emerald-500' : 'text-brand-600'
            }`}>
              {item.price === 0 ? t('freeLabel') : `$${item.price}`}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="badge bg-gray-100 text-gray-700">
              {cat?.icon} {t(catI18nKey(item.category))}
            </span>
            {school && (
              <span className="badge bg-brand-50 text-brand-700">
                ð {school.short} Â· {school.city}
              </span>
            )}
            <span className="badge bg-gray-50 text-gray-500">
              ð {date}
            </span>
          </div>

          {/* Description */}
          {item.description && (
            <div className="border-t border-gray-100 pt-6 mb-6">
              <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">{item.description}</p>
            </div>
          )}

          {/* Seller info */}
          <div className="border-t border-gray-100 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold">
                  {(item.profiles?.display_name || '?')[0].toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {item.profiles?.display_name || 'User'}
                  </div>
                  <div className="text-xs text-gray-400">{t('detailPostedBy')}</div>
                </div>
              </div>

              {/* Contact â in MVP, show a message prompt */}
              <button
                onClick={() => alert(
                  item.profiles?.phone
                    ? `ð± ${item.profiles.phone}`
                    : 'Contact feature coming soon / èç³»åè½å³å°ä¸çº¿'
                )}
                className="btn-primary text-sm !py-2.5"
              >
                ð¬ {t('detailContact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
