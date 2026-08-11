'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const t = {
  zh: {
    // Nav
    brand: 'SwapU',
    navHome: '首页',
    navBrowse: '浏览',
    navWantToBuy: '求购',
    navPost: '发布',
    navMyItems: '我的商品',
    navSafety: '安全指南',
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
    philosophySubtitle: '为什么我们要做 SwapU？',
    phil1Title: '留学生互助',
    phil1Desc: '每年开学季和毕业季，大量实用物品被丢弃。我们相信留学生之间的互助可以让每一件好物找到新主人，让资源不被浪费。',
    phil2Title: '绿色可持续',
    phil2Desc: '减少不必要的浪费，让闲置物品流转起来。二手不是将就，而是一种聪明、环保的校园生活方式。',
    phil3Title: '社区连接',
    phil3Desc: '打破校园之间的信息壁垒，让同城留学生社区更紧密。不只是买卖，更是一种生活方式和经验的分享。',
    phil4Title: '信息透明',
    phil4Desc: '所有信息公开透明，没有中间商赚差价。卖家直接展示，买家自主选择，交易方式由双方自行决定。',

    // Advantages
    advantageTitle: '为什么选择 SwapU？',
    advantageSubtitle: '专为留学生设计，解决你的真实需求',
    adv1Title: '完全免费，零佣金',
    adv1Desc: '发布和浏览完全免费，我们不从任何交易中抽取佣金。没有隐藏费用，没有会员制，真正的零成本。',
    adv2Title: '校园专属，精准匹配',
    adv2Desc: '只服务 DMV 地区高校留学生，商品都在你身边。步行或短途就能取货，省时省力。',
    adv3Title: '隐私优先，安全放心',
    adv3Desc: '站内沟通不暴露个人信息，你可以自主选择何时、如何与对方联系。保护你的隐私安全。',
    adv4Title: '操作极简，3分钟上手',
    adv4Desc: '邮箱一键登录，拍照即可发布。没有复杂的认证流程，没有繁琐的操作步骤，让分享变得轻杼。',
    adv5Title: '多校覆盖，跨校交换',
    adv5Desc: '覆盖 JHU、UMD、Georgetown 三所高校，支持跨校浏览和信息交换，扩大你的选择范围。',
    adv6Title: '搬家季神器',
    adv6Desc: '毕业出清还是开学置办？SwapU 帮你在最需要的时候找到最合适的物品，让搬家不再头疼。',

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
    ctaDesc: '加入 SwapU，发现身边留学生社区的好物',
    ctaBrowse: '浏览商品',
    ctaPost: '发布商品',

    // Browse page
    browseTitle: '浏览商品',
    browseSubtitle: '在你的学校周边找到最划算的好物',

    // Moving season
    movingBannerTitle: '搬家季专区',
    movingBannerDesc: '毕业季来了！大量好物低价出清，错过再等一年',
    movingBannerBtn: '查看急售商品',
    tagUrgent: '急售',
    tagMovingSeason: '搬家季',

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

    // Want to Buy
    wantTitle: '求购专区',
    wantSubtitle: '发布你的需求，让有货的同学主务找到你的需求',
    wantPostBtn: '发布求购',
    wantBudget: '预算',
    wantContact: '联系TA',
    wantEmpty: '暂无求购信息',
    wantEmptySub: '成为第一个发布求购需求的人吧！',
    wantLoginHint: '登录后即可发布求购需求',
    wantDemoNotice: '以下为示例数据，正式上线后将显示真实求购信息',

    // Safety page
    safetyTitle: '安全交易指南',
    safetySubtitle: '你的安全是我们最关心的事。请在交易前仔细阅读以下建议。',
    safetyTip1Title: '选择公共场所见面',
    safetyTip1Desc: '建议在校园内的图书馆、学生中心、咖啑厅等公共区域进行物品交接。避免去陌生人的私人住所。',
    safetyTip2Title: '白天交易更安全',
    safetyTip2Desc: '尽量安排在白天进行交易，避免深夜或光线不好的时段和地点。',
    safetyTip3Title: '告知朋友你的行程',
    safetyTip3Desc: '出门前告诉室友或朋友你的去向、预计返回时间和交易对方的信息。',
    safetyTip4Title: '检查物品再确认',
    safetyTip4Desc: '当面检查物品的状况和功能是否与描述一致，确认无误后再完成交易。',
    safetyTip5Title: '使用安全的支付方式',
    safetyTip5Desc: '建议使用 Venmo、Zelle 等有记录的电子支付方式，避免大额现金交易。保留转账记录作为凭证。',
    safetyTip6Title: '信任你的直觉',
    safetyTip6Desc: '如果感到任何不安全或可疑，不要犹豫，立即取消交易。你的安全永远比一笔交易更重要。',

    // FAQ
    faqTitle: '常见问题',
    faq1Q: 'SwapU 是免费的吗？',
    faq1A: '是的，SwapU 完全免费。发布和浏览商品不收取任何费用，我们也不从交易中抽取佣金。',
    faq2Q: 'SwapU 参与交易吗？',
    faq2A: '不参与。SwapU 是一个纯信息平台，我�l只提供买卖双方的信息展示和连接服务。所有交易由双方自行协商和完成，平台不介入也不承担交易相关责任。',
    faq3Q: '如何联系卖家家？',
    faq3A: '点击商品详情页的"联系卖家"按钮，即可查看对方留下的联系方式。建议优先使用微信或 WhatsApp 沟通。',
    faq4Q: '可以发布哪些类型的商品？',
    faq4A: '你可以发布家具、电子产品、教科书、厨具、服饰、交通工具、生活用品等各类二手物品。禁止发布违法物品、食品、药品等。',
    faq5Q: '遇到问题怎么办？',
    faq5A: '如遇到虚假信息或不彃行为，请通过页面底部的联系方式向我们举报，我们会及时处理。',
    faq6Q: '我的个人信息安全吗？',
    faq6A: '我们重视你的隐私。平台仅展示你选择公开的信息，不会向第三方出售或分享你的个人数据。',

    // Footer
    footerAbout: '关于 SwapU',
    footerAboutDesc: 'SwapU 是专为 DMV 地区留学生打造的二手物品信息平台，致力于连接校园社区，让闲置好物重新流转。',
    footerLinks: '快速链接',
    footerContactTitle: '联系我们',
    footerEmailLabel: '邮箱',
    footerPhoneLabel: '电话',
    footerWeChatLabel: '微信公众号',
    footerXhsLabel: '小红书',
    footerEmail: 'contact@swapu-dmv.com',
    footerPhone: '+1 (202) 555-0188',
    footerWeChat: 'SwapU_Official',
    footerXhs: '@SwapU留学生二手',
    footerLegalTitle: '法律声明',
    footerLegalText: 'SwapU 仅提供信息展示和连接服务，不参与任何实际交易。平台上展示的所有商品信息由用户自行发布，SwapU 不对商品的真实性、质量、安全性做任何保证或承担任何责任。所有交易行为由买卖双方自行协商完成，与本平台无关。用户使用本平台即表示同意以上条款。',
    footerRightsText: '本平台所有内容（包括但不限于文字、图片、设计、标识）的知识产权彂 SwapU 团队所有。未经书面许可，不得转载、复制或用于商业用途。',
    footerDisclaimerText: '本网站最终解释权彂 SwapU 团队所有。我们保留随时修改、更新平台规则和服务条款的权利，修改后的条款将在网站公布后立即生效。',
    footerCopyright: '© 2026 SwapU. All rights reserved. | 纯信息平台，不参与任何交易',
    footerText: '© 2026 SwapU · 纯信息平台，不参与任何交易',
  },
  en: {
    brand: 'SwapU',
    navHome: 'Home',
    navBrowse: 'Browse',
    navWantToBuy: 'Want to Buy',
    navPost: 'Post',
    navMyItems: 'My Items',
    navSafety: 'Safety',
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
    philosophySubtitle: 'Why did we build SwapU?',
    phil1Title: 'Student Mutual Aid',
    phil1Desc: 'Every semester, useful items get thrown away during move-in and move-out. We believe students helping students can give every item a second life and prevent waste.',
    phil2Title: 'Green & Sustainable',
    phil2Desc: 'Reduce unnecessary waste by keeping items in circulation. Secondhand isn\'t settling — it\'s a smart, eco-friendly campus lifestyle.',
    phil3Title: 'Community Connection',
    phil3Desc: 'Break information barriers across campuses, bringing the local student community closer. It\'s not just trading — it\'s sharing a way of life.',
    phil4Title: 'Transparent Info',
    phil4Desc: 'All information is open and transparent. No middlemen, no markups. Sellers show directly, buyers choose freely, and both parties decide how to transact.',

    advantageTitle: 'Why SwapU?',
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
    adv6Desc: 'Graduating or just arriving? SwapU helps you find what you need, when you need it. No more moving headaches.',

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
    ctaDesc: 'Join SwapU and discover great finds in your student community',
    ctaBrowse: 'Browse Items',
    ctaPost: 'Post an Item',

    browseTitle: 'Browse Items',
    browseSubtitle: 'Find the best deals near your school',

    movingBannerTitle: 'Moving Season',
    movingBannerDesc: 'Graduation season is here! Great deals on everything — don\'t miss out',
    movingBannerBtn: 'View Urgent Listings',
    tagUrgent: 'Urgent',
    tagMovingSeason: 'Moving',

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
    myEmpty: 'You haven\'t posted anything yet',
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
    loginHint: 'We\'ll send a login link to your email',
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

    // Want to Buy
    wantTitle: 'Want to Buy',
    wantSubtitle: 'Post what you need and let sellers find you',
    wantPostBtn: 'Post a Request',
    wantBudget: 'Budget',
    wantContact: 'Contact',
    wantEmpty: 'No requests yet',
    wantEmptySub: 'Be the first to post a request!',
    wantLoginHint: 'Log in to post a want-to-buy request',
    wantDemoNotice: 'These are sample listings. Real requests will appear after launch.',

    // Safety
    safetyTitle: 'Safety Guide',
    safetySubtitle: 'Your safety is our top priority. Please read these tips before any transaction.',
    safetyTip1Title: 'Meet in Public Places',
    safetyTip1Desc: 'Choose campus locations like libraries, student centers, or coffee shops for exchanges. Avoid going to a stranger\'s private residence.',
    safetyTip2Title: 'Trade During Daytime',
    safetyTip2Desc: 'Schedule meetups during daylight hours. Avoid late-night or poorly-lit locations.',
    safetyTip3Title: 'Tell a Friend',
    safetyTip3Desc: 'Let your roommate or a friend know where you\'re going, when you expect to return, and who you\'re meeting.',
    safetyTip4Title: 'Inspect Before You Pay',
    safetyTip4Desc: 'Check the item\'s condition and functionality in person. Make sure everything matches the description before finalizing.',
    safetyTip5Title: 'Use Secure Payment',
    safetyTip5Desc: 'Use traceable digital payments like Venmo or Zelle. Avoid large cash transactions. Keep payment records as proof.',
    safetyTip6Title: 'Trust Your Instincts',
    safetyTip6Desc: 'If something feels off or unsafe, don\'t hesitate to cancel. Your safety is always more important than any deal.',

    // FAQ
    faqTitle: 'FAQ',
    faq1Q: 'Is SwapU free?',
    faq1A: 'Yes, SwapU is completely free. We never charge for posting or browsing, and we take no commission from any transaction.',
    faq2Q: 'Does SwapU handle transactions?',
    faq2A: 'No. SwapU is a pure information platform. We only connect buyers and sellers. All transactions are arranged independently between parties — we do not participate in or bear responsibility for any deals.',
    faq3Q: 'How do I contact a seller or buyer?',
    faq3A: 'Click the "Contact Seller" button on an item\'s detail page to see their contact info. We recommend using WeChat or WhatsApp.',
    faq4Q: 'What can I post?',
    faq4A: 'You can post furniture, electronics, textbooks, kitchenware, clothing, transportation, daily items, and more. Prohibited: illegal items, food, medicine, etc.',
    faq5Q: 'What if I encounter a problem?',
    faq5A: 'If you encounter fake listings or inappropriate behavior, please report it through the contact information at the bottom of the page. We\'ll handle it promptly.',
    faq6Q: 'Is my personal information safe?',
    faq6A: 'We take your privacy seriously. The platform only displays information you choose to share, and we never sell or share your data with third parties.',

    // Footer
    footerAbout: 'About SwapU',
    footerAboutDesc: 'SwapU is a secondhand goods info platform built for international students in the DMV area, connecting campus communities and keeping great items in circulation.',
    footerLinks: 'Quick Links',
    footerContactTitle: 'Contact Us',
    footerEmailLabel: 'Email',
    footerPhoneLabel: 'Phone',
    footerWeChatLabel: 'WeChat',
    footerXhsLabel: 'Xiaohongshu',
    footerEmail: 'contact@swapu-dmv.com',
    footerPhone: '+1 (202) 555-0188',
    footerWeChat: 'SwapU_Official',
    footerXhs: '@SwapU',
    footerLegalTitle: 'Legal Disclaimer',
    footerLegalText: 'SwapU provides information display and connection services only and does not participate in any actual transactions. All product information is posted by users. SwapU makes no guarantees regarding the authenticity, quality, or safety of listed items and bears no responsibility for any transactions. All deals are arranged independently between buyers and sellers. By using this platform, you agree to these terms.',
    footerRightsText: 'All content on this platform, including but not limited to text, images, design, and logos, is the intellectual property of the SwapU team. Reproduction or commercial use without written permission is prohibited.',
    footerDisclaimerText: 'The SwapU team reserves the right of final interpretation of all platform content. We reserve the right to modify platform rules and terms of service at any time. Updated terms take effect immediately upon publication.',
    footerCopyright: '© 2026 SwapU. All rights reserved. | Info platform only — no transactions',
    footerText: '© 2026 SwapU · Info platform only — we never handle transactions',
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
