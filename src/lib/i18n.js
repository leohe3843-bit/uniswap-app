'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const t = {
  zh: {
    // Nav
    brand: 'SwapU',
    navHome: 'é¦é¡µ',
    navBrowse: 'æµè§',
    navWantToBuy: 'æ±è´­',
    navPost: 'åå¸',
    navMyItems: 'æçåå',
    navSafety: 'å®å¨æå',
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

    // School community
    navSchools: 'å­¦æ ¡',
    schoolsPageTitle: 'å­¦æ ¡ç¤¾åº',
    schoolsPageDesc: 'æ¾å°ä½ çå­¦æ ¡ï¼å å¥ä¸å±ç¤¾åº',
    schoolsSearchPH: 'æç´¢å­¦æ ¡åç§°ãç¼©åæåå¸...',
    schoolsCount: 'æè¦çå¤§å­¦',
    schoolsStatesCount: 'ä¸ªå·åå°åº',
    schoolCommunity: 'ç¤¾åº',
    schoolBulletin: 'æ ¡å­å¬åæ¿',
    schoolBulletinEmpty: 'ææ å¬åï¼æ¥åç¬¬ä¸æ¡å§ï¼',
    schoolBulletinPH: 'åäº«æ ¡å­çæ´»ãäºæä¿¡æ¯ãæ±å©...',
    schoolBulletinPost: 'åå¸',
    schoolItems: 'å¨å®åå',
    schoolWants: 'æ±è´­ä¿¡æ¯',
    schoolItemsEmpty: 'ææ ååï¼å»åå¸ä¸ä¸ªå§ï¼',
    schoolWantsEmpty: 'ææ æ±è´­ï¼åå¸ä½ çéæ±ï¼',
    schoolViewAll: 'æ¥çå¨é¨',
    schoolAbout: 'å³äº',
    schoolLocation: 'ä½ç½®',
    schoolStudents: 'ç¤¾åºæå',
    schoolVerified: 'å·²è®¤è¯æ ¡å',
    schoolJoinCommunity: 'å å¥ç¤¾åº',
    schoolPostItem: 'å¨æ­¤åå¸åå',
    schoolBrowseItems: 'æµè§æ¬æ ¡åå',
    schoolNearby: 'éè¿å­¦æ ¡',
    schoolBackToAll: 'è¿åææå­¦æ ¡',

    // Home â Hero
    homeTitle: 'æ ¡å­äºæï¼è½»æ¾æå®',
    homeSubtitle: 'å¨ä½ çå­¦æ ¡å¨è¾¹æ¾å°æåç®çäºæå¥½ç©',
    heroTagline: 'çå­¦ççæ ¡å­äºæä¿¡æ¯å¹³å°',
    heroDesc: 'è¦çå¨ç¾ Top 50 é«æ ¡ççå­¦çäºæç©åä¿¡æ¯äº¤æ¢å¹³å°ãæä»¬åªåä¿¡æ¯æ¡¥æ¢ï¼å¸®ä½ æ¾å°æåç®çå¥½ç©ï¼ä¸åä¸ä»»ä½äº¤æã',

    // USP banner
    uspFree: 'é¶ä½£é',
    uspFreeDesc: 'å®å¨åè´¹åå¸åæµè§',
    uspCampus: 'æ ¡å­ä¸å±',
    uspCampusDesc: 'åªé¢åçå­¦çç¤¾åº',
    uspPrivacy: 'éç§ä¿æ¤',
    uspPrivacyDesc: 'ç«åèå¤©ä¸æ´é²ä¸ªäººä¿¡æ¯',
    uspSeason: 'æ¬å®¶å­£å¿å¤',
    uspSeasonDesc: 'æ¯ä¸åºæ¸/å¼å­¦æ·è´§',

    // Philosophy
    philosophyTitle: 'æä»¬ççå¿µ',
    philosophySubtitle: 'ä¸ºä»ä¹æä»¬è¦å SwapUï¼',
    phil1Title: 'çå­¦çäºå©',
    phil1Desc: 'æ¯å¹´å¼å­¦å­£åæ¯ä¸å­£ï¼å¤§éå®ç¨ç©åè¢«ä¸¢å¼ãæä»¬ç¸ä¿¡çå­¦çä¹é´çäºå©å¯ä»¥è®©æ¯ä¸ä»¶å¥½ç©æ¾å°æ°ä¸»äººï¼è®©èµæºä¸è¢«æµªè´¹ã',
    phil2Title: 'ç»¿è²å¯æç»­',
    phil2Desc: 'åå°ä¸å¿è¦çæµªè´¹ï¼è®©é²ç½®ç©åæµè½¬èµ·æ¥ãäºæä¸æ¯å°å°±ï¼èæ¯ä¸ç§èªæãç¯ä¿çæ ¡å­çæ´»æ¹å¼ã',
    phil3Title: 'ç¤¾åºè¿æ¥',
    phil3Desc: 'æç ´æ ¡å­ä¹é´çä¿¡æ¯å£åï¼è®©ååçå­¦çç¤¾åºæ´ç´§å¯ãä¸åªæ¯ä¹°åï¼æ´æ¯ä¸ç§çæ´»æ¹å¼åç»éªçåäº«ã',
    phil4Title: 'ä¿¡æ¯éæ',
    phil4Desc: 'ææä¿¡æ¯å¬å¼éæï¼æ²¡æä¸­é´åèµå·®ä»·ãåå®¶ç´æ¥å±ç¤ºï¼ä¹°å®¶èªä¸»éæ©ï¼äº¤ææ¹å¼ç±åæ¹èªè¡å³å®ã',

    // Advantages
    advantageTitle: 'ä¸ºä»ä¹éæ© SwapUï¼',
    advantageSubtitle: 'ä¸ä¸ºçå­¦çè®¾è®¡ï¼è§£å³ä½ ççå®éæ±',
    adv1Title: 'å®å¨åè´¹ï¼é¶ä½£é',
    adv1Desc: 'åå¸åæµè§å®å¨åè´¹ï¼æä»¬ä¸ä»ä»»ä½äº¤æä¸­æ½åä½£éãæ²¡æéèè´¹ç¨ï¼æ²¡æä¼åå¶ï¼çæ­£çé¶ææ¬ã',
    adv2Title: 'æ ¡å­ä¸å±ï¼ç²¾åå¹é',
    adv2Desc: 'è¦çå¨ç¾ 50 æé¡¶å°é«æ ¡çå­¦çï¼ååé½å¨ä½ èº«è¾¹ãæ­¥è¡æç­éå°±è½åè´§ï¼çæ¶çåã',
    adv3Title: 'éç§ä¼åï¼å®å¨æ¾å¿',
    adv3Desc: 'ç«åæ²éä¸æ´é²ä¸ªäººä¿¡æ¯ï¼ä½ å¯ä»¥èªä¸»éæ©ä½æ¶ãå¦ä½ä¸å¯¹æ¹èç³»ãä¿æ¤ä½ çéç§å®å¨ã',
    adv4Title: 'æä½æç®ï¼3åéä¸æ',
    adv4Desc: 'é®ç®±ä¸é®ç»å½ï¼æç§å³å¯åå¸ãæ²¡æå¤æçè®¤è¯æµç¨ï¼æ²¡æç¹ççæä½æ­¥éª¤ï¼è®©åäº«åå¾è½»æ¾ã',
    adv5Title: 'å¨ç¾è¦çï¼è·¨æ ¡äº¤æ¢',
    adv5Desc: 'è¦çå¨ç¾ 50 æé¡¶å°é«æ ¡ï¼æ¯æè·¨æ ¡æµè§åä¿¡æ¯äº¤æ¢ï¼æ©å¤§ä½ çéæ©èå´ã',
    adv6Title: 'æ¬å®¶å­£ç¥å¨',
    adv6Desc: 'æ¯ä¸åºæ¸è¿æ¯å¼å­¦ç½®åï¼SwapU å¸®ä½ å¨æéè¦çæ¶åæ¾å°æåéçç©åï¼è®©æ¬å®¶ä¸åå¤´ç¼ã',

    // How it works
    howTitle: 'å¦ä½ä½¿ç¨ï¼',
    howSubtitle: 'ä¸æ­¥å¼å§ä½ çæ ¡å­äºæä¹æ',
    how1Title: 'æ³¨åç»å½',
    how1Desc: 'è¾å¥é®ç®±ï¼ç¹å»é®ä»¶ä¸­çé¾æ¥å³å¯ç»å½ï¼æ éå¯ç ',
    how2Title: 'åå¸ææµè§',
    how2Desc: 'åå¸ä½ çé²ç½®ç©åï¼ææµè§å¶ä»åå­¦åå¸çå¥½ç©',
    how3Title: 'èç³»äº¤æ¢',
    how3Desc: 'æ¾å°å¿ä»ªçç©åï¼ç´æ¥èç³»åå®¶å®æçº¿ä¸äº¤æ¢',

    // Category section
    categoryTitle: 'åç±»æµè§',
    categorySubtitle: 'éæ©ä½ æå´è¶£çåç±»ï¼æ¾å°ä½ éè¦çå¥½ç©',

    // Schools section
    schoolsSectionTitle: 'è¦çå­¦æ ¡',
    schoolsSectionDesc: 'è¦çå¨ç¾ 50 æé¡¶å°é«æ ¡ï¼æ¯æå­¦æ ¡é½æä¸å±ç¤¾åº',

    // CTA
    ctaTitle: 'å¼å§æ¢ç´¢æ ¡å­å¥½ç©',
    ctaDesc: 'å å¥ SwapUï¼åç°èº«è¾¹çå­¦çç¤¾åºçå¥½ç©',
    ctaBrowse: 'æµè§åå',
    ctaPost: 'åå¸åå',

    // Browse page
    browseTitle: 'æµè§åå',
    browseSubtitle: 'å¨ä½ çå­¦æ ¡å¨è¾¹æ¾å°æåç®çå¥½ç©',

    // Moving season
    movingBannerTitle: 'æ¬å®¶å­£ä¸åº',
    movingBannerDesc: 'æ¯ä¸å­£æ¥äºï¼å¤§éå¥½ç©ä½ä»·åºæ¸ï¼éè¿åç­ä¸å¹´',
    movingBannerBtn: 'æ¥çæ¥å®åå',
    tagUrgent: 'æ¥å®',
    tagMovingSeason: 'æ¬å®¶å­£',

    // Search & filter
    searchPlaceholder: 'æç´¢åå...',
    noItems: 'ææ åå',
    noItemsSub: 'æä¸ºç¬¬ä¸ä¸ªåå¸èå§ï¼',
    freeLabel: 'åè´¹',
    priceUnit: '$',

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

    // Want to Buy
    wantTitle: 'æ±è´­ä¸åº',
    wantSubtitle: 'åå¸ä½ çéæ±ï¼è®©æè´§çåå­¦ä¸»å¨æ¾å°ä½ ',
    wantPostBtn: 'åå¸æ±è´­',
    wantBudget: 'é¢ç®',
    wantContact: 'èç³»TA',
    wantEmpty: 'ææ æ±è´­ä¿¡æ¯',
    wantEmptySub: 'æä¸ºç¬¬ä¸ä¸ªåå¸æ±è´­éæ±çäººå§ï¼',
    wantLoginHint: 'ç»å½åå³å¯åå¸æ±è´­éæ±',
    wantDemoNotice: 'ä»¥ä¸ä¸ºç¤ºä¾æ°æ®ï¼æ­£å¼ä¸çº¿åå°æ¾ç¤ºçå®æ±è´­ä¿¡æ¯',

    // Safety page
    safetyTitle: 'å®å¨äº¤ææå',
    safetySubtitle: 'ä½ çå®å¨æ¯æä»¬æå³å¿çäºãè¯·å¨äº¤æåä»ç»éè¯»ä»¥ä¸å»ºè®®ã',
    safetyTip1Title: 'éæ©å¬å±åºæè§é¢',
    safetyTip1Desc: 'å»ºè®®å¨æ ¡å­åçå¾ä¹¦é¦ãå­¦çä¸­å¿ãåå¡åç­å¬å±åºåè¿è¡ç©åäº¤æ¥ãé¿åå»éçäººçç§äººä½æã',
    safetyTip2Title: 'ç½å¤©äº¤ææ´å®å¨',
    safetyTip2Desc: 'å°½éå®æå¨ç½å¤©è¿è¡äº¤æï¼é¿åæ·±å¤æåçº¿ä¸å¥½çæ¶æ®µåå°ç¹ã',
    safetyTip3Title: 'åç¥æåä½ çè¡ç¨',
    safetyTip3Desc: 'åºé¨ååè¯å®¤åææåä½ çå»åãé¢è®¡è¿åæ¶é´åäº¤æå¯¹æ¹çä¿¡æ¯ã',
    safetyTip4Title: 'æ£æ¥ç©ååç¡®è®¤',
    safetyTip4Desc: 'å½é¢æ£æ¥ç©åçç¶åµååè½æ¯å¦ä¸æè¿°ä¸è´ï¼ç¡®è®¤æ è¯¯ååå®æäº¤æã',
    safetyTip5Title: 'ä½¿ç¨å®å¨çæ¯ä»æ¹å¼',
    safetyTip5Desc: 'å»ºè®®ä½¿ç¨ VenmoãZelle ç­æè®°å½ççµå­æ¯ä»æ¹å¼ï¼é¿åå¤§é¢ç°éäº¤æãä¿çè½¬è´¦è®°å½ä½ä¸ºå­è¯ã',
    safetyTip6Title: 'ä¿¡ä»»ä½ çç´è§',
    safetyTip6Desc: 'å¦ææå°ä»»ä½ä¸å®å¨æå¯çï¼ä¸è¦ç¹è±«ï¼ç«å³åæ¶äº¤æãä½ çå®å¨æ°¸è¿æ¯ä¸ç¬äº¤ææ´éè¦ã',

    // FAQ
    faqTitle: 'å¸¸è§é®é¢',
    faq1Q: 'SwapU æ¯åè´¹çåï¼',
    faq1A: 'æ¯çï¼SwapU å®å¨åè´¹ãåå¸åæµè§ååä¸æ¶åä»»ä½è´¹ç¨ï¼æä»¬ä¹ä¸ä»äº¤æä¸­æ½åä½£éã',
    faq2Q: 'SwapU åä¸äº¤æåï¼',
    faq2A: 'ä¸åä¸ãSwapU æ¯ä¸ä¸ªçº¯ä¿¡æ¯å¹³å°ï¼æä»¬åªæä¾ä¹°ååæ¹çä¿¡æ¯å±ç¤ºåè¿æ¥æå¡ãææäº¤æç±åæ¹èªè¡åååå®æï¼å¹³å°ä¸ä»å¥ä¹ä¸æ¿æäº¤æç¸å³è´£ä»»ã',
    faq3Q: 'å¦ä½èç³»åå®¶æä¹°å®¶ï¼',
    faq3A: 'ç¹å»ååè¯¦æé¡µç"èç³»åå®¶"æé®ï¼å³å¯æ¥çå¯¹æ¹çä¸çèç³»æ¹å¼ãå»ºè®®ä¼åä½¿ç¨å¾®ä¿¡æ WhatsApp æ²éã',
    faq4Q: 'å¯ä»¥åå¸åªäºç±»åçååï¼',
    faq4A: 'ä½ å¯ä»¥åå¸å®¶å·ãçµå­äº§åãæç§ä¹¦ãå¨å·ãæé¥°ãäº¤éå·¥å·ãçæ´»ç¨åç­åç±»äºæç©åãç¦æ­¢åå¸è¿æ³ç©åãé£åãè¯åç­ã',
    faq5Q: 'éå°é®é¢æä¹åï¼',
    faq5A: 'å¦éå°èåä¿¡æ¯æä¸å½è¡ä¸ºï¼è¯·éè¿é¡µé¢åºé¨çèç³»æ¹å¼åæä»¬ä¸¾æ¥ï¼æä»¬ä¼åæ¶å¤çã',
    faq6Q: 'æçä¸ªäººä¿¡æ¯å®å¨åï¼',
    faq6A: 'æä»¬éè§ä½ çéç§ãå¹³å°ä»å±ç¤ºä½ éæ©å¬å¼çä¿¡æ¯ï¼ä¸ä¼åç¬¬ä¸æ¹åºå®æåäº«ä½ çä¸ªäººæ°æ®ã',

    // Footer
    footerAbout: 'å³äº SwapU',
    footerAboutDesc: 'SwapU æ¯ä¸ä¸ºå¨ç¾é«æ ¡çå­¦çæé çäºæç©åä¿¡æ¯å¹³å°ï¼è´åäºè¿æ¥æ ¡å­ç¤¾åºï¼è®©é²ç½®å¥½ç©éæ°æµè½¬ã',
    footerLinks: 'å¿«éé¾æ¥',
    footerContactTitle: 'èç³»æä»¬',
    footerEmailLabel: 'é®ç®±',
    footerPhoneLabel: 'çµè¯',
    footerWeChatLabel: 'å¾®ä¿¡å¬ä¼å·',
    footerXhsLabel: 'å°çº¢ä¹¦',
    footerEmail: 'contact@swapu-dmv.com',
    footerPhone: '+1 (202) 555-0188',
    footerWeChat: 'SwapU_Official',
    footerXhs: '@SwapUçå­¦çäºæ',
    footerLegalTitle: 'æ³å¾å£°æ',
    footerLegalText: 'SwapU ä»æä¾ä¿¡æ¯å±ç¤ºåè¿æ¥æå¡ï¼ä¸åä¸ä»»ä½å®éäº¤æãå¹³å°ä¸å±ç¤ºçææååä¿¡æ¯ç±ç¨æ·èªè¡åå¸ï¼SwapU ä¸å¯¹ååççå®æ§ãè´¨éãå®å¨æ§åä»»ä½ä¿è¯ææ¿æä»»ä½è´£ä»»ãææäº¤æè¡ä¸ºç±ä¹°ååæ¹èªè¡ååå®æï¼ä¸æ¬å¹³å°æ å³ãç¨æ·ä½¿ç¨æ¬å¹³å°å³è¡¨ç¤ºåæä»¥ä¸æ¡æ¬¾ã',
    footerRightsText: 'æ¬å¹³å°ææåå®¹ï¼åæ¬ä½ä¸éäºæå­ãå¾çãè®¾è®¡ãæ è¯ï¼çç¥è¯äº§æå½ SwapU å¢éææãæªç»ä¹¦é¢è®¸å¯ï¼ä¸å¾è½¬è½½ãå¤å¶æç¨äºåä¸ç¨éã',
    footerDisclaimerText: 'æ¬ç½ç«æç»è§£éæå½ SwapU å¢éææãæä»¬ä¿çéæ¶ä¿®æ¹ãæ´æ°å¹³å°è§ååæå¡æ¡æ¬¾çæå©ï¼ä¿®æ¹åçæ¡æ¬¾å°å¨ç½ç«å¬å¸åç«å³çæã',
    footerCopyright: 'Â© 2026 SwapU. All rights reserved. | çº¯ä¿¡æ¯å¹³å°ï¼ä¸åä¸ä»»ä½äº¤æ',
    footerText: 'Â© 2026 SwapU Â· çº¯ä¿¡æ¯å¹³å°ï¼ä¸åä¸ä»»ä½äº¤æ',
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

    navSchools: 'Schools',
    schoolsPageTitle: 'School Communities',
    schoolsPageDesc: 'Find your school and join the community',
    schoolsSearchPH: 'Search by school name, abbreviation, or city...',
    schoolsCount: 'universities covered',
    schoolsStatesCount: 'states & regions',
    schoolCommunity: 'Community',
    schoolBulletin: 'Campus Bulletin Board',
    schoolBulletinEmpty: 'No posts yet â be the first to share!',
    schoolBulletinPH: 'Share campus life, secondhand tips, requests...',
    schoolBulletinPost: 'Post',
    schoolItems: 'Items for Sale',
    schoolWants: 'Want to Buy',
    schoolItemsEmpty: 'No items yet â post one!',
    schoolWantsEmpty: 'No requests yet â post yours!',
    schoolViewAll: 'View All',
    schoolAbout: 'About',
    schoolLocation: 'Location',
    schoolStudents: 'Community Members',
    schoolVerified: 'Verified Alumni',
    schoolJoinCommunity: 'Join Community',
    schoolPostItem: 'Post Item Here',
    schoolBrowseItems: 'Browse Items',
    schoolNearby: 'Nearby Schools',
    schoolBackToAll: 'Back to All Schools',

    homeTitle: 'Campus Secondhand, Simplified',
    homeSubtitle: 'Find the best deals near your school',
    heroTagline: 'Campus Secondhand Platform for International Students',
    heroDesc: 'Covering the top 50 US universities. We connect buyers and sellers as an information bridge â no transactions, no middlemen.',

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
    phil2Desc: 'Reduce unnecessary waste by keeping items in circulation. Secondhand isn\'t settling â it\'s a smart, eco-friendly campus lifestyle.',
    phil3Title: 'Community Connection',
    phil3Desc: 'Break information barriers across campuses, bringing the local student community closer. It\'s not just trading â it\'s sharing a way of life.',
    phil4Title: 'Transparent Info',
    phil4Desc: 'All information is open and transparent. No middlemen, no markups. Sellers show directly, buyers choose freely, and both parties decide how to transact.',

    advantageTitle: 'Why SwapU?',
    advantageSubtitle: 'Designed for students, solving real needs',
    adv1Title: 'Completely Free',
    adv1Desc: 'Posting and browsing are completely free. We never take commissions. No hidden fees, no memberships â truly zero cost.',
    adv2Title: 'Campus-Exclusive Matching',
    adv2Desc: 'Serving 50 top US universities. Everything is nearby â walk or take a short trip to pick up, saving time and effort.',
    adv3Title: 'Privacy First',
    adv3Desc: 'In-app communication protects your personal info. You choose when and how to connect with others. Your privacy is our priority.',
    adv4Title: 'Dead Simple, 3 Min Setup',
    adv4Desc: 'One-click email login, snap a photo to post. No complicated verification, no tedious steps â sharing made effortless.',
    adv5Title: 'Nationwide Coverage',
    adv5Desc: 'Covering 50 top US universities. Browse and exchange across all schools, expanding your options.',
    adv6Title: 'Moving Season Essential',
    adv6Desc: 'Graduating or just arriving? SwapU helps you find what you need, when you need it. No more moving headaches.',

    howTitle: 'How It Works',
    howSubtitle: 'Three steps to start your campus secondhand journey',
    how1Title: 'Sign Up',
    how1Desc: 'Enter your email, click the link to log in â no password needed',
    how2Title: 'Post or Browse',
    how2Desc: 'List your items or browse what other students have to offer',
    how3Title: 'Connect & Exchange',
    how3Desc: 'Found something you like? Contact the seller to arrange a meetup',

    categoryTitle: 'Browse by Category',
    categorySubtitle: 'Choose a category to find what you need',

    schoolsSectionTitle: 'Schools We Cover',
    schoolsSectionDesc: 'Covering 50 top US universities, each with its own community',

    ctaTitle: 'Start Exploring Campus Deals',
    ctaDesc: 'Join SwapU and discover great finds in your student community',
    ctaBrowse: 'Browse Items',
    ctaPost: 'Post an Item',

    browseTitle: 'Browse Items',
    browseSubtitle: 'Find the best deals near your school',

    movingBannerTitle: 'Moving Season',
    movingBannerDesc: 'Graduation season is here! Great deals on everything â don\'t miss out',
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
    faq2A: 'No. SwapU is a pure information platform. We only connect buyers and sellers. All transactions are arranged independently between parties â we do not participate in or bear responsibility for any deals.',
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
    footerAboutDesc: 'SwapU is a secondhand goods info platform built for international students across the US, connecting campus communities and keeping great items in circulation.',
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
    footerCopyright: 'Â© 2026 SwapU. All rights reserved. | Info platform only â no transactions',
    footerText: 'Â© 2026 SwapU Â· Info platform only â we never handle transactions',
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
