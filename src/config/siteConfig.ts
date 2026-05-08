// 站点配置 - 所有 URL 从这里统一管理
// 修改一处，全局生效

export const siteConfig = {
  // 主域名
  domain: 'ziliaopan.cn',
  
  // 协议
  protocol: 'https',
  
  // 主站 URL
  get baseUrl(): string {
    return `${this.protocol}://${this.domain}`;
  },
  
  // 租户登录页 URL
  get tenantLoginUrl(): string {
    return `${this.protocol}://tenant.${this.domain}/login`;
  },
  
  // 租户开通页 URL
  get tenantSignupUrl(): string {
    return `${this.protocol}://tenant.${this.domain}/signup`;
  },
  
  // SEO 相关
  siteName: '资料盘',
  siteDescription: '资料盘 - 专业网盘资源管理平台，支持百度/阿里/夸克等20+网盘，智能解析、多渠道变现，3分钟搭建专属资料站',
  keywords: '资料盘,网盘资源管理,百度网盘,阿里云盘,夸克网盘,网盘搜索,资源站搭建,知识变现,网盘拉新,虚拟资料',
};

// 路由配置
export const routes = {
  home: '/',
  features: '/#features',
  cases: '/#cases',
  networks: '/#networks',
  technology: '/#technology',
  compare: '/#compare',
  monetization: '/#monetization',
} as const;

// 社交分享配置
export const socialConfig = {
  title: siteConfig.siteName,
  description: siteConfig.siteDescription,
  url: siteConfig.baseUrl,
  imageUrl: `${siteConfig.baseUrl}/og-image.png`,
  twitter: '@ziliaopan',
};

// 结构化数据配置
export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    description: siteConfig.siteDescription,
  },
  
  webApplication: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: siteConfig.baseUrl,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '99',
      priceCurrency: 'CNY',
    },
  },
  
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '什么是资料盘？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘是一个专业的网盘资源管理平台，支持百度网盘、阿里云盘、夸克网盘等20+主流网盘。站长可通过资料盘快速搭建专属资料站，实现资源管理和多渠道变现。',
        },
      },
      {
        '@type': 'Question',
        name: '如何开通自己的资料站？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '开通资料站非常简单，只需3分钟。访问租户登录页，注册账号并选择套餐，即可快速开通专属资料站。无需服务器、无需代码知识，支持自定义域名绑定。',
        },
      },
      {
        '@type': 'Question',
        name: '资料盘支持哪些网盘平台？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘支持百度网盘、阿里云盘、夸克网盘、迅雷云盘、UC网盘、腾讯微云、蓝奏云、奶牛快传、文叔叔、城通网盘、115网盘、天翼云盘、移动云盘、华为云空间、小米云盘等20+主流网盘平台。',
        },
      },
      {
        '@type': 'Question',
        name: '资料盘的变现方式有哪些？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘提供4种变现方式：1）会员付费 - 自定义会员套餐，设置日卡/周卡/月卡/年卡/终身卡；2）广告收益 - 多广告位支持，对接百度联盟等广告平台；3）拉新佣金 - 通过网盘拉新获取高额佣金；4）资源售卖 - 单品售卖或打包售卖虚拟资源。',
        },
      },
      {
        '@type': 'Question',
        name: '资料盘收费吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘提供免费试用，站长可以免费开通基础版资料站进行体验。如需更多高级功能如无限资源数量、自定义域名、数据导出等，可选择付费会员套餐。具体价格请访问官网查看详情。',
        },
      },
    ],
  },
  
  howTo: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '如何使用资料盘搭建专属资料站',
    description: '3分钟快速搭建专属网盘资源站的详细步骤',
    step: [
      {
        '@type': 'HowToStep',
        name: '注册账号',
        text: '访问租户登录页，使用手机号或邮箱注册资料盘账号',
      },
      {
        '@type': 'HowToStep',
        name: '选择套餐',
        text: '根据需求选择适合的套餐方案，支持免费试用',
      },
      {
        '@type': 'HowToStep',
        name: '配置站点',
        text: '设置站点名称、Logo、配色方案，选择喜欢的模板',
      },
      {
        '@type': 'HowToStep',
        name: '导入资源',
        text: '粘贴网盘链接，系统自动解析资源信息并导入站点',
      },
      {
        '@type': 'HowToStep',
        name: '开始运营',
        text: '站点上线后，通过SEO优化、内容更新、社群推广等方式获取流量和收益',
      },
    ],
  },
};
