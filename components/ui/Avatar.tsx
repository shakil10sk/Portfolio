"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  name: string;
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Smart avatar: renders the image when provided, falls back to a styled
 * gradient with initials when the image is missing or fails to load.
 */
export function Avatar({ src, name, size = 96, className, priority }: Props) {
  const [errored, setErrored] = React.useState(false);
  const initials = React.useMemo(
    () =>
      name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase() ?? "")
        .join(""),
    [name],
  );

  const showImage = src && !errored;

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full",
        "ring-2 ring-white/80 dark:ring-zinc-800",
        "shadow-xl shadow-indigo-500/10",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {showImage ? (
        <Image
          src={src!}
          alt={name}
          width={size}
          height={size}
          priority={priority}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          aria-label={name}
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-display font-semibold tracking-wide"
          style={{ fontSize: size * 0.36 }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
