"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Filter } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Government",
  "Fintech",
  "E-commerce",
  "ERP",
  "Internal Tool",
] as const;
type Category = (typeof categories)[number];

export function Projects() {
  const [active, setActive] = React.useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that shipped to real users."
            description="A selection of products I've built or contributed to — from government platforms serving millions to fintech apps and internal tools."
          />

          <div className="inline-flex items-center gap-1 surface-muted rounded-full p-1.5 self-start lg:self-auto overflow-x-auto max-w-full no-scrollbar">
            <Filter className="h-3.5 w-3.5 text-zinc-500 ml-2 mr-1 shrink-0" />
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "relative shrink-0 px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors",
                    isActive
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-white dark:bg-zinc-800 shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700"
                    />
                  )}
                  <span className="relative">{c}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/5"
    >
      <ProjectCover
        src={project.image}
        images={project.images}
        alt={project.title}
        icon={project.icon}
        category={project.category}
        theme={project.theme}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono text-zinc-400 mt-1.5 shrink-0">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-5 space-y-1.5">
          {project.highlights.slice(0, 3).map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-2 py-0.5 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center gap-3 text-xs">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Live <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-500"
            >
              <Github className="h-3 w-3" /> Code
            </a>
          )}
          <span className="ml-auto text-zinc-500">
            {project.stack.length} tech
          </span>
        </div>
      </div>
    </motion.article>
  );
}
