import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ========== AUTH ==========

export async function sendMagicLink(email) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: typeof window !== 'undefined'
        ? window.location.origin
        : undefined,
    },
  });
  return { error };
}

export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange(callback);
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// ========== ITEMS ==========

export async function fetchItems({ category, search, school } = {}) {
  let query = supabase
    .from('items')
    .select('*, profiles(display_name, school)')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }
  if (search) {
    query = query.ilike('title', `%${search}%`);
  }
  if (school) {
    query = query.eq('school', school);
  }
  const { data, error } = await query;
  return { data: data || [], error };
}

export async function fetchMyItems(userId) {
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data: data || [], error };
}

export async function fetchItemById(id) {
  const { data, error } = await supabase
    .from('items')
    .select('*, profiles(display_name, school, phone)')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function createItem({ title, description, price, category, school, image_url, user_id }) {
  const { data, error } = await supabase
    .from('items')
    .insert({ title, description, price, category, school, image_url, user_id, is_active: true })
    .select()
    .single();
  return { data, error };
}

export async function toggleItemActive(id, is_active) {
  const { error } = await supabase
    .from('items')
    .update({ is_active })
    .eq('id', id);
  return { error };
}

export async function deleteItem(id) {
  const { error } = await supabase
    .from('items')
    .delete()
    .eq('id', id);
  return { error };
}

// ========== STORAGE ==========

export async function uploadImage(file, userId) {
  const ext = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}.${ext}`;
  const { data, error } = await supabase.storage
    .from('item-images')
    .upload(fileName, file);

  if (error) return { url: null, error };

  const { data: { publicUrl } } = supabase.storage
    .from('item-images')
    .getPublicUrl(fileName);

  return { url: publicUrl, error: null };
}

// ========== PROFILES ==========

export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
}

export async function upsertProfile({ id, display_name, school }) {
  const { error } = await supabase
    .from('profiles')
    .upsert({ id, display_name, school });
  return { error };
}
