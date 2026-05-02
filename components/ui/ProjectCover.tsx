"use client";

import * as React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
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
  alt: string;
  icon: LucideIcon;
  category: string;
  theme?: Theme;
  className?: string;
};

/**
 * Project cover image with a generated fallback. Drop a 1600x900 image at the
 * `src` path to replace the placeholder — the component swaps in seamlessly.
 */
export function ProjectCover({
  src,
  alt,
  icon: Icon,
  category,
  theme = "indigo",
  className,
}: Props) {
  const [errored, setErrored] = React.useState(false);
  const t = themeMap[theme];
  const showImage = src && !errored;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-t-2xl",
        "aspect-[16/10]",
        className,
      )}
    >
      {showImage ? (
        <>
          <Image
            src={src!}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            onError={() => setErrored(true)}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
            <span className="rounded-full bg-white/10 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white ring-1 ring-white/20">
              {category}
            </span>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white ring-1 ring-white/20">
              <Icon className="h-4 w-4" />
            </div>
          </div>
        </>
      ) : (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            t.bg,
          )}
        >
          {/* dotted pattern */}
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
          {/* corner accent */}
          <div
            className={cn(
              "absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-50",
              `bg-${theme}-500/40`,
            )}
          />
          {/* mock window */}
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
              <span className={cn("inline-block mr-1.5 h-1.5 w-1.5 rounded-full align-middle", t.dot)} />
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
