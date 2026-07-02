"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 surface-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Five years building for real users."
          description="Government platforms, fintech products, and high-traffic web apps — here's where I've worked and what I've shipped."
          align="center"
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent sm:-translate-x-1/2" />

          <ul className="space-y-12">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <li key={exp.company} className="relative">
                  {/* Dot */}
                  <span className="absolute left-4 sm:left-1/2 top-6 sm:-translate-x-1/2 z-10">
                    <span className="block h-3 w-3 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 ring-4 ring-zinc-50 dark:ring-zinc-900/40 shadow-md shadow-indigo-500/30" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className={`pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 ${
                      left ? "" : "sm:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Card */}
                    <div className={left ? "sm:text-right sm:pr-2" : "sm:pl-2"}>
                      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors">
                        <div
                          className={`flex items-center gap-2 text-xs text-zinc-500 ${
                            left ? "sm:justify-end" : ""
                          }`}
                        >
                          <CalendarDays className="h-3.5 w-3.5" />
                          {exp.period}
                        </div>
                        <h3 className="mt-2 font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                          {exp.company}
                        </p>
                        <p
                          className={`mt-1 inline-flex items-center gap-1.5 text-xs text-zinc-500 ${
                            left ? "sm:justify-end" : ""
                          }`}
                        >
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </p>
                        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {exp.summary}
                        </p>
                        <div
                          className={`mt-4 flex flex-wrap gap-1.5 ${
                            left ? "sm:justify-end" : ""
                          }`}
                        >
                          {exp.stack.map((s) => (
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

                    {/* Highlights */}
                    <div className={left ? "mt-4 sm:mt-0 sm:pl-2" : "mt-4 sm:mt-0 sm:pr-2 sm:text-right"}>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-3 sm:hidden">
                        <Briefcase className="h-3.5 w-3.5" /> Highlights
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className={`flex gap-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed ${
                              left ? "" : "sm:flex-row-reverse sm:text-right"
                            }`}
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
