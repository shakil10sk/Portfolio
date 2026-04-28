import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div className="flex w-max animate-marquee gap-12 py-4">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm font-mono text-zinc-500 dark:text-zinc-500 whitespace-nowrap inline-flex items-center gap-3"
          >
            <span className="h-1 w-1 rounded-full bg-indigo-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
