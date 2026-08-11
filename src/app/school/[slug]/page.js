'use client';
import { use, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { getSchoolBySlug, getSchoolsByState } from '@/lib/schools';

export default function SchoolCommunityPage({ params }) {
  const { slug } = use(params);
  const { t } = useLang();
  const school = getSchoolBySlug(slug);
  const [bulletinText, setBulletinText] = useState('');
  const [bulletins, setBulletins] = useState([
    { id: 1, text: 'æäººéè¦å¾®ç§¯åè¯¾æ¬åï¼å ä¹å¨æ°ï¼åä»·åºï¼', time: '2 å°æ¶å', author: 'Student A' },
    { id: 2, text: 'ä¸å­¦ææäººè¦åç§åï¼æ ¡å­éè¿ä¸¤å®¤ä¸å', time: '5 å°æ¶å', author: 'Student B' },
    { id: 3, text: 'æ¬å®¶å­£æ¥äºï¼æä¸æ¹å¨å·åå®¶å·è¦åºï¼æå´è¶£ç§è', time: '1 å¤©å', author: 'Student C' },
  ]);

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">School not found</h1>
          <Link href="/schools" className="text-brand-600 hover:underline">{t('schoolBackToAll')}</Link>
        </div>
      </div>
    );
  }

  // Find nearby schools (same state)
  const allGroups = getSchoolsByState();
  const stateGroup = allGroups.find(g => g.stateCode === school.stateCode);
  const nearbySchools = stateGroup ? stateGroup.schools.filter(s => s.slug !== slug).slice(0, 4) : [];

  const handlePostBulletin = () => {
    if (!bulletinText.trim()) return;
    setBulletins(prev => [{ id: Date.now(), text: bulletinText, time: 'Just now', author: 'You' }, ...prev]);
    setBulletinText('');
  };

  // Demo items
  const demoItems = [
    { id: 1, title: 'IKEA ä¹¦æ¡ 9ææ°', price: 45, cat: 'å®¶å·' },
    { id: 2, title: 'MacBook Pro åçµå¨', price: 20, cat: 'çµå­äº§å' },
    { id: 3, title: 'å¾®ç§¯åææ ç¬¬8ç', price: 15, cat: 'æç§ä¹¦' },
    { id: 4, title: 'ä¸éé¢çéå¥è£', price: 0, cat: 'å¨å·' },
  ];

  const demoWants = [
    { id: 1, title: 'æ±ä¸å¼ åäººåºå«', budget: 50 },
    { id: 2, title: 'æ±äºæèªè¡è½¦', budget: 80 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* School Hero Header with school colors */}
      <section
        className="relative pt-16 pb-12 px-4"
        style={{
          background: `linear-gradient(135deg, ${school.colors[0]} 0%, ${school.colors[0]}DD 50%, ${school.colors[0]}99 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto text-white">
          <Link href="/schools" className="inline-flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors">
            â {t('schoolBackToAll')}
          </Link>

          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-4xl">
              {school.emoji}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{school.name}</h1>
              <p className="text-white/80 mt-1">ð {school.city}, {school.state}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs">{school.mascot}</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs">{t('schoolCommunity')}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-8">
            <Link
              href="/post"
              className="px-5 py-2.5 bg-white text-gray-900 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {t('schoolPostItem')}
            </Link>
            <Link
              href="/browse"
              className="px-5 py-2.5 bg-white/20 backdrop-blur text-white rounded-xl text-sm font-medium hover:bg-white/30 transition-colors"
            >
              {t('schoolBrowseItems')}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content â 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bulletin Board */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                ð {t('schoolBulletin')}
              </h2>

              {/* Post input */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={bulletinText}
                  onChange={e => setBulletinText(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handlePostBulletin()}
                  placeholder={t('schoolBulletinPH')}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600"
                />
                <button
                  onClick={handlePostBulletin}
                  className="px-5 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-600/90 transition-colors"
                >
                  {t('schoolBulletinPost')}
                </button>
              </div>

              {/* Bulletin list */}
              <div className="space-y-3">
                {bulletins.map(b => (
                  <div key={b.id} className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-800">{b.text}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>{b.author}</span>
                      <span>Â·</span>
                      <span>{b.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Items for Sale */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  ð·ï¸ {t('schoolItems')}
                </h2>
                <Link href="/browse" className="text-sm text-brand-600 hover:underline">{t('schoolViewAll')} â</Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {demoItems.map(item => (
                  <div key={item.id} className="p-4 border border-gray-100 rounded-xl hover:border-brand-600/30 hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                        <span className="text-xs text-gray-400 mt-1">{item.cat}</span>
                      </div>
                      <span className="text-sm font-bold" style={{ color: school.colors[0] }}>
                        {item.price === 0 ? t('freeLabel') : `$${item.price}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Want to Buy */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  ð {t('schoolWants')}
                </h2>
                <Link href="/want-to-buy" className="text-sm text-brand-600 hover:underline">{t('schoolViewAll')} â</Link>
              </div>

              <div className="space-y-3">
                {demoWants.map(w => (
                  <div key={w.id} className="p-4 border border-gray-100 rounded-xl hover:border-brand-600/30 transition-all cursor-pointer flex items-center justify-between">
                    <span className="text-sm text-gray-800">{w.title}</span>
                    <span className="text-xs px-2 py-1 rounded-lg bg-green-50 text-green-600">
                      {t('priceUnit')}{w.budget} budget
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar â 1/3 */}
          <div className="space-y-6">
            {/* School Info Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">{t('schoolAbout')}</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>{t('schoolLocation')}</span>
                  <span className="text-gray-900">{school.city}, {school.stateCode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Mascot</span>
                  <span className="text-gray-900">{school.emoji} {school.mascot}</span>
                </div>
              </div>

              {/* School colors display */}
              <div className="mt-4 flex gap-2">
                <div className="flex-1 h-8 rounded-lg" style={{ backgroundColor: school.colors[0] }} />
                <div className="w-12 h-8 rounded-lg" style={{ backgroundColor: school.colors[1], border: school.colors[1] === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' }} />
              </div>

              <button
                className="w-full mt-4 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: school.colors[0] }}
              >
                {t('schoolJoinCommunity')}
              </button>
            </div>

            {/* Nearby Schools */}
            {nearbySchools.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{t('schoolNearby')}</h3>
                <div className="space-y-2">
                  {nearbySchools.map(ns => (
                    <Link
                      key={ns.slug}
                      href={`/school/${ns.slug}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg">{ns.emoji}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{ns.abbr}</div>
                        <div className="text-xs text-gray-400">{ns.city}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
