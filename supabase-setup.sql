-- =============================================
-- UniSwap Supabase Database Setup
-- å¨ Supabase Dashboard > SQL Editor ä¸­è¿è¡æ­¤èæ¬
-- =============================================

-- 1. ç¨æ·èµæè¡¨
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  display_name TEXT NOT NULL DEFAULT '',
  school TEXT NOT NULL DEFAULT '',
  phone TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. ååè¡¨
CREATE TABLE items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  price DECIMAL(10,2) DEFAULT 0,
  category TEXT NOT NULL,
  school TEXT NOT NULL,
  image_url TEXT DEFAULT '',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. ç´¢å¼ï¼å éå¸¸ç¨æ¥è¯¢
CREATE INDEX idx_items_active ON items(is_active) WHERE is_active = true;
CREATE INDEX idx_items_category ON items(category);
CREATE INDEX idx_items_school ON items(school);
CREATE INDEX idx_items_user ON items(user_id);
CREATE INDEX idx_items_created ON items(created_at DESC);

-- 4. èªå¨æ´æ° updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER items_updated_at
  BEFORE UPDATE ON items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 5. æ°ç¨æ·æ³¨åæ¶èªå¨åå»º profile
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- 6. Row Level Security (RLS) ç­ç¥
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE items ENABLE ROW LEVEL SECURITY;

-- Profiles: ææäººå¯è¯»ï¼æ¬äººå¯å
CREATE POLICY "Public profiles are viewable" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Items: å¨æ¶ååææäººå¯è¯»ï¼æ¬äººå¯å¢å æ¹
CREATE POLICY "Active items are viewable" ON items
  FOR SELECT USING (is_active = true OR auth.uid() = user_id);

CREATE POLICY "Users can create items" ON items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own items" ON items
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own items" ON items
  FOR DELETE USING (auth.uid() = user_id);

-- 7. Storage Bucket (å¨ Supabase Dashboard > Storage ä¸­æå¨åå»º)
-- Bucket name: item-images
-- Public: Yes (åè®¸å¬å¼è®¿é®å¾ç)
-- Allowed MIME types: image/jpeg, image/png, image/webp, image/gif
-- Max file size: 5MB

-- Storage RLS (å¨ Storage > Policies ä¸­è®¾ç½®):
-- SELECT: åè®¸ææäºº (bucket_id = 'item-images')
-- INSERT: ä»éå·²ç»å½ç¨æ· (bucket_id = 'item-images' AND auth.role() = 'authenticated')
-- DELETE: ä»éæä»¶ææè
