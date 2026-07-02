import { cn } from "@/lib/utils";
import type { TechItem } from "@/lib/data";

type Props = {
  items: TechItem[];
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
      <div className="flex w-max animate-marquee gap-8 py-4">
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex w-16 shrink-0 flex-col items-center gap-2"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-zinc-200/80 dark:ring-zinc-800">
              {item.slug ? (
                <img
                  src={`https://cdn.simpleicons.org/${item.slug}`}
                  alt={item.name}
                  className="h-5 w-5"
                  loading="lazy"
                  decoding="async"
                />
              ) : item.icon ? (
                <item.icon className="h-5 w-5 text-indigo-600" />
              ) : null}
            </span>
            <span className="text-center text-[10px] font-mono whitespace-nowrap text-zinc-500 dark:text-zinc-500">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
