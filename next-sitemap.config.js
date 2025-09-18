const fs = require("fs");
const path = require("path");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://finnews247.com",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/admin/*", "/api/*", "/_next/*"],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async (config) => {
    let paths = [];

    // ✅ Lấy news slug từ data/news.json
    try {
      const newsData = JSON.parse(
        fs.readFileSync(path.join(__dirname, "data/news.json"))
      );
      newsData.forEach((item) => {
        if (item.slug) {
          paths.push({ loc: `/news/${item.slug}` });
        }
      });
    } catch (err) {
      console.error("❌ Không load được news.json:", err);
    }

    // ✅ Lấy signals id từ data/signals.json
    try {
      const signalsData = JSON.parse(
        fs.readFileSync(path.join(__dirname, "data/signals.json"))
      );
      signalsData.forEach((item) => {
        if (item.id) {
          paths.push({ loc: `/signals/${item.id}` });
        }
      });
    } catch (err) {
      console.error("❌ Không load được signals.json:", err);
    }

    return paths;
  },
};
