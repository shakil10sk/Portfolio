"use client";

import { motion } from "framer-motion";
import { Code, Server, Workflow, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats, education } from "@/lib/data";

const pillars = [
  {
    icon: Code,
    title: "Frontend craft",
    body: "Component architecture, accessibility and performance — with React, Next.js and Vue.",
  },
  {
    icon: Server,
    title: "Real backend chops",
    body: "Comfortable across Laravel, NestJS and FastAPI — design APIs you can actually trust.",
  },
  {
    icon: Workflow,
    title: "Ship-it mindset",
    body: "Docker, CI/CD and AWS — I take features all the way from ticket to production.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About"
              title="Engineer who treats the UI like a product."
              description="I started in PHP and shipped enterprise platforms for governments and fintech. Today I focus on frontend — building accessible, animated, performance-tuned interfaces — without losing the systems thinking I picked up on the backend."
            />

            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl surface-muted p-5 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
                >
                  <dt className="text-xs uppercase tracking-widest text-zinc-500">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-semibold text-gradient">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-6 sm:p-7 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/20">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/40 dark:to-zinc-950 p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/20">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Education
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {education.institution} · {education.location}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-zinc-700 dark:text-zinc-300">
                      {education.period}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 font-medium">
                      CGPA {education.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
