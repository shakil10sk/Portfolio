"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Sparkles,
  Mail,
  MapPin,
} from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { profile, flatSkills } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 noise"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* Gradient blob */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 -z-0 pointer-events-none">
        <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-fuchsia-500/20 blur-3xl opacity-60" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight"
          >
            <span className="text-gradient">Hi, I'm </span>
            <span className="text-gradient-brand">{profile.shortName}</span>
            <span className="text-gradient">.</span>
            <br />
            <span className="text-gradient">I build</span>{" "}
            <span className="relative inline-block">
              <span className="text-gradient-brand">interfaces</span>
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full h-3 text-indigo-500"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <span className="text-gradient">that ship.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-7 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-9 flex flex-col sm:flex-row items-center gap-3"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg shadow-indigo-500/10 transition-all hover:scale-[1.02]"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href={profile.resumeUrl}
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/50 backdrop-blur px-6 py-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </motion.div>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500 dark:text-zinc-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-indigo-500 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-indigo-500 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              shakil10sk
            </a>
          </motion.div>
        </motion.div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          <FloatingCard
            label="Experience"
            value="4+ yrs"
            sub="Full-stack engineering"
          />
          <FloatingCard
            label="Specialty"
            value="Frontend"
            sub="React · Next · Vue"
            highlight
          />
          <FloatingCard
            label="Currently"
            value="Sheba Platform"
            sub="Software Engineer"
          />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-16 sm:mt-20 border-y border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/30 backdrop-blur-sm">
        <Marquee items={flatSkills} />
      </div>

      {/* Scroll cue */}
      <Link
        href="#about"
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-3 items-center gap-2 text-xs text-zinc-400 hover:text-indigo-500 transition-colors"
      >
        <span className="font-mono">scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </Link>
    </section>
  );
}

function FloatingCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${
        highlight
          ? "border-indigo-300/50 dark:border-indigo-700/50 bg-gradient-to-br from-indigo-500/10 to-violet-500/5"
          : "border-zinc-200 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40"
      } backdrop-blur-md p-5 hover:-translate-y-0.5 transition-transform`}
    >
      {highlight && (
        <Sparkles className="absolute right-4 top-4 h-4 w-4 text-indigo-500/70" />
      )}
      <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
      <p className="mt-3 font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {value}
      </p>
      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{sub}</p>
    </div>
  );
}
