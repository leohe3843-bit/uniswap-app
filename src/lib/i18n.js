'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const t = {
  zh: {
    // Nav
    brand: 'UniSwap',
    navHome: '首页',
    navBrowse: '浏览',
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

    // Home — Hero
    homeTitle: '校园二手，轻松搞定',
    homeSubtitle: '在你的学校周边找到最划算的二手好物',
    heroTagline: '留学生的校园二手信息平台',
    heroDesc: '为 DMV 地区（JHU、UMD、Georgetown）的留学生打造的二手物品信息交换平台。我们只做信息桥梁，帮你找到最划算的好物，不参与任何交易。',

    // USP banner
    uspFree: '零佣金',
    uspFreeDesc: '完全免费发布和浏览',
    uspCampus: '校园专属',
    uspCampusDesc: '只面向留学生社区',
    uspPrivacy: '隐私保护',
    uspPrivacyDesc: '站内聊天不暴露个人信息',
    uspSeason: '搬家季必备',
    uspSeasonDesc: '毕业出清/开学淘货',

    // Philosophy
    philosophyTitle: '我们的理念',
    philosophySubtitle: '为什么我们要做 UniSwap？',
    phil1Title: '留学生互助',
    phil1Desc: '每年开学季和毕业季，大量实用物品被丢弃。我们相信留学生之间的互助可以让每一件好物找到新主人，让资源不被浒费。',
    phil2Title: '绿色可持续',
    phil2Desc: '减少不必要的浪费，让闲置物品流转起来。二手不是将就，而是一种聪明、环保的校园生活方式。',
    phil3Title: '社区连接',
    phil3Desc: '打破校园之间的信息壁垒，让同城留学生社区更紧密。不只是买卖，更是一种生活方式和经验的分享。',
    phil4Title: '信息透明',
    phil4Desc: '所有信息公开透明，没有中间商赚差价。卖家直接展示，买家自主选择，交易方式由双方自行决定。',

    // Advantages
    advantageTitle: '为什么选择 UniSwap？',
    advantageSubtitle: '专为留学生设计，解决你的真实需求',
    adv1Title: '完全免费，零佣金',
    adv1Desc: '发布和浏览完全免费，我们不从任何交易中抽取佣金。没有隐藏费用，没有会员制，真正的零成本。',
    adv2Title: '校园专属，精准匹配',
    adv2Desc: '只服务 DMV 地区高校留学生，商品都在你身边。步行或短途就能取货，省时省力。',
    adv3Title: '隐私优先，安全放心',
    adv3Desc: '站内沟通不暴露个人信息，你可以自主选择何时、如何与对方联系。保护你的隐私安全。',
    adv4Title: '操作极简，3分钟上手',
    adv4Desc: '邮箱一键登录，拍照即可发布。没有复杂的认证流程，没有繁琐的操作步骤，让分享变得轻松。',
    adv5Title: '多校覆盖，跨校交换',
    adv5Desc: '覆盖 JHU、UMD、Georgetown 三所高校，支持跨校浏览和信息交换，扩大你的选择范围。',
    adv6Title: '搬家季神器',
    adv6Desc: '毕业出清还是开学置办？UniSwap 帮你在最需要的时候找到最合适的物品，让搬家不再头疼。',

    // How it works
    howTitle: '如何使用？',
    howSubtitle: '三步开始你的校园二手之旅',
    how1Title: '注册登录',
    how1Desc: '输入邮箱，点击邮件中的链接即可登录，无需密码',
    how2Title: '发布或浏览',
    how2Desc: '发布你的闲置物品，或浏览其他同学发布的好物',
    how3Title: '联系交换',
    how3Desc: '找到心仪的物品？直接联系卖家安排线下交换',

    // Category section
    categoryTitle: '分类浏览',
    categorySubtitle: '选择你感兴趣的分类，找到你需要的好物',

    // Schools section
    schoolsSectionTitle: '覆盖学校',
    schoolsSectionDesc: '目前服务于以下 DMV 地区高校的留学生社区',

    // CTA
    ctaTitle: '开始探索校园好物',
    ctaDesc: '加入 UniSwap，发现身边留学生社区的好物',
    ctaBrowse: '浏览商品',
    ctaPost: '发布商品',

    // Browse page
    browseTitle: '浏览商品',
    browseSubtitle: '在你的学校周边找到最划算的好物',

    // Search & filter
    searchPlaceholder: '搜索商品...',
    noItems: '暂无商品',
    noItemsSub: '成为第一个发布者吧！',
    freeLabel: '免费',
    priceUnit: '$',

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
    navBrowse: 'Browse',
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
    heroTagline: 'Campus Secondhand Platform for International Students',
    heroDesc: 'Built for international students in the DMV area (JHU, UMD, Georgetown). We connect buyers and sellers as an information bridge — no transactions, no middlemen.',

    uspFree: 'Zero Fees',
    uspFreeDesc: 'Totally free to post & browse',
    uspCampus: 'Campus Only',
    uspCampusDesc: 'Exclusively for students',
    uspPrivacy: 'Privacy First',
    uspPrivacyDesc: 'In-app chat, no personal info shared',
    uspSeason: 'Moving Season',
    uspSeasonDesc: 'Sell at graduation, shop at move-in',

    philosophyTitle: 'Our Philosophy',
    philosophySubtitle: 'Why did we build UniSwap?',
    phil1Title: 'Student Mutual Aid',
    phil1Desc: 'Every semester, useful items get thrown away during move-in and move-out. We believe students helping students can give every item a second life and prevent waste.',
    phil2Title: 'Green & Sustainable',
    phil2Desc: 'Reduce unnecessary waste by keeping items in circulation. Secondhand isn\'t settling — it\'s a smart, eco-friendly campus lifestyle.',
    phil3Title: 'Community Connection',
    phil3Desc: 'Break information barriers across campuses, bringing the local student community closer. It\'s not just trading — it\'s sharing a way of life.',
    phil4Title: 'Transparent Info',
    phil4Desc: 'All information is open and transparent. No middlemen, no markups. Sellers show directly, buyers choose freely, and both parties decide how to transact.',

    advantageTitle: 'Why UniSwap?',
    advantageSubtitle: 'Designed for students, solving real needs',
    adv1Title: 'Completely Free',
    adv1Desc: 'Posting and browsing are completely free. We never take commissions. No hidden fees, no memberships — truly zero cost.',
    adv2Title: 'Campus-Exclusive Matching',
    adv2Desc: 'Serving only DMV-area universities. Everything is nearby — walk or take a short trip to pick up, saving time and effort.',
    adv3Title: 'Privacy First',
    adv3Desc: 'In-app communication protects your personal info. You choose when and how to connect with others. Your privacy is our priority.',
    adv4Title: 'Dead Simple, 3 Min Setup',
    adv4Desc: 'One-click email login, snap a photo to post. No complicated verification, no tedious steps — sharing made effortless.',
    adv5Title: 'Multi-Campus Coverage',
    adv5Desc: 'Covering JHU, UMD, and Georgetown. Browse and exchange across all three schools, expanding your options.',
    adv6Title: 'Moving Season Essential',
    adv6Desc: 'Graduating or just arriving? UniSwap helps you find what you need, when you need it. No more moving headaches.',

    howTitle: 'How It Works',
    howSubtitle: 'Three steps to start your campus secondhand journey',
    how1Title: 'Sign Up',
    how1Desc: 'Enter your email, click the link to log in — no password needed',
    how2Title: 'Post or Browse',
    how2Desc: 'List your items or browse what other students have to offer',
    how3Title: 'Connect & Exchange',
    how3Desc: 'Found something you like? Contact the seller to arrange a meetup',

    categoryTitle: 'Browse by Category',
    categorySubtitle: 'Choose a category to find what you need',

    schoolsSectionTitle: 'Schools We Cover',
    schoolsSectionDesc: 'Currently serving international student communities at these DMV-area universities',

    ctaTitle: 'Start Exploring Campus Deals',
    ctaDesc: 'Join UniSwap and discover great finds in your student community',
    ctaBrowse: 'Browse Items',
    ctaPost: 'Post an Item',

    browseTitle: 'Browse Items',
    browseSubtitle: 'Find the best deals near your school',

    searchPlaceholder: 'Search items...',
    noItems: 'No items yet',
    noItemsSub: 'Be the first to post!',
    freeLabel: 'Free',
    priceUnit: '$',

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
