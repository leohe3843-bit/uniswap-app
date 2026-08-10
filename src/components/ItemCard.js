'use client';
import Link from 'next/link';
import { useLang, CATEGORIES, catI18nKey } from '../lib/i18n';

export default function ItemCard({ item }) {
  const { t } = useLang();
  const cat = CATEGORIES.find(c => c.key === item.category);

  const timeAgo = (dateStr) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h`;
    const days = Math.floor(hrs / 24);
    return `${days}d`;
  };

  return (
    <Link href={`/item/${item.id}`} className="card group cursor-pointer">
      {/* Image */}
      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-gray-300">
            {cat?.icon || 'ð¦'}
          </div>
        )}
        {/* Price tag */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm ${
            item.price === 0
              ? 'bg-emerald-500 text-white'
              : 'bg-white/95 text-gray-900 backdrop-blur-sm'
          }`}>
            {item.price === 0 ? t('freeLabel') : `$${item.price}`}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
            {cat?.icon} {t(catI18nKey(item.category))}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate group-hover:text-brand-600 transition-colors">
          {item.title}
        </h3>
        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1">
            ð {item.profiles?.school || item.school || ''}
          </span>
          <span>{timeAgo(item.created_at)}</span>
        </div>
      </div>
    </Link>
  );
}
