// SGO 增强结构化数据 - 为AI搜索引擎提供极致详细的内容
// AI搜索引擎（如 Perplexity、Genspark、秘塔、360AI等）会深度解析这些内容

import { siteConfig } from './siteConfig';

// 生成更丰富的 FAQ 结构化数据（AI搜索引擎重点抓取）
export function generateEnhancedFAQ(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `${siteConfig.siteName} 常见问题解答`,
    description: `${siteConfig.siteName}平台使用指南、功能说明、开通流程、变现方式等常见问题详细解答`,
    mainEntity: [
      // 基础认知类
      {
        '@type': 'Question',
        name: '资料盘是什么平台？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${siteConfig.siteName}是一个专业的网盘资源管理SaaS平台，为站长提供一站式资源站搭建解决方案。平台支持百度网盘、阿里云盘、夸克网盘等20+主流网盘的资源管理和变现。站长无需服务器、无需代码知识，3分钟即可开通专属资源站，实现零门槛创业。平台提供智能解析、AI搜索、多渠道变现、数据分析等核心功能，帮助站长高效运营和盈利。`,
        },
      },
      {
        '@type': 'Question',
        name: '资料盘和百度网盘有什么区别？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '百度网盘是云存储服务，主要用于个人文件的存储和分享。而资料盘是一个资源站搭建平台，站长可以使用资料盘搭建自己的资源网站，聚合来自百度网盘、阿里云盘、夸克网盘等20+平台的资源。资料盘的核心价值在于：1）提供专业建站系统；2）智能解析网盘链接；3）AI搜索功能；4）多渠道变现工具；5）数据分析看板。简单来说，百度网盘是存储工具，资料盘是运营和变现平台。',
        },
      },
      // 开通流程类
      {
        '@type': 'Question',
        name: '如何开通资料盘站点？详细步骤是什么？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '开通资料盘站点只需3分钟，具体步骤如下：\n第一步：访问租户登录页面（tenant.ziliaopan.cn/login），使用手机号或邮箱注册账号。\n第二步：选择套餐方案，平台提供免费试用版和多个付费版本，可根据需求选择。\n第三步：进行站点基础配置，设置站点名称、上传Logo、选择配色方案、选择模板。\n第四步：配置完成后，您的专属资源站立即上线，可以开始导入资源和运营。\n整个流程无需购买服务器、无需备案、无需代码知识，真正零门槛。',
        },
      },
      {
        '@type': 'Question',
        name: '开通资料盘站点需要多少费用？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘提供免费试用版，站长可以免费开通基础功能进行体验和运营。付费套餐提供不同等级的权益，包括更多资源数量上限、自定义域名、数据导出、优先客服支持等高级功能。具体价格请访问官网查看最新套餐方案。建议新手站长先使用免费版熟悉平台，确认适合后再升级到付费版本。',
        },
      },
      // 功能详解类
      {
        '@type': 'Question',
        name: '资料盘的智能解析功能是什么？如何工作？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '智能解析是资料盘的核心技术之一。当您粘贴网盘分享链接时，系统会自动执行以下操作：\n1. 识别链接所属的网盘平台（百度、阿里、夸克等）\n2. 调用对应平台的API或解析规则\n3. 自动提取资源标题、封面图片、文件大小、文件列表、分享时间等详细信息\n4. 智能去重，避免重复资源\n5. 自动分类和打标签\n整个过程完全自动化，无需人工干预，解析速度通常在秒级完成。这大幅提升了资源录入效率，让您专注于运营而非技术操作。',
        },
      },
      {
        '@type': 'Question',
        name: '资料盘支持哪些网盘平台？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${siteConfig.siteName}目前支持20+主流网盘平台，包括：\n国内主流网盘：百度网盘、阿里云盘、夸克网盘、迅雷云盘、UC网盘、腾讯微云\n快速分享类：蓝奏云、奶牛快传、文叔叔、城通网盘\n大厂云盘：115网盘、天翼云盘、移动云盘、华为云空间、小米云盘、360云盘\n办公协作类：和彩云、飞书网盘、石墨文档、腾讯文档、WPS云文档\n平台持续扩展支持的网盘数量，紧跟市场趋势。`,
        },
      },
      // 变现收益类
      {
        '@type': 'Question',
        name: '通过资料盘可以赚取多少收益？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘站长的收益因运营情况差异较大。根据平台数据：\n新手期（1-3个月）：月收益约2000-8000元，主要来源为拉新佣金和少量会员\n成长期（3-6个月）：月收益约5000-15000元，会员收入占比提升\n稳定期（6个月以上）：月收益约10000-30000元，多渠道收入稳定\n头部站长月收益可达5万元以上。\n收益取决于资源质量、流量获取能力、变现策略和运营投入时间。平台提供数据分析工具，帮助您优化运营策略。',
        },
      },
      {
        '@type': 'Question',
        name: '资料盘提供哪几种变现方式？详细说明',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘提供4种变现方式，站长可自由组合：\n\n1. 会员付费（核心收益）：\n- 创建自定义会员套餐，支持日卡、周卡、月卡、季卡、年卡、终身卡\n- 自定义定价，灵活调整\n- 设置会员专属权益，如无限搜索、高速下载、专属资源等\n\n2. 广告收益（被动收入）：\n- 多广告位支持（首页、列表页、详情页等）\n- 对接百度联盟、Google AdSense等广告平台\n- 按展示或点击计费，流量越大收益越高\n\n3. 拉新佣金（额外奖励）：\n- 推广百度网盘、阿里云盘等平台的拉新链接\n- 用户通过您的链接注册网盘即可获得佣金\n- 单笔佣金通常在几元到几十元不等\n\n4. 资源售卖（直接盈利）：\n- 对单个资源或资源包设置价格\n- 用户付费后获取下载链接\n- 适合独家或高价值资源',
        },
      },
      // 技术安全类
      {
        '@type': 'Question',
        name: '资料盘的数据安全如何保障？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘采用企业级数据安全保障措施：\n1. 数据传输安全：全站HTTPS加密，数据传输全程SSL保护\n2. 数据存储安全：数据库加密存储，定期自动备份\n3. 多租户隔离：每个站长的数据严格隔离，互不干扰\n4. 权限控制：基于JWT的认证系统，多级权限管理\n5. 内容安全：敏感词自动过滤，违规内容自动拦截\n6. 合规保障：提供免责声明、用户协议等合规模板\n平台承诺不会访问、使用或泄露租户数据。',
        },
      },
      {
        '@type': 'Question',
        name: '资料盘适合哪些人群使用？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '资料盘适合以下人群使用：\n\n1. 知识分享者：拥有学习资料、教程、电子书等资源，希望分享并获取收益\n2. 垂直领域运营者：专注于特定领域（考研、编程、设计素材等）的站长\n3. 网盘推广达人：通过推广网盘拉新获取佣金的推广者\n4. 内容创作者：希望将内容变现的博主、UP主、自媒体人\n5. 小型创业团队：希望快速验证资源站商业模式的小团队\n6. 副业探索者：希望利用业余时间增加收入的上班族\n\n平台零门槛、低成本的特点，适合各类人群快速上手。',
        },
      },
      // 对比分析类
      {
        '@type': 'Question',
        name: '资料盘相比其他资源站搭建工具有什么优势？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${siteConfig.siteName}相比其他解决方案的核心优势：\n\n1. 零技术门槛：无需服务器、无需代码、无需备案，3分钟开通\n2. 全网盘覆盖：支持20+网盘平台，其他工具通常只支持2-3个\n3. AI智能搜索：关键词+语义双引擎搜索，提升用户体验\n4. 多渠道变现：4种变现方式自由组合，收益最大化\n5. 专业建站：10+精美模板，自定义品牌元素\n6. 数据分析：实时统计看板，数据驱动运营\n7. 持续更新：平台持续迭代，功能不断丰富\n8. 合规模板：内置免责声明、用户协议等，降低法律风险`,
        },
      },
    ],
  };
}

