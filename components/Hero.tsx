"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Marquee } from "@/components/ui/Marquee";
import { profile, techStack, heroBadges, stats } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Mesh background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute top-10 -right-20 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute -bottom-20 left-10 h-[26rem] w-[26rem] rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 items-center">
          {/* LEFT: text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-display font-semibold tracking-[-0.03em] text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[5.25rem] lg:leading-[0.98]"
            >
              <span className="block text-gradient">Full-Stack Engineer</span>
              <span className="block text-gradient">&amp; AI Agent Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              I'm <span className="font-medium text-zinc-900 dark:text-zinc-100">{profile.name}</span> — a {profile.role.toLowerCase()} based in {profile.location}. I design and build robust backend systems with Laravel and Node.js, deliver production-ready frontends with React, Next.js and Vue, and build AI agents with Claude, LangChain/LangGraph and RAG pipelines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Link
                href="/#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-6 py-3.5 text-sm font-medium text-white dark:text-zinc-900 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all hover:scale-[1.02]"
              >
                Explore my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href={profile.resumeUrl}
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/50 backdrop-blur px-6 py-3.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              >
                <Download className="h-4 w-4" />
                Download CV
              </Link>
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-2 py-3.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                or say hi
                <Sparkles className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 grid grid-cols-3 max-w-md gap-6 border-t border-zinc-200 dark:border-zinc-800 pt-5"
            >
              <Stat label="Years" value={stats[0].value} />
              <Stat label="Projects" value={stats[1].value} />
              <Stat label="Companies" value={stats[2].value} />
            </motion.div>
          </div>

          {/* RIGHT: profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* rotated decorative card */}
              <div className="absolute -inset-3 rotate-[-3deg] rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-fuchsia-500/20 blur-md" />
              <div className="absolute -inset-1 rotate-[2deg] rounded-3xl bg-gradient-to-br from-indigo-500/30 to-violet-500/20" />

              {/* main card */}
              <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl p-6 sm:p-7 shadow-2xl shadow-indigo-500/10">
                <div className="flex items-start gap-4">
                  <Avatar src={profile.avatar} name={profile.name} size={84} priority />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-widest text-zinc-500">
                      Currently
                    </p>
                    <p className="mt-0.5 font-display font-semibold text-zinc-900 dark:text-zinc-100">
                      {profile.name}
                    </p>
                    <p className="mt-0.5 text-sm text-indigo-600 dark:text-indigo-400">
                      {profile.role}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin className="h-3 w-3" />
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 p-3 ring-1 ring-zinc-200 dark:ring-zinc-800">
                  <Mini label="Stack" value="Laravel | Node | Vue | React" />
                  <Mini label="Focus" value="Backend + AI" />
                  <Mini label="Mode" value="Remote" />
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                  <Link
                    href="#contact"
                    className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-zinc-900 dark:bg-white px-3.5 py-2 text-xs font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                  >
                    Hire me
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* floating tech badges */}
              {heroBadges.map((b) => (
                <motion.span
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.4, delay: b.delay + 0.5 },
                    scale: { duration: 0.4, delay: b.delay + 0.5 },
                    y: {
                      duration: 4 + b.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: b.delay,
                    },
                  }}
                  className="hidden sm:inline-flex absolute z-20 items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur px-3 py-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-lg shadow-indigo-500/10"
                  style={{ left: b.x, top: b.y }}
                >
                  <Star className="h-3 w-3 text-indigo-500" />
                  {b.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 sm:mt-24 border-y border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/30 backdrop-blur-sm">
        <Marquee items={techStack} />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-gradient">{value}</p>
      <p className="mt-0.5 text-xs uppercase tracking-widest text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-[10px] uppercase tracking-widest text-zinc-500">
        {label}
      </p>
      <p className="mt-1 text-xs font-medium text-zinc-800 dark:text-zinc-200">
        {value}
      </p>
    </div>
  );
}
