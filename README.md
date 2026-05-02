# Md Shakil Hussain — Portfolio

A modern, fully responsive personal portfolio built with Next.js 15, Tailwind CSS, Framer Motion and Lucide icons. Designed as a premium, SaaS-style site for a mid-level frontend / full-stack engineer.

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS v3 with custom design tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theme:** `next-themes` (dark mode default, light mode toggle)
- **Type safety:** TypeScript 5

## Sections

- Hero with animated headline, floating cards and tech-stack marquee
- About — pillars, stats, education
- Skills — bento grid of categorised tooling
- Projects — filterable grid (Government, Fintech, E-commerce, Internal Tool)
- Experience — alternating timeline
- Testimonials
- Contact — form (mailto) + direct channels
- Sticky glass navbar with active-section indicator

## Getting started

```bash
# 1. Install
npm install
# or
pnpm install

# 2. Run dev server
npm run dev

# 3. Production build
npm run build && npm start
```

Open <http://localhost:3000>.

## Project structure

```
.
├── app/
│   ├── globals.css         # Tailwind + design tokens
│   ├── layout.tsx          # Root layout, fonts, metadata, theme
│   └── page.tsx            # Section composition
├── components/
│   ├── ui/
│   │   ├── Marquee.tsx
│   │   └── SectionHeading.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Testimonials.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── lib/
│   ├── data.ts             # All content (single source of truth)
│   └── utils.ts            # cn() helper
├── public/cv/              # CV PDF served at /cv/...
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## Customising

All content lives in [lib/data.ts](./lib/data.ts) — profile, skills, projects, experience, testimonials, navigation. Change the data, the UI updates everywhere.

The design system tokens (colours, surfaces, brand gradients) are defined in [tailwind.config.ts](./tailwind.config.ts) and [app/globals.css](./app/globals.css).

## Adding images

Image slots live in [`public/images/`](./public/images/README.md). Out of the box every image is a polished generated placeholder — nothing is broken until you opt-in.

| Slot | Path | Recommended size |
| --- | --- | --- |
| Avatar (Hero) | `public/images/avatar.jpg` | 400 × 400 |
| About photo | `public/images/about.jpg` | 800 × 1000 |
| Project covers | `public/images/projects/<slug>.jpg` | 1600 × 900 |

After dropping a file, set the path in `lib/data.ts`:

```ts
export const profile = {
  avatar: "/images/avatar.jpg",
  aboutImage: "/images/about.jpg",
  // …
};

// On a project entry:
image: "/images/projects/rajuk.jpg",
```

If a path is wrong, the component falls back to the placeholder automatically — no broken images.

## Accessibility & performance

- Skip-to-content link
- `prefers-reduced-motion` disables animations
- Semantic landmarks (`header`, `main`, `footer`, `section`)
- Optimised Google fonts via `next/font`
- Smooth-scroll anchor navigation
- SEO metadata + OpenGraph in root layout