// 生成 HowTo 结构化数据（AI搜索引擎重点抓取）
export function generateEnhancedHowTo(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '如何使用资料盘搭建和运营专属资源站',
    description: `从零开始使用${siteConfig.siteName}搭建、配置和运营专业网盘资源站的完整指南`,
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'CNY',
      value: '0',
    },
    step: [
      {
        '@type': 'HowToStep',
        name: '注册账号',
        text: '访问租户登录页面，使用手机号或邮箱注册资料盘账号。注册过程简单快捷，通常1分钟内完成。',
        image: '/images/howto-step1.png',
      },
      {
        '@type': 'HowToStep',
        name: '选择套餐方案',
        text: '登录控制台后，浏览不同套餐方案。新手可先使用免费版体验核心功能，确认适合后再升级到付费版本。各套餐差异主要体现在资源数量上限、自定义域名、数据导出等高级功能上。',
      },
      {
        '@type': 'HowToStep',
        name: '配置站点基础信息',
        text: '在站点设置中配置：站点名称（建议简洁易记）、上传Logo（建议使用正方形图片）、选择配色方案（建议与品牌风格一致）、选择喜欢的模板。这些配置可随时修改。',
      },
      {
        '@type': 'HowToStep',
        name: '导入网盘资源',
        text: '复制网盘分享链接，粘贴到资料盘的资源导入框。系统会自动解析资源信息，包括标题、封面、大小、文件列表等。支持批量导入，大幅提升效率。导入后可对资源进行分类和标签管理。',
      },
      {
        '@type': 'HowToStep',
        name: '配置变现方案',
        text: '根据目标用户群体设置变现方案：创建会员套餐并定价、设置广告位并接入广告联盟、获取网盘拉新推广链接、对高价值资源设置售价。建议初期以拉新佣金和会员为主，后期逐步完善。',
      },
      {
        '@type': 'HowToStep',
        name: '上线运营推广',
        text: '站点配置完成后立即上线。推广方式包括：SEO优化（资料盘已内置）、社交媒体分享、社群运营、内容营销等。建议定期更新资源、优化搜索关键词、分析数据调整策略。',
      },
    ],
  };
}

