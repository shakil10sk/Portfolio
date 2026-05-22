"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Workflow,
  Award,
  ImageIcon,
  Quote,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats, education, profile } from "@/lib/data";

const pillars = [
  {
    icon: Server,
    title: "Backend engineering",
    body: "API design, scalable services and database performance — Laravel, NestJS and FastAPI.",
  },
  {
    icon: Code,
    title: "Frontend craft",
    body: "Component architecture, accessibility and performance — React, Next.js and Vue.",
  },
  {
    icon: Workflow,
    title: "Ship-it mindset",
    body: "Docker, CI/CD and AWS — I take features all the way from ticket to production.",
  },
];

export function About() {
  const [imageOk, setImageOk] = React.useState(true);
  const showImage = !!profile.aboutImage && imageOk;

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Image column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Decorative frames */}
              <div className="absolute -inset-3 rotate-[-2deg] rounded-3xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 blur-md" />
              <div className="absolute -inset-1 rotate-[1.5deg] rounded-3xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/10" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                {showImage ? (
                  <Image
                    src={profile.aboutImage!}
                    alt={`${profile.name} — workspace`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    onError={() => setImageOk(false)}
                    className="object-cover"
                  />
                ) : (
                  <ImageFallback />
                )}

                {/* Caption ribbon */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/80 dark:bg-zinc-950/70 backdrop-blur px-3 py-1.5 ring-1 ring-zinc-200 dark:ring-zinc-800">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    Working from Dhaka
                  </span>
                </div>

                {/* Quote chip */}
                <div className="absolute left-4 right-4 bottom-4 rounded-2xl bg-white/85 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 p-4">
                  <Quote className="h-4 w-4 text-indigo-500" />
                  <p className="mt-2 text-[13px] leading-snug text-zinc-700 dark:text-zinc-300">
                    "Boring software shipped is better than brilliant software that never reaches users. I aim for both."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About"
              title="An engineer who treats systems like products."
              description="Full-Stack Software Engineer with 4+ years building scalable enterprise systems, government applications, and high-traffic platforms. I work across backend services (Laravel, Node.js), frontend interfaces (Vue, React) and DevOps practices to ship reliable production software."
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 grid gap-3"
            >
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group relative flex items-start gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-5 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/20 shrink-0">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats strip */}
            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white dark:bg-zinc-950 p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors"
                >
                  <dt className="text-[10px] uppercase tracking-widest text-zinc-500">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-gradient">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 flex items-start gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/40 dark:to-zinc-950 p-5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/20 shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Education
                </p>
                <h3 className="mt-1 font-display text-base font-semibold">
                  {education.degree}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {education.institution} · {education.location}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5 text-xs shrink-0">
                <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-zinc-700 dark:text-zinc-300">
                  {education.period}
                </span>
                <span className="rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 font-medium">
                  CGPA {education.cgpa}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageFallback() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-fuchsia-500/15">
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full text-zinc-900/10 dark:text-white/10"
      >
        <defs>
          <pattern id="about-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-dots)" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 dark:bg-zinc-950/60 backdrop-blur ring-1 ring-zinc-200/80 dark:ring-zinc-800 text-indigo-600 dark:text-indigo-400">
          <ImageIcon className="h-6 w-6" />
        </div>
        <p className="mt-4 max-w-[16rem] text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Drop a portrait at <code className="font-mono text-xs text-indigo-600 dark:text-indigo-400">/public/images/about.jpg</code>
        </p>
        <p className="mt-1.5 text-xs text-zinc-500">Recommended: 800×1000, JPG or PNG</p>
      </div>
    </div>
  );
}
