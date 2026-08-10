'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const t = {
  zh: {
    // Nav
    brand: 'UniSwap',
    navHome: '首页',
    navPost: '发布',
    navMyItems: '我的商品',
    navLogin: '登录',
    navLogout: '退出',
    langSwitch: 'EN',

    // Categories
    catAll: '全部',
    catFurniture: '家具',
    catElectronics: '电子产品',
    catTextbooks: '教科书',
    catKitchen: '厨具',
    catClothing: '服饰',
    catTransport: '交通工具',
    catDaily: '生活用品',
    catOther: '其他',

    // Schools
    schoolAll: '全部学校',
    schoolJHU: 'Johns Hopkins',
    schoolUMD: 'UMD',
    schoolGU: 'Georgetown',

    // Home
    homeTitle: '校园二手，轻松搞定',
    homeSubtitle: '在你的学校周边找到最划算的二手好物',
    searchPlaceholder: '搜索商品...',
    noItems: '暂无商品',
    noItemsSub: '成为第一个发布者吧！',
    freeLabel: '免费',
    priceUnit: '$',

    // USP banner
    uspFree: '零佣金',
    uspFreeDesc: '完全免费发布和浏览',
    uspCampus: '校园专属',
    uspCampusDesc: '只面向留学生社区',
    uspPrivacy: '隐私保护',
    uspPrivacyDesc: '站内聊天不暴露个人信息',
    uspSeason: '搬家季必备',
    uspSeasonDesc: '毕业出清/开学淘货',

    // Post
    postTitle: '发布商品',
    postItemTitle: '标题',
    postItemTitlePH: '例：IKEA 书桌 9成新',
    postDesc: '描述',
    postDescPH: '商品状态、购买时间、取货方式等',
    postPrice: '价格 ($)',
    postPricePH: '0 = 免费',
    postCategory: '分类',
    postSchool: '学校',
    postImage: '上传图片',
    postImageHint: '点击或拖拽上传（最大 5MB）',
    postSubmit: '发布商品',
    postSubmitting: '发布中...',
    postSuccess: '发布成功！',
    postSelectCategory: '请选择分类',
    postSelectSchool: '请选择学校',

    // My items
    myTitle: '我的商品',
    myEmpty: '你还没有发布任何商品',
    myEmptyAction: '去发布',
    myOnline: '在架',
    myOffline: '已下架',
    myToggleOn: '上架',
    myToggleOff: '下架',
    myDelete: '删除',
    myDeleteConfirm: '确定要删除这个商品吗？',

    // Login
    loginTitle: '登录 / 注册',
    loginEmail: '邮箱地址',
    loginEmailPH: '输入你的邮箱',
    loginSendLink: '发送登录链接',
    loginSending: '发送中...',
    loginHint: '我们会发送一封包含登录链接的邮件',
    loginSentTitle: '邮件已发送！',
    loginSentDesc: '请查看你的邮箱',
    loginSentHint: '点击邮件中的链接即可登录，链接会在24小时后失效',
    loginBackToEmail: '返回重新输入',

    // Profile setup
    profileTitle: '完善资料',
    profileName: '昵称',
    profileNamePH: '其他用户看到的名字',
    profileSchool: '你的学校',
    profileSave: '保存',

    // Item detail
    detailContact: '联系卖家',
    detailPrice: '价格',
    detailCategory: '分类',
    detailSchool: '学校',
    detailPostedBy: '发布者',
    detailDate: '发布时间',
    detailBack: '返回',

    // Footer
    footerText: '© 2026 UniSwap · 纯信息平台，不参与任何交易',
  },
  en: {
    brand: 'UniSwap',
    navHome: 'Home',
    navPost: 'Post',
    navMyItems: 'My Items',
    navLogin: 'Login',
    navLogout: 'Logout',
    langSwitch: '中文',

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

    footerText: '© 2026 UniSwap · Info platform only — we never handle transactions',
  },
};

const CATEGORIES = [
  { key: 'all', icon: '🏠' },
  { key: 'furniture', icon: '🛋️' },
  { key: 'electronics', icon: '💻' },
  { key: 'textbooks', icon: '📚' },
  { key: 'kitchen', icon: '🍳' },
  { key: 'clothing', icon: '👕' },
  { key: 'transport', icon: '🚲' },
  { key: 'daily', icon: '🧴' },
  { key: 'other', icon: '📦' },
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
