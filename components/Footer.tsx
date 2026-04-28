import Link from "next/link";
import { profile, socials, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 font-display font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                S
              </span>
              <span>
                {profile.shortName}
                <span className="text-indigo-500">.dev</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
              {profile.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Sitemap</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Connect</p>
            <ul className="space-y-2 text-sm">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-900">
          <p className="text-xs text-zinc-500">
            © {year} {profile.name}. Built with Next.js, Tailwind &amp; Framer Motion.
          </p>
          <p className="text-xs text-zinc-500 inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse-slow" />
            {profile.availability}
          </p>
        </div>
      </div>
    </footer>
  );
}
