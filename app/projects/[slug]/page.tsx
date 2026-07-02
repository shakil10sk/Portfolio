import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Target, Lightbulb } from "lucide-react";
import { ProjectHeroCover } from "@/components/ProjectHeroCover";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const Icon = project.icon;

  return (
    <article className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_65%)]" />
      </div>

      <div className="container max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all projects
        </Link>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 px-3 py-1 text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
              <Icon className="h-3.5 w-3.5 text-indigo-500" />
              {project.category}
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Visit live site
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                View code
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-indigo-500/5">
          <ProjectHeroCover slug={project.slug} />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
                  <Target className="h-4 w-4" />
                </span>
                <h2 className="font-display text-lg font-semibold">The problem</h2>
              </div>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Lightbulb className="h-4 w-4" />
                </span>
                <h2 className="font-display text-lg font-semibold">The solution</h2>
              </div>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Key highlights
              </h2>
              <ul className="mt-3 space-y-2.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 p-6 space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-zinc-500">
                  Category
                </p>
                <p className="mt-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {project.category}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-zinc-500">
                  Tech stack
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-2 py-0.5 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <Link
            href={`/projects/${prev.slug}`}
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
            href={`/projects/${next.slug}`}
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
