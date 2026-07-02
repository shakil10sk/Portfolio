"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { blogPosts } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostView({ slug }: { slug: string }) {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const index = sorted.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = sorted[index];
  const prev = sorted[(index - 1 + sorted.length) % sorted.length];
  const next = sorted[(index + 1) % sorted.length];
  const Icon = post.icon;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Md Shakil Hussain" },
  };

  return (
    <article className="relative py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_65%)]" />
      </div>

      <div className="container max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all posts
        </Link>

        <div className="mt-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 px-3 py-1 text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
            <Icon className="h-3.5 w-3.5 text-indigo-500" />
            {post.tags[0]}
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-5 flex items-center gap-4 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-indigo-500/5">
          <ProjectCover
            alt={post.title}
            icon={post.icon}
            category={post.tags[0] ?? "Blog"}
            theme={post.theme}
            className="aspect-[21/9] rounded-t-none"
          />
        </div>

        <div className="mt-14 space-y-10">
          {post.content.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {section.heading}
                </h2>
              )}
              <div className={section.heading ? "mt-3 space-y-4" : "space-y-4"}>
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-4 space-y-2.5">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-2 py-0.5 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <Link
            href={`/blog/${prev.slug}`}
            className="group flex flex-col gap-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              <ArrowLeft className="h-3 w-3" />
              Previous
            </span>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/blog/${next.slug}`}
            className="group flex flex-col items-end gap-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 text-right hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              Next
              <ArrowRight className="h-3 w-3" />
            </span>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {next.title}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
