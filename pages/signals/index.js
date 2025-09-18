import Link from "next/link";
import { NextSeo } from "next-seo";
import signals from "../../data/signals.json";

// ✅ Import các Box phụ trợ
import BestWallets from "../../components/BestWallets";
import TopStaking from "../../components/TopStaking";
import TopExchanges from "../../components/TopExchanges"; // 👉 Thêm dòng này
import SignalFAQ from "../../components/SignalFAQ";
import FAQSchema from "../../components/FAQSchema";

export default function SignalsPage() {
  // ✅ Tạo structured data JSON-LD cho danh sách signals
  const itemListElement = signals.map((s, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://finnews247.com/signals/${s.id}`,
    name: `${s.pair} ${s.type} Signal`,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Crypto Trading Signals",
    description:
      "List of latest cryptocurrency trading signals including entry, target, and stoploss.",
    url: "https://finnews247.com/signals",
    itemListElement,
  };

  // ✅ Sắp xếp theo ngày mới nhất
  const sortedSignals = [...signals].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <NextSeo
        title="Trading Signals | FinNews"
        description="Latest crypto trading signals with entry, target, and stoploss."
      />

      {/* ✅ Schema SEO FAQ */}
      <FAQSchema />

      {/* ✅ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <h1 className="text-2xl font-bold mb-3">📊 All Trading Signals</h1>

      <p className="text-gray-600 mb-6">
        Explore the latest cryptocurrency trading signals with clear entry,
        target, and stoploss levels. Updated frequently for traders who need
        quick and reliable insights.
      </p>

      {/* Danh sách tín hiệu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedSignals.map((s) => (
          <Link
            key={s.id}
            href={`/signals/${s.id}`}
            className="p-4 border rounded-xl hover:shadow-lg transition bg-white dark:bg-gray-800"
          >
            <h2 className="font-semibold">
              {s.pair} —{" "}
              <span
                className={s.type === "Long" ? "text-green-600" : "text-red-600"}
              >
                {s.type}
              </span>
            </h2>
            <p className="text-sm text-gray-600">{s.date}</p>
            <p className="mt-2 text-sm">{s.excerpt}</p>
            <p className="text-xs text-gray-500 mt-2">
              Entry {s.entry} • Target {s.target} • Stoploss {s.stoploss}
            </p>
          </Link>
        ))}
      </div>

      {/* Box bổ sung */}
      <div className="mt-10 space-y-6">
        <TopExchanges />   {/* 👉 Thêm box này */}
        <BestWallets />
        <TopStaking />
      </div>

      {/* FAQ cho SEO + UX */}
      <SignalFAQ />

      {/* Disclaimer */}
      <div className="mt-6 p-3 bg-yellow-100 text-yellow-900 text-sm rounded">
        ⚠️ <b>Disclaimer:</b> This content is for informational purposes only
        and not financial advice.
      </div>
    </div>
  );
}
