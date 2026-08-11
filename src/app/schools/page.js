'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { getSchoolsByState, searchSchools, getSchoolCount, getStates } from '@/lib/schools';

export default function SchoolsPage() {
  const { t } = useLang();
  const [query, setQuery] = useState('');
  const schoolsByState = getSchoolsByState();
  const totalSchools = getSchoolCount();
  const totalStates = getStates().length;

  // Filter by search
  const matchedSlugs = query.trim()
    ? new Set(searchSchools(query).map(s => s.slug))
    : null;

  // Filter groups
  const filteredGroups = matchedSlugs
    ? schoolsByState
        .map(g => ({ ...g, schools: g.schools.filter(s => matchedSlugs.has(s.slug)) }))
        .filter(g => g.schools.length > 0)
    : schoolsByState;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <section className="pt-16 pb-10 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{t('schoolsPageTitle')}</h1>
        <p className="text-lg text-gray-500 mb-8">{t('schoolsPageDesc')}</p>

        {/* Stats */}
        <div className="flex justify-center gap-12 mb-8">
          <div>
            <div className="text-3xl font-bold text-brand-600">{totalSchools}</div>
            <div className="text-sm text-gray-500">{t('schoolsCount')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-600">{totalStates}</div>
            <div className="text-sm text-gray-500">{t('schoolsStatesCount')}</div>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t('schoolsSearchPH')}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600"
          />
        </div>
      </section>

      {/* School Groups by State */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        {filteredGroups.length === 0 && (
          <p className="text-center text-gray-400 py-12">{t('noItems')}</p>
        )}

        {filteredGroups.map(group => (
          <div key={group.stateCode} className="mb-10">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-brand-600/10 text-brand-600 rounded-lg text-xs font-bold">
                {group.stateCode}
              </span>
              {group.state}
              <span className="text-sm font-normal text-gray-400">({group.schools.length})</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.schools.map(school => (
                <Link
                  key={school.slug}
                  href={`/school/${school.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 hover:border-brand-600/30 hover:shadow-lg transition-all p-5"
                >
                  <div className="flex items-start gap-4">
                    {/* School color accent */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: school.colors[0] + '18' }}
                    >
                      {school.emoji}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors truncate">
                        {school.abbr}
                      </h3>
                      <p className="text-xs text-gray-400 truncate">{school.name}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        ð {school.city}, {school.stateCode}
                      </p>
                    </div>
                  </div>

                  {/* School colors bar */}
                  <div className="mt-3 flex gap-1">
                    <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: school.colors[0] }} />
                    <div className="h-1 w-8 rounded-full" style={{ backgroundColor: school.colors[1] }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
