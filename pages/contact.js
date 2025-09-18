import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-6">
      <NextSeo
        title="Contact FinNews247 | Crypto Trading Signals Support"
        description="Get in touch with FinNews247 for questions about crypto trading signals, finance insights, or partnership opportunities."
        openGraph={{
          title: "Contact FinNews247 | Crypto Trading Signals Support",
          description:
            "Reach out to FinNews247 team for inquiries about trading signals, crypto markets, or collaborations.",
          url: "https://finnews247.com/contact",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "contact finnews247, crypto trading signals help, support, partnerships",
          },
        ]}
      />
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>
        Have questions about <b>crypto trading signals</b> or want to
        collaborate? Reach out to our team via email at{" "}
        <a
          href="mailto:support@finnews247.com"
          className="text-sky-600 hover:underline"
        >
          support@finnews247.com
        </a>
        .
      </p>
    </div>
  );
}
