'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const t = {
  zh: {
    // Nav
    brand: 'UniSwap',
    navHome: 'é¦é¡µ',
    navPost: 'åå¸',
    navMyItems: 'æçåå',
    navLogin: 'ç»å½',
    navLogout: 'éåº',
    langSwitch: 'EN',

    // Categories
    catAll: 'å¨é¨',
    catFurniture: 'å®¶å·',
    catElectronics: 'çµå­äº§å',
    catTextbooks: 'æç§ä¹¦',
    catKitchen: 'å¨å·',
    catClothing: 'æé¥°',
    catTransport: 'äº¤éå·¥å·',
    catDaily: 'çæ´»ç¨å',
    catOther: 'å¶ä»',

    // Schools
    schoolAll: 'å¨é¨å­¦æ ¡',
    schoolJHU: 'Johns Hopkins',
    schoolUMD: 'UMD',
    schoolGU: 'Georgetown',

    // Home
    homeTitle: 'æ ¡å­äºæï¼è½»æ¾æå®',
    homeSubtitle: 'å¨ä½ çå­¦æ ¡å¨è¾¹æ¾å°æåç®çäºæå¥½ç©',
    searchPlaceholder: 'æç´¢åå...',
    noItems: 'ææ åå',
    noItemsSub: 'æä¸ºç¬¬ä¸ä¸ªåå¸èå§ï¼',
    freeLabel: 'åè´¹',
    priceUnit: '$',

    // USP banner
    uspFree: 'é¶ä»£é',
    uspFreeDesc: 'å®å¨åè´¹åå¸åæµè§',
    uspCampus: 'æ ¡å­ä¸å±',
    uspCampusDesc: 'åªé¢åçå­¦çç¤¾åº',
    uspPrivacy: 'éç§ä¿æ¤',
    uspPrivacyDesc: 'ç«åèå¤©ä¸æ´é²ä¸ªäººä¿¡æ¯',
    uspSeason: 'æ¬å®¶å­£å¿å¤',
    uspSeasonDesc: 'æ¯ä¸åºæ¸/å¼å­¦æ··è´§',

    // Post
    postTitle: 'åå¸åå',
    postItemTitle: 'æ é¢',
    postItemTitlePH: 'ä¾ï¼IKEA ä¹¦æ¡ 9ææ°',
    postDesc: 'æè¿°',
    postDescPH: 'ååç¶æãè´­ä¹°æ¶é´ãåè´§æ¹å¼ç­',
    postPrice: 'ä»·æ ¼ ($)',
    postPricePH: '0 = åè´¹',
    postCategory: 'åç±»',
    postSchool: 'å­¦æ ¡',
    postImage: 'ä¸ä¼ å¾ç',
    postImageHint: 'ç¹å»æææ½ä¸ä¼ ï¼æå¤§ 5MBï¼',
    postSubmit: 'åå¸åå',
    postSubmitting: 'åå¸ä¸­...',
    postSuccess: 'åå¸æåï¼',
    postSelectCategory: 'è¯·éæ©åç±»',
    postSelectSchool: 'è¯·éæ©å­¦æ ¡',

    // My items
    myTitle: 'æçåå',
    myEmpty: 'ä½ è¿æ²¡æåå¸ä»»ä½åå',
    myEmptyAction: 'å»åå¸',
    myOnline: 'å¨æ¶',
    myOffline: 'å·²ä¸æ¶',
    myToggleOn: 'ä¸æ¶',
    myToggleOff: 'ä¸æ¶',
    myDelete: 'å é¤',
    myDeleteConfirm: 'ç¡®å®è¦å é¤è¿ä¸ªåååï¼',

    // Login
    loginTitle: 'ç»å½ / æ³¨å',
    loginEmail: 'é®ç®±å°å',
    loginEmailPH: 'è¾å¥ä½ çé®ç®±',
    loginSendLink: 'åéç»å½é¾æ¥',
    loginSending: 'åéä¸­...',
    loginHint: 'æä»¬ä¼åéä¸å°åå«ç»å½é¾æ¥çé®ä»¶',
    loginSentTitle: 'é®ä»¶å·²åéï¼',
    loginSentDesc: 'è¯·æ¥çä½ çé®ç®±',
    loginSentHint: 'ç¹å»é®ä»¶ä¸­çé¾æ¥å³å¯ç»å½ï¼é¾æ¥ä¼å¨24å°æ¶åå¤±æ',
    loginBackToEmail: 'è¿åéæ°è¾å¥',

    // Profile setup
    profileTitle: 'å®åèµæ',
    profileName: 'æµç§°',
    profileNamePH: 'å¶ä»ç¨æ·çå°çåå­',
    profileSchool: 'ä½ çå­¦æ ¡',
    profileSave: 'ä¿å­',

    // Item detail
    detailContact: 'èç³»åå®¶',
    detailPrice: 'ä»·æ ¼',
    detailCategory: 'åç±»',
    detailSchool: 'å­¦æ ¡',
    detailPostedBy: 'åå¸è',
    detailDate: 'åå¸æ¶é´',
    detailBack: 'è¿å',

    // Footer
    footerText: 'Â© 2026 UniSwap Â· çº¯ä¿¡æ¯å¹³å°ï¼ä¸åä¸ä»»ä½äº¤æ',
  },
  en: {
    brand: 'UniSwap',
    navHome: 'Home',
    navPost: 'Post',
    navMyItems: 'My Items',
    navLogin: 'Login',
    navLogout: 'Logout',
    langSwitch: 'ä¸­æ',

    catAll: 'All',
    catFurniture: 'Furniture',
    catElectronics: 'Electronics',
    catTextbooks: 'Textbooks',
    catKitchen: 'Kitchen',
    catClothing: 'Clothing',
    catTransport: 'Transport',
    catDaily: 'Daily',
    catOther: 'Other',

    schoolAll: 'All Schools',
    schoolJHU: 'Johns Hopkins',
    schoolUMD: 'UMD',
    schoolGU: 'Georgetown',

    homeTitle: 'Campus Secondhand, Simplified',
    homeSubtitle: 'Find the best deals near your school',
    searchPlaceholder: 'Search items...',
    noItems: 'No items yet',
    noItemsSub: 'Be the first to post!',
    freeLabel: 'Free',
    priceUnit: '$',

    uspFree: 'Zero Fees',
    uspFreeDesc: 'Totally free to post & browse',
    uspCampus: 'Campus Only',
    uspCampusDesc: 'Exclusively for students',
    uspPrivacy: 'Privacy First',
    uspPrivacyDesc: 'In-app chat, no personal info shared',
    uspSeason: 'Moving Season',
    uspSeasonDesc: 'Sell at graduation, shop at move-in',

    postTitle: 'Post an Item',
    postItemTitle: 'Title',
    postItemTitlePH: 'e.g. IKEA desk, great condition',
    postDesc: 'Description',
    postDescPH: 'Condition, purchase date, pickup details...',
    postPrice: 'Price ($)',
    postPricePH: '0 = Free',
    postCategory: 'Category',
    postSchool: 'School',
    postImage: 'Upload Photo',
    postImageHint: 'Click or drag to upload (max 5MB)',
    postSubmit: 'Post Item',
    postSubmitting: 'Posting...',
    postSuccess: 'Posted successfully!',
    postSelectCategory: 'Select category',
    postSelectSchool: 'Select school',

    myTitle: 'My Items',
    myEmpty: "You haven't posted anything yet",
    myEmptyAction: 'Post now',
    myOnline: 'Active',
    myOffline: 'Inactive',
    myToggleOn: 'Activate',
    myToggleOff: 'Deactivate',
    myDelete: 'Delete',
    myDeleteConfirm: 'Are you sure you want to delete this item?',

    loginTitle: 'Login / Sign Up',
    loginEmail: 'Email Address',
    loginEmailPH: 'Enter your email',
    loginSendLink: 'Send Login Link',
    loginSending: 'Sending...',
    loginHint: "We'll send a login link to your email",
    loginSentTitle: 'Email Sent!',
    loginSentDesc: 'Check your inbox at',
    loginSentHint: 'Click the link in the email to log in. It expires in 24 hours.',
    loginBackToEmail: 'Use a different email',

    profileTitle: 'Set Up Profile',
    profileName: 'Display Name',
    profileNamePH: 'Name others will see',
    profileSchool: 'Your School',
    profileSave: 'Save',

    detailContact: 'Contact Seller',
    detailPrice: 'Price',
    detailCategory: 'Category',
    detailSchool: 'School',
    detailPostedBy: 'Posted by',
    detailDate: 'Posted',
    detailBack: 'Back',

    footerText: 'Â© 2026 UniSwap Â· Info platform only â we never handle transactions',
  },
};

