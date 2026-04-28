"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What teammates have said."
          description="Snippets from feedback I've received across teams and projects."
          align="center"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author + i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
            >
              <Quote className="h-7 w-7 text-indigo-500/60" />
              <blockquote className="mt-4 flex-1 text-sm sm:text-[15px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="font-display font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  {t.author}
                </p>
                <p className="text-xs text-zinc-500">
                  {t.role} · {t.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
