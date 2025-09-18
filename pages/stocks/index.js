// pages/stocks/index.js
import fs from "fs";
import path from "path";
import Link from "next/link";
import PostCard from "../../components/PostCard";
import { NextSeo } from "next-seo";

export default function Stocks({ posts, totalPages, currentPage }) {
  return (
    <>
      {/* ✅ SEO */}
      <NextSeo
        title="Stock Market News | FinNews"
        description="Daily updates on U.S. and global stock markets, earnings reports, and financial insights."
        openGraph={{
          title: "Stock Market News | FinNews",
          description:
            "Track Wall Street and global equities with the latest stock market analysis and expert commentary.",
          url: "https://finnews247.com/stocks",
          images: [{ url: "https://finnews247.com/images/stocks-banner.jpg" }],
        }}
      />

      <div>
        <h1 className="text-3xl font-semibold mb-6">Stocks</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <Link
                  key={pageNum}
                  href={pageNum === 1 ? "/stocks" : `/stocks?page=${pageNum}`}
                  className={`px-3 py-1 rounded ${
                    pageNum === currentPage
                      ? "bg-sky-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {pageNum}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "data", "news.json"),
    "utf-8"
  );
  const all = JSON.parse(raw).filter((p) => p.category === "Stocks");
  all.sort((a, b) => new Date(b.date) - new Date(a.date));

  const perPage = 10;
  const page = Math.max(1, parseInt(query.page || "1", 10));
  const totalPages = Math.max(1, Math.ceil(all.length / perPage));

  const start = (page - 1) * perPage;
  const pagePosts = all.slice(start, start + perPage);

  return { props: { posts: pagePosts, totalPages, currentPage: page } };
}
