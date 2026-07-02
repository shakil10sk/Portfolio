"use client";

import { ProjectCover } from "@/components/ui/ProjectCover";
import { projects } from "@/lib/data";

export function ProjectHeroCover({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  return (
    <ProjectCover
      src={project.image}
      images={project.images}
      alt={project.title}
      icon={project.icon}
      category={project.category}
      theme={project.theme}
      className="aspect-[16/9] rounded-none"
    />
  );
}
