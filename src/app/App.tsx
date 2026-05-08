import {
  Cloud,
  Search,
  DollarSign,
  Shield,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Server,
  Globe,
  Lock,
  TrendingUp,
  FileText,
  Coins,
  X,
  Sparkles,
  Link as LinkIcon,
  RefreshCw,
  Database
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// 网盘支持配置 - 未来扩展只需修改 supported 字段
const cloudStorages = [
  { name: '百度网盘', supported: true },
  { name: '阿里云盘', supported: true },
  { name: '夸克网盘', supported: true },
  { name: '迅雷云盘', supported: true },
  { name: 'UC网盘', supported: true },
  { name: '腾讯微云', supported: true },
  { name: '蓝奏云', supported: true },
  { name: '奶牛快传', supported: true },
  { name: '文叔叔', supported: true },
  { name: '城通网盘', supported: true },
  { name: '115网盘', supported: true },
  { name: '天翼云盘', supported: true },
  { name: '移动云盘', supported: true },
  { name: '华为云空间', supported: true },
  { name: '小米云盘', supported: true },
  { name: '360云盘', supported: true },
  { name: '和彩云', supported: true },
  { name: '飞书网盘', supported: true },
  { name: '石墨文档', supported: true },
  { name: '腾讯文档', supported: true },
  { name: 'WPS云文档', supported: false },
  { name: 'Dropbox', supported: false },
  { name: 'Google Drive', supported: false },
  { name: 'OneDrive', supported: false },
];

export default function App() {
  // 平滑滚动到指定区块
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl text-gray-900">资料盘</span>
          </div>
          <a
            href={siteConfig.tenantLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            立即开通
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-blue-100 text-blue-700 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
            🎯 打造独立品牌站，长久运营属于你的资料平台
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900 px-4">
            告别平台限流封号<br />建立属于自己的资料帝国
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
            粘贴网盘链接，系统自动解析更新 · 用户资产永久归你 · 多渠道变现无限制<br className="hidden sm:block" />
            <span className="block sm:inline">3分钟开通，零技术门槛，打造个人IP品牌</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href={siteConfig.tenantLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
            >
              免费开通站点
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <button
              onClick={() => scrollToSection('cases')}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors text-sm sm:text-base"
            >
              查看案例
            </button>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-12 text-gray-600 px-4">
            <div>
              <div className="text-2xl sm:text-3xl text-gray-900 mb-1">20+</div>
              <div className="text-sm sm:text-base">网盘支持</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl text-gray-900 mb-1">3分钟</div>
              <div className="text-sm sm:text-base">快速上线</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl text-gray-900 mb-1">4种</div>
              <div className="text-sm sm:text-base">变现渠道</div>
            </div>
          </div>
        </div>
      </section>

      {/* 平台对比 */}
      <section id="compare" className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-900">为什么要搭建独立品牌站？</h2>
            <p className="text-lg sm:text-xl text-gray-600">第三方平台 vs 自有品牌站，差距一目了然</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* 第三方平台 */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border-2 border-gray-200">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <X className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl text-gray-700">第三方平台</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-600">随时面临限流、封号风险</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-600">用户资产不属于自己</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-600">平台规则频繁变动</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-600">变现方式受限制</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-600">无法沉淀品牌价值</span>
                </li>
              </ul>
            </div>

            {/* 独立品牌站 */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 sm:p-8 rounded-xl border-2 border-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-bl-xl text-sm sm:text-base">
                推荐
              </div>
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl text-gray-900">独立品牌站</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-900">完全自主运营，无限流风险</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-900">用户数据永久归你所有</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-900">自己制定规则，灵活调整</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-900">多种变现方式自由组合</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-900">长期积累个人品牌价值</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 智能解析技术 */}
      <section id="technology" className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-purple-100 text-purple-700 rounded-full mb-3 sm:mb-4 text-sm sm:text-base">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>核心技术优势</span>
            </div>
            <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-900">智能解析引擎</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">粘贴链接即可，系统自动完成一切</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* 流程展示 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <LinkIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="mb-1 sm:mb-2 text-gray-900 text-sm sm:text-base">粘贴链接</h4>
                <p className="text-gray-600 text-xs sm:text-sm">复制网盘分享链接</p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="mb-1 sm:mb-2 text-gray-900 text-sm sm:text-base">智能识别</h4>
                <p className="text-gray-600 text-xs sm:text-sm">AI自动解析内容</p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Database className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="mb-1 sm:mb-2 text-gray-900 text-sm sm:text-base">数据提取</h4>
                <p className="text-gray-600 text-xs sm:text-sm">自动抓取详情</p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="mb-1 sm:mb-2 text-gray-900 text-sm sm:text-base">实时更新</h4>
                <p className="text-gray-600 text-xs sm:text-sm">秒级同步展示</p>
              </div>
            </div>

            {/* 技术亮点 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-center text-gray-900">零人工干预，全自动化采集</h3>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl text-purple-600 mb-1 sm:mb-2">秒级响应</div>
                  <p className="text-gray-600 text-sm sm:text-base">智能解析引擎，瞬间完成</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl text-blue-600 mb-1 sm:mb-2">自动提取</div>
                  <p className="text-gray-600 text-sm sm:text-base">标题、封面、大小、简介</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl text-green-600 mb-1 sm:mb-2">智能分类</div>
                  <p className="text-gray-600 text-sm sm:text-base">自动标签、去重、归档</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">零门槛建站</h3>
              <p className="text-sm sm:text-base text-gray-600">
                无需服务器、域名、代码知识，3分钟开通专属站点，支持自定义域名和二级域名分站
              </p>
            </div>
            <div className="bg-green-50 p-6 sm:p-8 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">全网盘覆盖</h3>
              <p className="text-sm sm:text-base text-gray-600">
                支持百度网盘、阿里云盘、飞书网盘等20+主流网盘，智能解析资源信息，自动去重分类
              </p>
            </div>
            <div className="bg-orange-50 p-6 sm:p-8 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">多渠道变现</h3>
              <p className="text-sm sm:text-base text-gray-600">
                会员付费、广告收益、网盘拉新佣金、资源售卖，4种变现方式自由组合，收益最大化
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-900">核心功能</h2>
            <p className="text-lg sm:text-xl text-gray-600">一站式解决方案，助力站长高效运营</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* 建站功能 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Server className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">专业建站系统</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>10+精美模板，自定义Logo、配色、导航</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>PC+手机自适应，一人可运营多个垂直站点</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>SEO优化工具，自动生成sitemap引流</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 网盘管理 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">全网盘智能管理</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>支持百度、阿里、飞书等20+网盘链接</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>批量导入，自动解析标题、封面、文件信息</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>失效链接监控，自动标记和批量清理</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 搜索功能 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">AI智能搜索</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>关键词搜索+AI语义搜索双引擎</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>支持自然语言提问，精准匹配相关资料</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>一键复制链接、转存网盘，操作门槛低</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 变现功能 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">多渠道变现</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>会员套餐自定义，日卡到终身卡灵活定价</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>多广告位支持，对接百度联盟等广告平台</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>网盘拉新佣金+资源单独售卖，收益多元化</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 数据分析 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">数据运营分析</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>访问量、搜索量、付费转化率实时统计</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>热门搜索词、资源点击排行、用户画像分析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>资源批量管理，运营效率翻倍</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 安全合规 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">安全合规保障</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>敏感词过滤、违规资源识别，规避侵权风险</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>提供免责声明、用户协议等合规模板</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>数据加密存储，定期备份，保障数据安全</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Support */}
      <section id="networks" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-900">支持20+主流网盘</h2>
            <p className="text-lg sm:text-xl text-gray-600">覆盖99%资源渠道，持续扩展中</p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {cloudStorages.map((storage, index) => (
                <div
                  key={index}
                  className={`p-3 sm:p-4 rounded-lg border ${
                    storage.supported
                      ? 'bg-white border-blue-100 shadow-sm'
                      : 'bg-gray-100 border-gray-200'
                  } transition-all`}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    storage.supported
                      ? 'bg-blue-100'
                      : 'bg-gray-200'
                  }`}>
                    <Cloud className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      storage.supported
                        ? 'text-blue-600'
                        : 'text-gray-400'
                    }`} />
                  </div>
                  <div className={`text-center mb-2 text-sm sm:text-base ${
                    storage.supported
                      ? 'text-gray-900'
                      : 'text-gray-400'
                  }`}>
                    {storage.name}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs sm:text-sm">
                    {storage.supported ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        <span className="text-green-600">已支持</span>
                      </>
                    ) : (
                      <span className="text-gray-400">即将支持</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 text-center text-gray-500 text-sm sm:text-base">
              <p>💡 持续接入更多网盘平台，敬请期待</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-900">站长案例</h2>
            <p className="text-lg sm:text-xl text-gray-600">真实案例，实际收益</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-base sm:text-lg">
                  考
                </div>
                <div>
                  <div className="text-gray-900 text-sm sm:text-base">考研资料盘站长</div>
                  <div className="text-gray-500 text-xs sm:text-sm">垂直类目运营</div>
                </div>
              </div>
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-4">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl text-blue-600 mb-1">3天</div>
                    <div className="text-gray-600 text-xs sm:text-sm">搭建完成</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl text-blue-600 mb-1">5000+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">资料收录</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl text-orange-600 mb-1">8000+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">首月收益</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                通过会员付费+网盘拉新佣金，精准定位考研人群，首月即实现盈利
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-base sm:text-lg">
                  设
                </div>
                <div>
                  <div className="text-gray-900 text-sm sm:text-base">设计素材站站长</div>
                  <div className="text-gray-500 text-xs sm:text-sm">资源售卖模式</div>
                </div>
              </div>
              <div className="bg-purple-50 p-3 sm:p-4 rounded-lg mb-4">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl text-purple-600 mb-1">PS/AI</div>
                    <div className="text-gray-600 text-xs sm:text-sm">素材类目</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl text-purple-600 mb-1">3000+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">会员用户</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl text-orange-600 mb-1">1.2万+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">月均收益</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                专注设计素材领域，通过广告+资源售卖，月收入稳定破万
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section id="monetization" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-900">4种变现方式</h2>
            <p className="text-lg sm:text-xl text-gray-600">多维度收益，最大化盈利</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-xl mb-2 text-gray-900">会员付费</h3>
              <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">自定义套餐定价，会员专属权益</p>
              <div className="text-lg sm:text-2xl text-blue-600">核心收益</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-xl mb-2 text-gray-900">广告收益</h3>
              <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">多广告位，对接联盟广告</p>
              <div className="text-lg sm:text-2xl text-green-600">被动收入</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Coins className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-xl mb-2 text-gray-900">拉新佣金</h3>
              <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">网盘拉新，高额佣金分成</p>
              <div className="text-lg sm:text-2xl text-purple-600">额外奖励</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-xl text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-xl mb-2 text-gray-900">资源售卖</h3>
              <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">单品售卖或打包售卖</p>
              <div className="text-lg sm:text-2xl text-orange-600">直接盈利</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 text-white">立即开通，开启独立品牌站变现之路</h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-10">
            3分钟搭建 · 零技术门槛 · 多渠道变现 · 专业售后支持
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href={siteConfig.tenantLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors shadow-xl text-sm sm:text-base"
            >
              免费开通站点
            </a>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-8 text-blue-100 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>无需服务器</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>无需代码</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>终身免费升级</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-white text-base sm:text-lg">资料盘</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                {siteConfig.domain}<br />
                虚拟资料站长专属SaaS平台
              </p>
            </div>
            <div>
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">产品功能</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>零门槛建站</li>
                <li>全网盘支持</li>
                <li>AI智能搜索</li>
                <li>多渠道变现</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">服务支持</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>运营指导</li>
                <li>技术支持</li>
                <li>合规模板</li>
                <li>数据分析</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">联系我们</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>官方网站：{siteConfig.domain}</li>
                <li>客服时间：7×12小时</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} {siteConfig.siteName} {siteConfig.domain}. 专注独立资料站建设与运营</p>
          </div>
        </div>
      </footer>
    </div>
  );
}