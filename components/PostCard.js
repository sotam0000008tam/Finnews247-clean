import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      {/* Thumbnail đại diện */}
      {post.image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-2">{post.date}</div>
        <h3 className="text-lg font-semibold mb-2">
          <Link href={`/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        {/* Đoạn trích ngắn */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {post.excerpt}
        </p>
        {/* Link tới trang chi tiết */}
        <Link
          href={`/${post.slug}`}
          className="text-sky-600 hover:underline text-sm"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