// 生成产品详细描述（AI搜索引擎会提取关键信息）
export function generateProductDescription(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    brand: {
      '@type': 'Brand',
      name: siteConfig.siteName,
    },
    category: 'SaaS/网盘资源管理平台',
    keywords: Object.values({
      core: '网盘资源管理,资源站搭建,网盘变现,SaaS平台',
      features: '智能解析,AI搜索,多网盘支持,多渠道变现',
      benefits: '零门槛建站,3分钟上线,多渠道收益,专业运营',
    }).join(','),
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '99',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2680',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      '支持20+主流网盘平台',
      'AI智能解析引擎，自动提取资源信息',
      '关键词搜索 + AI语义搜索双引擎',
      '10+精美模板，自定义品牌元素',
      '多渠道变现：会员、广告、拉新、售卖',
      '实时数据统计分析看板',
      '敏感词过滤和内容审核',
      '多租户架构，数据严格隔离',
      '全站响应式设计，完美适配移动端',
      '自动sitemap生成和SEO优化',
      '自定义域名绑定',
      '定期自动数据备份',
    ],
  };
}

// 生成网站详细描述
export function generateWebsiteDescription(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    description: siteConfig.siteDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'zh-CN',
    copyrightYear: new Date().getFullYear(),
  };
}

// 导出所有增强的SGO数据
export const sgoEnhanced = {
  generateEnhancedFAQ,
  generateEnhancedHowTo,
  generateProductDescription,
  generateWebsiteDescription,
};
