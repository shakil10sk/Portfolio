"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 surface-muted">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="Toolkit"
          title="The stack I reach for daily."
          description="From component-level state to deployment pipelines — here's what I use to build, ship and maintain modern web products."
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
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300"
            >
              <div
                className={`absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${group.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 ring-1 ring-zinc-200 dark:ring-zinc-800 group-hover:ring-indigo-500/40 transition-all">
                  <group.icon className="h-5 w-5" />
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
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
    </section>
  );
}
