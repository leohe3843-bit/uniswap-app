'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '../lib/i18n';
import { supabase } from '../lib/supabase';

export default function Nav() {
  const { t, toggle } = useLang();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user || null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const links = [
    { href: '/', label: t('navHome'), icon: '🏠' },
    { href: '/browse', label: t('navBrowse'), icon: '🔍' },
    { href: '/want-to-buy', label: t('navWantToBuy'), icon: '📝' },
    { href: '/post', label: t('navPost'), icon: '➕', auth: true },
    { href: '/my-listings', label: t('navMyItems'), icon: '📋', auth: true },
    { href: '/safety', label: t('navSafety'), icon: '🛡️' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-gray-900">Uni</span>
            <span className="text-brand-600">Swap</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(link => {
            if (link.auth && !user) return null;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="px-3 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg hover:border-brand-500 hover:text-brand-600 transition-all"
          >
            {t('langSwitch')}
          </button>

          {user ? (
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.href = '/';
              }}
              className="hidden md:block text-sm text-gray-500 hover:text-gray-700 font-medium px-3 py-1.5"
            >
              {t('navLogout')}
            </button>
          ) : (
            <Link
              href="/login"
              className="btn-primary text-sm !py-2 !px-5"
            >
              {t('navLogin')}
            </Link>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {links.map(link => {
            if (link.auth && !user) return null;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive(link.href) ? 'bg-brand-50 text-brand-700' : 'text-gray-600'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
          {user && (
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                setMenuOpen(false);
                window.location.href = '/';
              }}
              className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500"
            >
              <span className="text-lg">👋</span>
              {t('navLogout')}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
