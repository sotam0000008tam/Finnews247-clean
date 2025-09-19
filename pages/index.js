import fs from "fs";
import path from "path";
import PostCard from "../components/PostCard";
import { NextSeo } from "next-seo";
import TradingSignalsBoxMain from "../components/TradingSignalsBoxMain";
import TradingSignalsBoxMini from "../components/TradingSignalsBoxMini";
import TopExchanges from "../components/TopExchanges";
import BestWallets from "../components/BestWallets";
import TopStaking from "../components/TopStaking";
import TopMovers from "../components/TopMovers";
import FearGreed from "../components/FearGreed";

export default function Home({ posts, trending }) {
  // ✅ Structured Data cho trang chủ
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FinNews247 - Crypto Trading Signals & Market Coverage",
    url: "https://finnews247.com/",
    description:
      "FinNews247 provides professional finance coverage with a focus on crypto trading signals, entry, target, stoploss, plus updates on cryptocurrencies, stocks, economy, and global markets.",
    publisher: {
      "@type": "Organization",
      name: "FinNews247",
      url: "https://finnews247.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://finnews247.com/logo.png",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Latest Trading Signals",
      itemListElement: trending.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://finnews247.com/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <>
      <NextSeo
        title="FinNews247 - Crypto Trading Signals & Market Coverage"
        description="Stay updated with reliable crypto trading signals (entry, target, stoploss) and market insights across cryptocurrencies, stocks, economy, and global markets."
        openGraph={{
          title: "FinNews247 - Crypto Trading Signals & Market Coverage",
          description:
            "FinNews247 delivers professional finance coverage with crypto trading signals, stock updates, economy, and market news.",
          url: "https://finnews247.com/",
          images: [{ url: "https://finnews247.com/logo.png" }],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "crypto trading signals, bitcoin signals, ethereum signals, entry target stoploss, crypto analysis, finnews247",
          },
        ]}
      />

      {/* ✅ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <TradingSignalsBoxMini />
          <TopExchanges />
          <BestWallets />
          <TopStaking />
          <TopMovers />
          <FearGreed />

          {/* Trending Box */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mt-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">🔥 Trending</h2>
            <ul className="space-y-4">
              {trending.map((p) => (
                <li key={p.slug}>
                  <a href={`/${p.slug}`} className="block">
                    <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                    <p className="text-xs text-gray-500">{p.date}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3">
          <TradingSignalsBoxMain />
          <h1 className="text-3xl font-semibold mb-6">
            Latest Finance & Market News
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.slice(0, 50).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "data", "news.json"),
    "utf-8"
  );
  const posts = JSON.parse(raw);

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const trending = posts.slice(0, 4);

  return { props: { posts, trending } };
}
