"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { blogPosts } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogList() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <article
          key={post.slug}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/5"
        >
          <Link
            href={`/blog/${post.slug}`}
            className="flex flex-1 flex-col"
            aria-label={`Read: ${post.title}`}
          >
            <ProjectCover
              alt={post.title}
              icon={post.icon}
              category={post.tags[0] ?? "Blog"}
              theme={post.theme}
            />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-[11px] text-zinc-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {post.readingTime}
                </span>
              </div>

              <h2 className="mt-3 font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {post.excerpt}
              </p>

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

              <div className="mt-auto pt-6 flex items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline">
                  Read post
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="ml-auto text-zinc-500">
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
