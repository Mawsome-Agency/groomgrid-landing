import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Pet Grooming Business Tips & Guides",
  description:
    "Expert guides for pet groomers: business management, software reviews, pricing strategies, breed grooming guides, and more.",
  alternates: {
    canonical: "https://getgroomgrid.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://getgroomgrid.com/blog",
    title: "GroomGrid Blog — Pet Grooming Business Tips & Guides",
    description:
      "Expert guides for pet groomers: business management, software reviews, pricing strategies, breed grooming guides, and more.",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Software Reviews": "bg-teal-100 text-teal-800",
  Business: "bg-amber-100 text-amber-800",
  Pricing: "bg-blue-100 text-blue-800",
  "Grooming Guides": "bg-purple-100 text-purple-800",
  "Breed Guides": "bg-rose-100 text-rose-800",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-12">
        <Link href="/" className="text-teal-600 text-sm hover:underline mb-4 inline-block">
          ← Back to GroomGrid
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">
          Pet Grooming Business Resources
        </h1>
        <p className="text-lg text-gray-600">
          Guides, software reviews, and strategies to help you run a more
          profitable grooming business.
        </p>
      </header>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-700"
                }`}
              >
                {post.category}
              </span>
              <time className="text-xs text-gray-400" dateTime={post.date}>
                {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-teal-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-teal-600 text-sm font-medium hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 p-6 bg-teal-50 rounded-xl border border-teal-100 text-center">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Ready to modernize your grooming business?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          GroomGrid is the AI-powered platform built for professional groomers.
        </p>
        <Link
          href="/#waitlist"
          className="inline-block bg-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors"
        >
          Join the Waitlist
        </Link>
      </div>
    </main>
  );
}
