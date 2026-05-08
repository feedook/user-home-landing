
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { generateMetaTags } from "./config/seoConfig.ts";
  import "./styles/index.css";

  // 注入 SEO 元数据到 document.head
  const injectMetaTags = () => {
    const metaTags = generateMetaTags();
    const parser = new DOMParser();
    const doc = parser.parseFromString(metaTags, "text/html");
    
    // 设置 title
    const titleEl = doc.querySelector("title");
    if (titleEl) {
      document.title = titleEl.textContent || "";
    }
    
    // 注入所有 meta 标签
    doc.querySelectorAll("meta").forEach((meta) => {
      const existing = document.querySelector(
        meta.getAttribute("name")
          ? `meta[name="${meta.getAttribute("name")}"]`
          : meta.getAttribute("property")
            ? `meta[property="${meta.getAttribute("property")}"]`
            : null
      );
      if (!existing) {
        document.head.appendChild(meta);
      }
    });
    
    // 注入 canonical link
    const canonical = doc.querySelector("link[rel='canonical']");
    if (canonical) {
      const existing = document.querySelector("link[rel='canonical']");
      if (!existing) {
        document.head.appendChild(canonical);
      }
    }
    
    // 注入 JSON-LD 结构化数据
    doc.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
      const newScript = document.createElement("script");
      newScript.type = "application/ld+json";
      newScript.textContent = script.textContent;
      document.head.appendChild(newScript);
    });
  };

  injectMetaTags();

  createRoot(document.getElementById("root")!).render(<App />);
  