import { siteConfig, structuredData } from './siteConfig';
import { sgoEnhanced } from './sgoEnhanced';

// SEO 元数据配置
export const seoConfig = {
  default: {
    title: `${siteConfig.siteName} - 专业网盘资源管理平台`,
    description: siteConfig.siteDescription,
    keywords: siteConfig.keywords,
  },
  
  // Open Graph 配置
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} - 3分钟搭建专属资料站，多渠道变现`,
    description: siteConfig.siteDescription,
    image: `/og-image.png`,
    imageWidth: 1200,
    imageHeight: 630,
  },
  
  // Twitter Card 配置
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.siteName} - 专业网盘资源管理平台`,
    description: siteConfig.siteDescription,
    image: `/og-image.png`,
  },
};

// 生成完整的 HTML meta 标签字符串
export function generateMetaTags(): string {
  const { title, description, keywords } = seoConfig.default;
  const og = seoConfig.openGraph;
  const twitter = seoConfig.twitter;
  
  // 生成增强的 SGO 结构化数据
  const enhancedFAQ = sgoEnhanced.generateEnhancedFAQ();
  const enhancedHowTo = sgoEnhanced.generateEnhancedHowTo();
  const productDesc = sgoEnhanced.generateProductDescription();
  const websiteDesc = sgoEnhanced.generateWebsiteDescription();
  
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta name="author" content="${siteConfig.siteName}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${siteConfig.baseUrl}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${og.type}" />
    <meta property="og:url" content="${siteConfig.baseUrl}" />
    <meta property="og:title" content="${og.title}" />
    <meta property="og:description" content="${og.description}" />
    <meta property="og:image" content="${og.image}" />
    <meta property="og:image:width" content="${String(og.imageWidth)}" />
    <meta property="og:image:height" content="${String(og.imageHeight)}" />
    <meta property="og:locale" content="${og.locale}" />
    <meta property="og:site_name" content="${og.siteName}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="${twitter.card}" />
    <meta name="twitter:title" content="${twitter.title}" />
    <meta name="twitter:description" content="${twitter.description}" />
    <meta name="twitter:image" content="${twitter.image}" />
    
    <!-- 移动端优化 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="theme-color" content="#2563eb" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    
    <!-- 搜索引擎验证 (按需配置) -->
    <meta name="baidu-site-verification" content="" />
    <meta name="google-site-verification" content="" />
    
    <!-- SGO AI 优化：增强版结构化数据 - JSON-LD -->
    <script type="application/ld+json">${JSON.stringify(structuredData.organization)}</script>
    <script type="application/ld+json">${JSON.stringify(structuredData.webApplication)}</script>
    <script type="application/ld+json">${JSON.stringify(structuredData.faq)}</script>
    <script type="application/ld+json">${JSON.stringify(structuredData.howTo)}</script>
    
    <!-- SGO AI 优化：增强版 FAQ（AI搜索引擎重点抓取） -->
    <script type="application/ld+json">${JSON.stringify(enhancedFAQ)}</script>
    
    <!-- SGO AI 优化：增强版 HowTo（AI搜索引擎重点抓取） -->
    <script type="application/ld+json">${JSON.stringify(enhancedHowTo)}</script>
    
    <!-- SGO AI 优化：产品详细描述（AI搜索引擎提取关键信息） -->
    <script type="application/ld+json">${JSON.stringify(productDesc)}</script>
    
    <!-- SGO AI 优化：网站详细描述（AI搜索引擎提取关键信息） -->
    <script type="application/ld+json">${JSON.stringify(websiteDesc)}</script>
  `.trim();
}