const CATEGORIES = [
  { key: 'all', icon: 'ð ' },
  { key: 'furniture', icon: 'ðï¸' },
  { key: 'electronics', icon: 'ð»' },
  { key: 'textbooks', icon: 'ð' },
  { key: 'kitchen', icon: 'ð³' },
  { key: 'clothing', icon: 'ð' },
  { key: 'transport', icon: 'ð²' },
  { key: 'daily', icon: 'ð§´' },
  { key: 'other', icon: 'ð¦' },
];

const SCHOOLS = [
  { key: 'jhu', label: 'Johns Hopkins University', short: 'JHU', city: 'Baltimore, MD' },
  { key: 'umd', label: 'University of Maryland', short: 'UMD', city: 'College Park, MD' },
  { key: 'georgetown', label: 'Georgetown University', short: 'Georgetown', city: 'Washington, DC' },
];

// Map category key to i18n key
function catI18nKey(key) {
  const map = { all:'catAll', furniture:'catFurniture', electronics:'catElectronics', textbooks:'catTextbooks', kitchen:'catKitchen', clothing:'catClothing', transport:'catTransport', daily:'catDaily', other:'catOther' };
  return map[key] || 'catOther';
}

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('zh');
  const toggle = useCallback(() => setLang(l => l === 'zh' ? 'en' : 'zh'), []);
  const tt = useCallback((key) => t[lang]?.[key] || t.zh[key] || key, [lang]);
  return (
    <LangContext.Provider value={{ lang, toggle, t: tt }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export { CATEGORIES, SCHOOLS, catI18nKey };
