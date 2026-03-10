import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPost } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `https://getgroomgrid.com/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "GroomGrid",
      publishedTime: post.date,
      authors: ["GroomGrid"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function ArticleSchema({ post }: { post: ReturnType<typeof getPost> }) {
  if (!post) return null;
  const url = `https://getgroomgrid.com/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "GroomGrid",
      url: "https://getgroomgrid.com",
    },
    publisher: {
      "@type": "Organization",
      name: "GroomGrid",
      url: "https://getgroomgrid.com",
      logo: {
        "@type": "ImageObject",
        url: "https://getgroomgrid.com/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ post }: { post: ReturnType<typeof getPost> }) {
  if (!post) return null;
  const url = `https://getgroomgrid.com/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "GroomGrid",
        item: "https://getgroomgrid.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://getgroomgrid.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSchema({ post }: { post: ReturnType<typeof getPost> }) {
  if (!post?.faqs?.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  "Software Reviews": "bg-teal-100 text-teal-800",
  Business: "bg-amber-100 text-amber-800",
  Pricing: "bg-blue-100 text-blue-800",
  "Grooming Guides": "bg-purple-100 text-purple-800",
  "Breed Guides": "bg-rose-100 text-rose-800",
};

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />
      <FaqSchema post={post} />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-teal-600">
            GroomGrid
          </Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-teal-600">
            Blog
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{post.category}</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-700"
              }`}
            >
              {post.category}
            </span>
            <time className="text-sm text-gray-400" dateTime={post.date}>
              {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.description}
          </p>
        </header>

        <article className="prose prose-gray prose-lg max-w-none prose-headings:font-bold prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded">
          <MDXRemote source={post.content} />
        </article>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-teal-50 rounded-xl p-6 text-center border border-teal-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Run a smarter grooming business with GroomGrid
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              AI-powered scheduling, breed detection, automated reminders, and
              payment processing — built for professional groomers.
            </p>
            <Link
              href="/#waitlist"
              className="inline-block bg-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors"
            >
              Join the Waitlist →
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/blog" className="text-teal-600 text-sm hover:underline">
              ← Back to all articles
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
