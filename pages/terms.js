import { NextSeo } from "next-seo";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-6">
      <NextSeo
        title="Terms & Conditions | FinNews247 Crypto Trading Signals"
        description="Review the Terms & Conditions for using FinNews247, a niche site for crypto trading signals and finance updates."
        openGraph={{
          title: "Terms & Conditions | FinNews247 Crypto Trading Signals",
          description:
            "FinNews247 terms of service for accessing crypto trading signals and finance content.",
          url: "https://finnews247.com/terms",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "terms and conditions, finnews247, crypto trading signals terms",
          },
        ]}
      />
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p>
        By using FinNews247, you agree to our terms. Our platform delivers{" "}
        <b>crypto trading signals</b> and financial insights for informational
        purposes only, not financial advice.
      </p>
    </div>
  );
}
