import { NextSeo } from "next-seo";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-6">
      <NextSeo
        title="About FinNews247 | Crypto Trading Signals & Finance Insights"
        description="Learn about FinNews247, a niche platform focused on crypto trading signals, entry/target/stoploss insights, and global market coverage."
        openGraph={{
          title: "About FinNews247 | Crypto Trading Signals & Finance Insights",
          description:
            "FinNews247 specializes in crypto trading signals and finance coverage. Learn about our mission and vision.",
          url: "https://finnews247.com/about",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "about finnews247, crypto trading signals, crypto insights, finnews team",
          },
        ]}
      />
      <h1 className="text-2xl font-bold mb-4">About FinNews247</h1>
      <p>
        FinNews247 is a professional finance and market news platform with a
        niche focus on <b>crypto trading signals</b>. Our mission is to provide
        traders and investors with accurate, timely, and actionable insights.
      </p>
    </div>
  );
}
