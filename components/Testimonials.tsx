"use client";

import * as React from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

const PER_PAGE = 3;
const AUTO_SLIDE_MS = 5000;

const slideVariants: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction >= 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction >= 0 ? -60 : 60 }),
};

export function Testimonials() {
  const total = testimonials.length;
  const visibleCount = Math.min(PER_PAGE, total);
  const pageCount = total > PER_PAGE ? total : 1;

  const [[page, direction], setPage] = React.useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = React.useState(false);

  const current = Array.from(
    { length: visibleCount },
    (_, i) => testimonials[(page + i) % total],
  );

  const goToDelta = React.useCallback(
    (delta: number) => {
      setPage(([prev]) => [
        ((prev + delta) % pageCount + pageCount) % pageCount,
        delta >= 0 ? 1 : -1,
      ]);
    },
    [pageCount],
  );

  const goToPage = (i: number) => {
    setPage(([prev]) => [i, i > prev ? 1 : -1]);
  };

  React.useEffect(() => {
    if (pageCount <= 1 || isPaused) return;
    const id = setInterval(() => goToDelta(1), AUTO_SLIDE_MS);
    return () => clearInterval(id);
  }, [pageCount, isPaused, goToDelta]);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-fuchsia-500/15 blur-3xl opacity-60" />
      </div>

      <div className="container">
        <div
          className="glass relative rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-indigo-500/10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="What teammates have said."
            description="Snippets from feedback I've received across teams and projects."
            align="center"
          />

          <div className="mt-12 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-wrap justify-center gap-5"
              >
                {current.map((t) => (
                  <figure
                    key={t.author}
                    className="flex w-full flex-col items-center rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/50 p-6 text-center backdrop-blur-sm sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.834rem)]"
                  >
                    <Avatar src={t.photo} name={t.author} size={80} priority />

                    <figcaption className="mt-4">
                      {t.linkedin ? (
                        <a
                          href={t.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display font-semibold text-sm text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {t.author}
                        </a>
                      ) : (
                        <p className="font-display font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                          {t.author}
                        </p>
                      )}
                      <p className="mt-0.5 text-xs text-zinc-500">
                        {t.role} · {t.company}
                      </p>
                    </figcaption>

                    <Quote className="mt-4 h-5 w-5 text-indigo-500/50" />
                    <blockquote className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      "{t.quote}"
                    </blockquote>
                  </figure>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {pageCount > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => goToDelta(-1)}
                aria-label="Previous testimonials"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === page
                        ? "w-5 bg-indigo-500"
                        : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600",
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goToDelta(1)}
                aria-label="Next testimonials"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
