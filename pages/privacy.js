import { NextSeo } from "next-seo";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-6">
      <NextSeo
        title="Privacy Policy | FinNews247 Crypto Trading Signals"
        description="Read the FinNews247 Privacy Policy. We protect your data while delivering top crypto trading signals and finance insights."
        openGraph={{
          title: "Privacy Policy | FinNews247 Crypto Trading Signals",
          description:
            "FinNews247 privacy practices for users accessing crypto trading signals and finance coverage.",
          url: "https://finnews247.com/privacy-policy",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "privacy policy, crypto trading signals data, finnews247 privacy",
          },
        ]}
      />
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>
        At FinNews247, your privacy is important. We handle your data securely
        while providing access to <b>crypto trading signals</b> and finance
        insights.
      </p>
    </div>
  );
}
