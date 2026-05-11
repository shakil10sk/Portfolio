"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme =
  | "indigo"
  | "sky"
  | "emerald"
  | "fuchsia"
  | "amber"
  | "rose"
  | "violet"
  | "lime";

const themeMap: Record<Theme, { bg: string; ring: string; dot: string }> = {
  indigo: {
    bg: "from-indigo-500/30 via-indigo-500/10 to-violet-500/20",
    ring: "ring-indigo-500/30",
    dot: "bg-indigo-500",
  },
  sky: {
    bg: "from-sky-500/30 via-sky-500/10 to-blue-500/20",
    ring: "ring-sky-500/30",
    dot: "bg-sky-500",
  },
  emerald: {
    bg: "from-emerald-500/30 via-emerald-500/10 to-teal-500/20",
    ring: "ring-emerald-500/30",
    dot: "bg-emerald-500",
  },
  fuchsia: {
    bg: "from-fuchsia-500/30 via-fuchsia-500/10 to-pink-500/20",
    ring: "ring-fuchsia-500/30",
    dot: "bg-fuchsia-500",
  },
  amber: {
    bg: "from-amber-500/30 via-amber-500/10 to-orange-500/20",
    ring: "ring-amber-500/30",
    dot: "bg-amber-500",
  },
  rose: {
    bg: "from-rose-500/30 via-rose-500/10 to-red-500/20",
    ring: "ring-rose-500/30",
    dot: "bg-rose-500",
  },
  violet: {
    bg: "from-violet-500/30 via-violet-500/10 to-purple-500/20",
    ring: "ring-violet-500/30",
    dot: "bg-violet-500",
  },
  lime: {
    bg: "from-lime-500/30 via-lime-500/10 to-green-500/20",
    ring: "ring-lime-500/30",
    dot: "bg-lime-500",
  },
};

type Props = {
  src?: string;
  images?: string[];
  alt: string;
  icon: LucideIcon;
  category: string;
  theme?: Theme;
  className?: string;
};

/**
 * Project cover with optional multi-image slider.
 *
 * Pass `images={[...]}` (2+ entries) to enable the slider — prev/next arrows,
 * dot indicators and an image counter appear automatically. Pass `src` for a
 * single image, or neither to render the themed generated fallback.
 */
export function ProjectCover({
  src,
  images,
  alt,
  icon: Icon,
  category,
  theme = "indigo",
  className,
}: Props) {
  const allImages = React.useMemo(() => {
    if (images && images.length > 0) return images;
    if (src) return [src];
    return [] as string[];
  }, [images, src]);

  const [index, setIndex] = React.useState(0);
  const [erroredAt, setErroredAt] = React.useState<Set<number>>(new Set());
  const [direction, setDirection] = React.useState(1);
  const t = themeMap[theme];

  React.useEffect(() => {
    if (index >= allImages.length) setIndex(0);
  }, [allImages.length, index]);

  const hasImages = allImages.length > 0 && erroredAt.size < allImages.length;
  const isSlider = allImages.length > 1;

  const goTo = (next: number, dir: number, e?: React.SyntheticEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDirection(dir);
    setIndex(((next % allImages.length) + allImages.length) % allImages.length);
  };
  const goPrev = (e?: React.SyntheticEvent) => goTo(index - 1, -1, e);
  const goNext = (e?: React.SyntheticEvent) => goTo(index + 1, 1, e);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-t-2xl",
        "aspect-[16/10]",
        className,
      )}
      onKeyDown={
        isSlider
          ? (e) => {
              if (e.key === "ArrowLeft") goPrev(e);
              else if (e.key === "ArrowRight") goNext(e);
            }
          : undefined
      }
    >
      {hasImages ? (
        <>
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={allImages[index]}
                alt={isSlider ? `${alt} — image ${index + 1}` : alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                onError={() =>
                  setErroredAt((prev) => {
                    const next = new Set(prev);
                    next.add(index);
                    return next;
                  })
                }
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/25 to-transparent" />

          {/* Top row: dot indicators (left) + counter (right) — only when slider */}
          {isSlider && (
            <div className="absolute inset-x-3 top-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5 rounded-full bg-zinc-950/40 backdrop-blur px-2 py-1.5 ring-1 ring-white/15">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => goTo(i, i > index ? 1 : -1, e)}
                    aria-label={`Go to image ${i + 1}`}
                    aria-current={i === index}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === index
                        ? "w-5 bg-white"
                        : "w-1.5 bg-white/45 hover:bg-white/70",
                    )}
                  />
                ))}
              </div>
              <span className="rounded-full bg-zinc-950/40 backdrop-blur px-2 py-1 text-[10px] font-mono text-white/90 ring-1 ring-white/15 tabular-nums">
                {index + 1} / {allImages.length}
              </span>
            </div>
          )}

          {/* Bottom row: category + project icon */}
          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between">
            <span className="rounded-full bg-white/10 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white ring-1 ring-white/20">
              {category}
            </span>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white ring-1 ring-white/20">
              <Icon className="h-4 w-4" />
            </div>
          </div>

          {/* Arrow controls — show on hover/focus for slider only */}
          {isSlider && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-md text-white ring-1 ring-white/20 opacity-0 group-hover:opacity-100 hover:bg-white/25 transition-all focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-md text-white ring-1 ring-white/20 opacity-0 group-hover:opacity-100 hover:bg-white/25 transition-all focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </>
      ) : (
        <div className={cn("absolute inset-0 bg-gradient-to-br", t.bg)}>
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full text-zinc-900/10 dark:text-white/10"
          >
            <defs>
              <pattern
                id={`dots-${theme}`}
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#dots-${theme})`} />
          </svg>
          <div
            className={cn(
              "absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-50",
              `bg-${theme}-500/40`,
            )}
          />
          <div className="absolute inset-x-6 top-6 rounded-lg bg-white/70 dark:bg-zinc-950/60 backdrop-blur ring-1 ring-zinc-200/60 dark:ring-zinc-800 shadow-sm">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              <span className="ml-3 h-1.5 flex-1 rounded-full bg-zinc-200/80 dark:bg-zinc-800" />
            </div>
            <div className="px-3 pb-3 space-y-1.5">
              <div className="h-1.5 w-3/4 rounded-full bg-zinc-200/80 dark:bg-zinc-800" />
              <div className="h-1.5 w-1/2 rounded-full bg-zinc-200/60 dark:bg-zinc-800/70" />
              <div className="h-1.5 w-2/3 rounded-full bg-zinc-200/40 dark:bg-zinc-800/50" />
            </div>
          </div>
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
            <span
              className={cn(
                "rounded-full bg-white/80 dark:bg-zinc-950/70 backdrop-blur px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-700 dark:text-zinc-300 ring-1",
                t.ring,
              )}
            >
              <span
                className={cn(
                  "inline-block mr-1.5 h-1.5 w-1.5 rounded-full align-middle",
                  t.dot,
                )}
              />
              {category}
            </span>
            <div
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 dark:bg-zinc-950/70 backdrop-blur text-zinc-800 dark:text-zinc-200 ring-1",
                t.ring,
              )}
            >
              <Icon className="h-4 w-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
