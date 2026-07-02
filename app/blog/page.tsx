import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building production AI agents, scaling Laravel & Vue platforms, and directing Claude Code across full-stack builds.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Blog",
    description:
      "Notes on building production AI agents, scaling Laravel & Vue platforms, and directing Claude Code across full-stack builds.",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_65%)]" />
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="Writing"
          title="Notes from building AI agents and ERP platforms."
          description="Short write-ups on what actually happens taking AI agents and Laravel/Vue platforms from idea to production."
        />

        <BlogList />
      </div>
    </div>
  );
}
