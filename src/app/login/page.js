'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLang, SCHOOLS } from '../../lib/i18n';
import { sendMagicLink, getUser, getProfile, upsertProfile, onAuthStateChange } from '../../lib/supabase';

export default function LoginPage() {
  const { t } = useLang();
  const router = useRouter();
  const [step, setStep] = useState('email'); // 'email' | 'sent' | 'profile'
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);
  const [profile, setProfile] = useState({ display_name: '', school: '' });

  // Redirect if already logged in
  useEffect(() => {
    getUser().then(u => {
      if (u) router.push('/');
    });
  }, [router]);

  // Listen for auth state change (user clicks magic link and comes back)
  useEffect(() => {
    const { data: { subscription } } = onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const uid = session.user.id;
        setUserId(uid);
        const { data: existing } = await getProfile(uid);
        if (existing?.display_name) {
          router.push('/');
        } else {
          setStep('profile');
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [router]);

  const handleSendLink = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setLoading(true);
    setError('');
    const { error: err } = await sendMagicLink(email);
    setLoading(false);
    if (err) {
      setError(err.message);
    } else {
      setStep('sent');
    }
  };

  const handleProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    await upsertProfile({ id: userId, ...profile });
    setLoading(false);
    router.push('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="text-4xl font-black mb-2">
            <span className="text-gray-900">Uni</span>
            <span className="text-brand-600">Swap</span>
          </div>
          <p className="text-gray-500">{t('loginTitle')}</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          {/* Step: Email */}
          {step === 'email' && (
            <form onSubmit={handleSendLink} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('loginEmail')}</label>
                <div className="flex items-stretch border border-gray-200 rounded-xl overflow-hidden focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100 transition-all">
                  <div className="flex items-center gap-1.5 px-4 bg-gray-50 border-r border-gray-200 text-sm text-gray-500">
                    <span className="text-lg">📧</span>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t('loginEmailPH')}
                    className="flex-1 px-4 py-3.5 outline-none text-base"
                    autoFocus
                  />
                </div>
              </div>
              <p className="text-xs text-gray-400 flex items-center gap-1">🔒 {t('loginHint')}</p>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading || !email.includes('@')}
                className="btn-primary w-full !py-4 text-base"
              >
                {loading ? t('loginSending') : t('loginSendLink')}
              </button>
            </form>
          )}

          {/* Step: Link Sent */}
          {step === 'sent' && (
            <div className="text-center space-y-5">
              <div className="text-5xl mb-2">📬</div>
              <h2 className="text-lg font-bold">{t('loginSentTitle')}</h2>
              <p className="text-sm text-gray-500">
                {t('loginSentDesc')} <strong className="text-gray-700">{email}</strong>
              </p>
              <p className="text-xs text-gray-400">{t('loginSentHint')}</p>
              <button
                type="button"
                onClick={() => { setStep('email'); setError(''); }}
                className="w-full text-center text-sm text-gray-400 hover:text-gray-600 mt-4"
              >
                ← {t('loginBackToEmail')}
              </button>
            </div>
          )}

          {/* Step: Profile */}
          {step === 'profile' && (
            <form onSubmit={handleProfile} className="space-y-5">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👋</div>
                <h2 className="text-lg font-bold">{t('profileTitle')}</h2>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('profileName')}</label>
                <input
                  type="text"
                  required
                  value={profile.display_name}
                  onChange={e => setProfile(p => ({ ...p, display_name: e.target.value }))}
                  placeholder={t('profileNamePH')}
                  className="input-field"
                  maxLength={30}
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('profileSchool')}</label>
                <select
                  required
                  value={profile.school}
                  onChange={e => setProfile(p => ({ ...p, school: e.target.value }))}
                  className="input-field"
                >
                  <option value="">{t('postSelectSchool')}</option>
                  {SCHOOLS.map(s => (
                    <option key={s.key} value={s.key}>{s.label}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full !py-4 text-base"
              >
                {t('profileSave')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
