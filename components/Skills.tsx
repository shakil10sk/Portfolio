"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { skillGroups, techStack } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Section bg */}
      <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900/40" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Toolkit"
          title="The stack I reach for daily."
          description="From component-level state to deployment pipelines — the tooling I use to build, ship and maintain modern web products."
          align="center"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6",
                "hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300",
              )}
            >
              <div
                className={cn(
                  "absolute -right-12 -top-12 h-44 w-44 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  "bg-gradient-to-br",
                  group.accent,
                )}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 ring-1 ring-zinc-200 dark:ring-zinc-800 group-hover:ring-indigo-500/40 transition-all">
                    <group.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {group.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 px-2 py-0.5 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech ticker */}
        <div className="mt-14 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              ~/ daily-stack
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400/70" />
              <span className="h-2 w-2 rounded-full bg-amber-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
            </div>
          </div>
          <Marquee items={techStack} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
    </section>
  );
}
