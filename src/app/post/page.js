'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLang, CATEGORIES, SCHOOLS, catI18nKey } from '../../lib/i18n';
import { supabase, createItem, uploadImage, getUser } from '../../lib/supabase';

export default function PostPage() {
  const { t } = useLang();
  const router = useRouter();
  const fileRef = useRef();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    school: '',
  });

  useEffect(() => {
    getUser().then(u => {
      if (!u) router.push('/login');
      else setUser(u);
    });
  }, [router]);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      alert('File too large (max 5MB)');
      return;
    }
    setFile(f);
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) {
      if (f.size > 5 * 1024 * 1024) { alert('Max 5MB'); return; }
      setFile(f);
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target.result);
      reader.readAsDataURL(f);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);

    let image_url = null;
    if (file) {
      const { url, error } = await uploadImage(file, user.id);
      if (error) { console.error(error); setLoading(false); return; }
      image_url = url;
    }

    const { error } = await createItem({
      title: form.title,
      description: form.description,
      price: parseFloat(form.price) || 0,
      category: form.category,
      school: form.school,
      image_url,
      user_id: user.id,
    });

    setLoading(false);
    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => router.push('/my-listings'), 1500);
    }
  };

  if (!user) return null;

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center animate-fade-in">
          <div className="text-6xl mb-4">ð</div>
          <h2 className="text-2xl font-bold text-gray-900">{t('postSuccess')}</h2>
        </div>
      </div>
    );
  }

  const categories = CATEGORIES.filter(c => c.key !== 'all');

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">{t('postTitle')}</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t('postImage')}</label>
          <div
            onClick={() => fileRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            className={`border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 hover:border-brand-400 hover:bg-brand-50/30 ${
              preview ? 'border-brand-300 bg-brand-50/20' : 'border-gray-200 bg-gray-50'
            }`}
          >
            {preview ? (
              <div className="relative">
                <img src={preview} alt="Preview" className="w-full max-h-[300px] object-contain rounded-2xl" />
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setPreview(null); setFile(null); }}
                  className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
                >
                  â
                </button>
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="text-4xl mb-3">ð·</div>
                <p className="text-sm text-gray-500">{t('postImageHint')}</p>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t('postItemTitle')}</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            placeholder={t('postItemTitlePH')}
            className="input-field"
            maxLength={100}
          />
        </div>

        {/* Price + Category row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{t('postPrice')}</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
              placeholder={t('postPricePH')}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{t('postCategory')}</label>
            <select
              required
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
              className="input-field"
            >
              <option value="">{t('postSelectCategory')}</option>
              {categories.map(c => (
                <option key={c.key} value={c.key}>{c.icon} {t(catI18nKey(c.key))}</option>
              ))}
            </select>
          </div>
        </div>

        {/* School */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t('postSchool')}</label>
          <select
            required
            value={form.school}
            onChange={e => setForm(f => ({ ...f, school: e.target.value }))}
            className="input-field"
          >
            <option value="">{t('postSelectSchool')}</option>
            {SCHOOLS.map(s => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t('postDesc')}</label>
          <textarea
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            placeholder={t('postDescPH')}
            rows={4}
            className="input-field resize-none"
            maxLength={1000}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full text-base !py-4"
        >
          {loading ? t('postSubmitting') : t('postSubmit')}
        </button>
      </form>
    </div>
  );
}
