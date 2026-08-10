# UniSwap MVP é¨ç½²æå

## ç¬¬ä¸æ­¥ï¼å®è£ Node.js

1. æå¼ https://nodejs.org
2. ä¸è½½ LTS çæ¬ï¼å®è£

## ç¬¬äºæ­¥ï¼åå»º Supabase é¡¹ç®

1. æå¼ https://supabase.com ï¼ç¨ GitHub ç»å½
2. ç¹ "New Project"ï¼èµ·ä¸ªåå­ï¼å¦ uniswapï¼ï¼è®¾ç½®å¯ç 
3. ç­é¡¹ç®åå»ºå®æï¼çº¦ 1-2 åéï¼

### éç½®æ°æ®åº
4. å·¦ä¾§èå â **SQL Editor** â ç¹ "New Query"
5. æ `supabase-setup.sql` çåå®¹å¨é¨ç²è´´è¿å»ï¼ç¹ **Run**

### éç½®å¾çå­å¨
6. å·¦ä¾§èå â **Storage** â ç¹ "New Bucket"
7. åå­å¡« `item-images`ï¼å¾é **Public bucket**ï¼ç¹ Create
8. ç¹è¿ item-images â Policies â New Policy â é "Allow public access for SELECT"
9. åæ·»ä¸ä¸ª Policyï¼å¯¹ INSERT æä½é "Allow access for authenticated users only"

### é®ç®±ç»å½ï¼å·²é»è®¤å¼å¯ï¼
10. å·¦ä¾§èå â **Authentication** â **Sign In / Providers**
11. ç¡®è®¤ **Email** æ¾ç¤ºä¸º **Enabled**ï¼é»è®¤å·²å¼å¯ï¼
12. å·¦ä¾§ â **URL Configuration** â Site URL è®¾ä¸º `http://localhost:3000`

### è·åå¯é¥
13. å·¦ä¾§èå â **Settings** â **API**
14. å¤å¶ **Project URL** å **anon public key**

## ç¬¬ä¸æ­¥ï¼éç½®é¡¹ç®

1. æå¼ç»ç«¯ï¼Terminalï¼ï¼è¿å¥é¡¹ç®æä»¶å¤¹ï¼
   ```bash
   cd uniswap-app
   ```
2. å¤å¶ç¯å¢åéæä»¶ï¼
   ```bash
   cp .env.local.example .env.local
   ```
3. ç¼è¾ `.env.local`ï¼å¡«å¥ä½ ä» Supabase å¤å¶ç URL å Key

## ç¬¬åæ­¥ï¼å®è£å¹¶è¿è¡

```bash
npm install
npm run dev
```

æå¼æµè§å¨è®¿é® http://localhost:3000

## ç¬¬äºæ­¥ï¼é¨ç½²å° Vercelï¼ä¸çº¿ï¼

1. å¨ GitHub åå»ºä¸ä¸ªä»åºï¼æä»£ç æ¨ä¸å»
2. æå¼ https://vercel.com ï¼ç¨ GitHub ç»å½
3. ç¹ "Import Project"ï¼éä½ çä»åº
4. å¨ç¯å¢åéè®¾ç½®éæ·»å ï¼
   - `NEXT_PUBLIC_SUPABASE_URL` = ä½ ç Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = ä½ ç anon key
5. ç¹ Deployï¼ç­å åéå°±ä¸çº¿äº
6. Vercel ä¼ç»ä½ ä¸ä¸ª xxx.vercel.app çåå

## åç»­å¯éï¼ç»å®èªå®ä¹åå

å¨ Vercel é¡¹ç®è®¾ç½® â Domains â æ·»å ä½ è´­ä¹°çååï¼çº¦ $10-20/å¹´ï¼
