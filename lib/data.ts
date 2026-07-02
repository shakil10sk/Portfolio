import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Layers,
  Database,
  Cloud,
  Wrench,
  CreditCard,
  Github,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  ShoppingCart,
  Truck,
  Trophy,
  Building2,
  Landmark,
  Stethoscope,
  Bot,
  Boxes,
  MessageCircle,
  Component,
  Workflow,
  SearchCode,
  Facebook,
} from "lucide-react";

export const profile = {
  name: "Md Shakil Hussain",
  shortName: "ShakilHussain",
  role: "Full-Stack Engineer & AI Agent Developer",
  tagline: "Backend-focused full-stack engineer building production AI agents, ERP platforms and secure systems.",
  bio: "Full-Stack Software Engineer with 5+ years building scalable enterprise systems, government platforms and AI-native products. Deep backend experience with Laravel and Node.js, production-ready frontends with React, Next.js and Vue, and hands-on work building LLM-powered AI agents with Claude, LangChain/LangGraph and RAG pipelines — backed by strong DevOps and API design practices.",
  location: "Dhaka, Bangladesh",
  email: "shakilh039@gmail.com",
  phone: "+8801636-639790",
  github: "https://github.com/shakil10sk",
  linkedin: "https://www.linkedin.com/in/shakil-hussain-h039/",
  facebook: "https://www.facebook.com/profile.php?id=100064089729699",
  whatsapp: "https://wa.me/8801636639790",
  resumeUrl: "/cv/One_page_cv_shakil-compressed.pdf",
  availability: "Open to remote AI, backend & full-stack roles",
  // ── IMAGE SLOTS ────────────────────────────────────────────────────────
  // Set these paths once you've dropped files into /public/images/.
  // While `undefined`, the UI shows beautiful generated placeholders.
  //
  //   avatar:      "/images/shakil.jpeg"   → 400×400 portrait
  //   aboutImage:  "/images/shakil.jpeg"    → 800×1000 editorial photo
  // avatar: "/images/my.png" as string | undefined,
  // aboutImage: "/images/my.png" as string | undefined,
  avatar: "/images/shakil.jpeg" as string | undefined,
  aboutImage: "/images/shakil.jpeg" as string | undefined,
};

export const heroBadges = [
  { label: "Laravel", x: "-6%", y: "8%", delay: 0 },
  { label: "Node.js", x: "84%", y: "14%", delay: 0.3 },
  { label: "React", x: "-8%", y: "62%", delay: 0.6 },
  { label: "Vue.js", x: "84%", y: "70%", delay: 0.9 },
];

export const stats = [
  { label: "Years of experience", value: "5+" },
  { label: "Production projects", value: "20+" },
  { label: "Companies", value: "4" },
  { label: "Users served", value: "Millions" },
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
  accent: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Agentic Engineering",
    icon: Bot,
    description:
      "Building production AI agents and LLM-powered workflows — from retrieval pipelines to autonomous, multi-step agents.",
    items: [
      "Claude API",
      "Claude Code",
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector DBs",
      "AI Agents",
      "n8n",
      "Prompt Engineering",
      "LLM Evaluation",
    ],
    accent: "from-teal-500/20 to-cyan-500/10",
  },
  {
    title: "Backend & APIs",
    icon: Database,
    description:
      "REST and microservice APIs with strong attention to security and query performance.",
    items: ["Laravel", "Node.js", "NestJS", "FastAPI", "REST", "GraphQL"],
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Databases",
    icon: Database,
    description:
      "Relational modelling, indexing and N+1 hunting across SQL and NoSQL stores.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "YugabyteDB"],
    accent: "from-sky-500/20 to-blue-500/10",
  },
  {
    title: "DevOps & Tooling",
    icon: Cloud,
    description:
      "Docker-first workflows, CI/CD pipelines and AWS deployments for shippable apps.",
    items: ["Docker", "Kubernetes", "AWS", "Nginx", "CI/CD", "Terraform", "Git"],
    accent: "from-rose-500/20 to-red-500/10",
  },
  {
    title: "Integrations",
    icon: CreditCard,
    description:
      "Real-world integrations across payments, telephony and identity providers.",
    items: ["bKash", "Sheba Pay", "Firebase", "gPlex Call Center", "Keycloak", "Fingerprint Auth"],
    accent: "from-violet-500/20 to-purple-500/10",
  },
  {
    title: "Frontend Frameworks",
    icon: Code2,
    description:
      "Component-driven UIs with React, Next.js and Vue/Nuxt — focus on performance and DX.",
    items: ["React.js", "Next.js", "Vue 3", "Nuxt.js", "TypeScript", "JavaScript (ES2023)"],
    accent: "from-indigo-500/20 to-violet-500/10",
  },
  {
    title: "State Management",
    icon: Layers,
    description:
      "Predictable state across complex apps — from local stores to global async flows.",
    items: ["Redux Toolkit", "Zustand", "React Context", "Vuex", "Pinia", "TanStack Query"],
    accent: "from-fuchsia-500/20 to-pink-500/10",
  },
  {
    title: "Styling & UI",
    icon: Wrench,
    description:
      "Design-system thinking with utility-first CSS, accessible primitives and motion.",
    items: ["Tailwind CSS", "Framer Motion", "Radix UI", "shadcn/ui", "SCSS", "Bootstrap"],
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Process & Practices",
    icon: Wrench,
    description:
      "Agile delivery, code review, performance budgets and a strong ownership mindset.",
    items: ["Agile / Scrum", "JIRA", "API Security", "Sprint Planning", "Code Review", "Testing"],
    accent: "from-lime-500/20 to-green-500/10",
  },
];

// Logo source: Simple Icons CDN (https://cdn.simpleicons.org/{slug}) returns the
// official brand SVG. Tools without a registered brand mark fall back to a
// Lucide icon instead.
export type TechItem = {
  name: string;
  /** Simple Icons slug — renders the real brand logo. */
  slug?: string;
  /** Lucide fallback icon for tools with no brand mark on Simple Icons. */
  icon?: LucideIcon;
};

export const techStack: TechItem[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Vue 3", slug: "vuedotjs" },
  { name: "Nuxt.js", slug: "nuxt" },
  { name: "Redux", slug: "redux" },
  { name: "Zustand", icon: Boxes },
  { name: "Context API", icon: Component },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Framer Motion", slug: "framer" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "NestJS", slug: "nestjs" },
  { name: "Laravel", slug: "laravel" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "AWS", icon: Cloud },
  { name: "Redis", slug: "redis" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Claude Code", slug: "claude" },
  { name: "LangChain", slug: "langchain" },
  { name: "LangGraph", icon: Workflow },
  { name: "RAG", icon: SearchCode },
  { name: "AI Agents", icon: Bot },
  { name: "n8n", slug: "n8n" },
];

/** Plain-text names, kept for any consumer that only needs labels. */
export const flatSkills = techStack.map((item) => item.name);

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  /** The problem or gap this project was built to solve. */
  problem: string;
  /** The approach taken and what was built to solve it. */
  solution: string;
  stack: string[];
  highlights: string[];
  icon: LucideIcon;
  accent: string;
  link?: string;
  github?: string;
  category: "Government" | "Fintech" | "E-commerce" | "ERP" | "Internal Tool";
  /** Optional single cover image. Drop a 1600x900 file at e.g. /public/images/projects/rajuk.jpg */
  image?: string;
  /**
   * Optional multi-image gallery. When 2+ entries are provided, the cover
   * renders an interactive slider with prev/next buttons, dot indicators
   * and an image counter. Overrides `image` when present.
   * Drop files at e.g. /public/images/projects/rajuk-1.jpg, rajuk-2.jpg…
   */
  images?: string[];
  /** Color theme used by the generated cover when no image is provided. */
  theme?: "indigo" | "sky" | "emerald" | "fuchsia" | "amber" | "rose" | "violet" | "lime";
};

export const projects: Project[] = [
  {
    slug: "luminerp-deshipos",
    title: "LuminERP — DeshiPOS",
    category: "ERP",
    summary: "All-in-one POS & ERP platform for retail, supershops and restaurants.",
    description:
      "A complete multi-branch ERP and point-of-sale platform — sales, inventory, accounting, and customer & staff management in one system. My latest fully-owned build: designed and shipped end-to-end solo, from database schema to production deployment, directing Claude Code daily to accelerate delivery.",
    problem:
      "Small and mid-size retailers, supershops and restaurants were stitching together spreadsheets and standalone billing apps — no single system tied sales, inventory, accounting and staff management together, and existing POS tools were either too costly or not built for multi-branch operations.",
    solution:
      "Designed and shipped LuminERP (DeshiPOS) solo, end-to-end — from database schema to production deployment — as a unified multi-branch ERP and POS platform built with Laravel and Vue.js on a MySQL/Redis backend, directing Claude Code daily to accelerate delivery while keeping full ownership of architecture and decisions.",
    stack: ["Laravel", "Vue.js", "MySQL", "Redis", "Claude Code"],
    highlights: [
      "Multi-branch inventory & stock management",
      "Unified sales, accounting and staff modules",
      "Designed, built and shipped solo, end-to-end",
    ],
    icon: Boxes,
    accent: "from-teal-500/30 to-emerald-500/10",
    theme: "emerald",
    image: "/images/projects/deshipos.jpg",
    link: "https://deshipos.com/",
  },
  {
    slug: "voice-nimble",
    title: "Voice Nimble — AI Voice Agents",
    category: "Internal Tool",
    summary: "AI voice calling agents for customer qualification and support.",
    description:
      "A SaaS product providing AI voice agents that answer, qualify and convert customer calls 24/7. Built the agent's reasoning and knowledge layer with Claude, RAG and LangGraph-orchestrated conversation flows, plus the customer-facing frontend and telephony integration.",
    problem:
      "Businesses lose leads and support tickets outside working hours because human agents can't answer every call around the clock, and generic IVR systems can't hold a real conversation or pull live context.",
    solution:
      "Built the reasoning and knowledge layer of an AI voice agent SaaS using Claude, a RAG pipeline over a vector DB for real-time call context, and LangGraph-orchestrated conversation flows for multi-step qualification and escalation — connected to live telephony and n8n workflows that auto-sync qualified leads into the CRM, plus the customer-facing frontend.",
    stack: ["Claude API", "LangChain", "LangGraph", "RAG", "Vector DB", "n8n", "Node.js", "Vue.js"],
    highlights: [
      "RAG pipeline + vector DB for real-time call context retrieval",
      "LangGraph-orchestrated multi-step conversation & escalation flows",
      "n8n workflows automating lead handoff and CRM sync",
      "Production telephony integration for live call handling",
      "Directed with Claude Code daily across the full build",
    ],
    icon: Globe,
    accent: "from-indigo-500/30 to-violet-500/10",
    theme: "violet",
    image: "/images/projects/voicenimble.webp",
    link: "https://voicenimble.com/",
  },
  {
    slug: "overwatch-agrovue",
    title: "Overwatch — Land Monitoring Platform",
    category: "Internal Tool",
    summary: "Satellite-data land monitoring and tender management for agriculture.",
    description:
      "A land monitoring and tender management platform built solo as backend engineer. Users create tenders against one or more land parcels; for each parcel the system pulls Google Earth Engine (GEE) satellite data and analyzes 5 years of historical imagery to generate reports on monthly land condition and which crops are viable to grow.",
    problem:
      "Agricultural land buyers and tender managers had no reliable way to verify a parcel's real condition or crop viability before committing capital — ground surveys are slow, expensive and don't cover history.",
    solution:
      "Built the backend solo for a platform where users raise tenders against one or more land parcels, then pull Google Earth Engine satellite imagery and analyze 5 years of historical data per parcel to auto-generate monthly land-condition and crop-viability reports.",
    stack: ["Node.js", "Google Earth Engine", "React", "TypeScript", "Tailwind"],
    highlights: [
      "Tender creation across multiple land parcels",
      "Google Earth Engine integration for satellite land data",
      "5-year historical analysis driving monthly land-status & crop-viability reports",
    ],
    icon: Layers,
    accent: "from-sky-500/30 to-blue-500/10",
    theme: "sky",
    image: "/images/projects/overwatch.jpg",
    link: "https://overwatch.agrovue.io/",
  },
  {
    slug: "land-mutation",
    title: "Ministry of Land — Mutation",
    category: "Government",
    summary: "Digital land mutation for citizens nationwide.",
    description:
      "Digitized the land mutation process for the Ministry of Land. Integrated payment gateways, queue workers and a multi-step citizen-facing UI that works on low-end devices.",
    problem:
      "Citizens across Bangladesh had to physically visit land offices and navigate a paper-based mutation process to transfer land ownership — slow, opaque, and inaccessible for people outside major cities.",
    solution:
      "Digitized the entire mutation workflow into a multi-step citizen-facing application that works on low-end devices, integrated Bkash and Sheba Pay for online fee payment, and built background queue workers to process applications reliably at national scale.",
    stack: ["Laravel", "Vue 3", "MySQL", "Docker", "Redis"],
    highlights: [
      "Multi-step citizen application flow",
      "Bkash + Sheba Pay payment integration",
      "Background queue workers for processing",
    ],
    icon: Landmark,
    accent: "from-emerald-500/30 to-teal-500/10",
    theme: "emerald",
    image: "/images/projects/mutation.jpg",
    link: "https://mutation.land.gov.bd/",
  },
  {
    slug: "sheba-platform",
    title: "Sheba Platform — 3-Tier Ecosystem",
    category: "Fintech",
    summary: "Customer, admin and partner apps for a service marketplace.",
    description:
      "Delivered features across Sheba's customer app, admin and partner portal. Migrated legacy Laravel 5.2 modules to Laravel 10 and built modular Nuxt.js front-end components shared across surfaces.",
    problem:
      "Sheba's customer, admin and partner surfaces ran on aging Laravel 5.2 modules that were slow to extend, suffered N+1 query performance issues, and duplicated UI logic across teams.",
    solution:
      "Migrated legacy modules from Laravel 5.2 to Laravel 10 with zero downtime, resolved N+1 queries and added Redis caching to cut response times, and built shared modular Nuxt.js components so customer, admin and partner surfaces could reuse the same front-end building blocks.",
    stack: ["Nuxt.js", "Vue 3", "Laravel 10", "Redis", "AWS", "K8s"],
    highlights: [
      "Migrated Laravel 5.2 → 10 with zero downtime",
      "Resolved N+1 queries and added Redis caching",
      "Firebase push notifications across apps",
    ],
    icon: CreditCard,
    accent: "from-fuchsia-500/30 to-pink-500/10",
    theme: "fuchsia",
    image: "/images/projects/sheba.png",
    link: "https://sheba.xyz",
  },
  {
    slug: "marketing-olympiad",
    title: "Marketing Olympiad",
    category: "Internal Tool",
    summary: "Multi-round timed competition platform.",
    description:
      "Built a multi-round competition platform with time-based scoring, live leaderboards and admin controls for round management.",
    problem:
      "The organizing team needed to run a multi-round, time-boxed competition for hundreds of participants with live scoring — spreadsheets and manual tallying couldn't keep up in real time.",
    solution:
      "Built a round-based competition platform with a time-based scoring engine, live leaderboard updates and admin tooling for managing question banks and round progression.",
    stack: ["Laravel", "MySQL", "jQuery", "Tailwind"],
    highlights: [
      "Round-based scoring engine",
      "Live leaderboard updates",
      "Admin tooling for question banks",
    ],
    icon: Trophy,
    accent: "from-amber-500/30 to-orange-500/10",
    theme: "amber",
    image: "/images/projects/marketingolympiad.jpg",
    link: "https://marketingolympiad.com/",
  },
  {
    slug: "amarparcel-delivery",
    title: "AmarParcel Delivery",
    category: "E-commerce",
    summary: "Foodpanda-style delivery & live tracking system.",
    description:
      "End-to-end delivery and tracking system: customer ordering, dispatcher assignment and live status updates. Designed responsive UIs and a dispatcher-facing operations console.",
    problem:
      "The business needed a Foodpanda-style delivery experience — customers placing orders, dispatchers assigning riders, everyone tracking status live — without paying for a third-party logistics platform.",
    solution:
      "Built an end-to-end delivery and tracking system: a mobile-first customer ordering flow, a dispatcher operations console for assigning and monitoring riders, and live order-status updates throughout.",
    stack: ["Laravel", "jQuery", "MySQL", "Bootstrap"],
    highlights: [
      "Live order status tracking",
      "Dispatcher operations console",
      "Mobile-first customer flow",
    ],
    icon: Truck,
    accent: "from-rose-500/30 to-red-500/10",
    theme: "rose",
    image: "/images/projects/amarparcel.png",
  },
  {
    slug: "rajuk-epms",
    title: "RAJUK EPMS",
    category: "Government",
    summary: "Electronic plan management for the capital development authority.",
    description:
      "A high-traffic government platform serving millions of citizens for plan submission, review and approval. Built modular Vue 3 + Vuex front-ends and integrated fingerprint-based authentication for secure case handling.",
    problem:
      "RAJUK's plan submission and approval process for millions of citizens ran through manual, paper-heavy review — slow turnaround, no audit trail, and no secure way to verify which officer handled which case.",
    solution:
      "Built modular Vue 3 + Vuex front-ends for a high-traffic government platform handling plan submission, review and approval, and integrated fingerprint-based authentication so officer actions on sensitive cases are securely verified and auditable. Optimized list views for large datasets and shipped role-based dashboards for 6+ user types.",
    stack: ["Vue 3", "Vuex", "Tailwind", "Laravel", "Nginx"],
    highlights: [
      "Fingerprint authentication for officers",
      "Optimized list views for large datasets",
      "Role-based dashboards for 6+ user types",
    ],
    icon: Building2,
    accent: "from-indigo-500/30 to-violet-500/10",
    theme: "indigo",
    image: "/images/projects/rajuk.png",
    link: "https://epms.rajuk.gov.bd/",
    // images: [
    //   "/images/projects/rajuk-1.jpg",
    //   "/images/projects/rajuk-2.jpg",
    //   "/images/projects/rajuk-3.jpg",
    // ],
  },
  {
    slug: "btrc-lims",
    title: "BTRC LIMS",
    category: "Government",
    summary: "License & inspection management for the telecom regulator.",
    description:
      "A regulator-grade licensing system replacing legacy workflows. Implemented complex workflow engines, dynamic forms, and reporting dashboards with strong audit trails.",
    problem:
      "BTRC's telecom licensing process relied on legacy, hard-to-extend workflows with no strong audit trail — dynamic license types and inspection rules were difficult to model in the old system.",
    solution:
      "Implemented a regulator-grade licensing system with a configurable workflow engine, dynamic forms for varied license types, real-time notifications via RabbitMQ, and PDF report generation with full audit logs.",
    stack: ["Vue 3", "NestJS", "PostgreSQL", "Docker", "RabbitMQ"],
    highlights: [
      "End-to-end licensing workflow engine",
      "Real-time notifications via RabbitMQ",
      "Generated PDF reports with audit logs",
    ],
    icon: Landmark,
    accent: "from-sky-500/30 to-blue-500/10",
    theme: "sky",
    image: "/images/projects/btrc.png",
    link: "https://lims.btrc.gov.bd/",
  },
  {
    slug: "pharmacy-pos",
    title: "Pharmacy POS",
    category: "E-commerce",
    summary: "Point of sale with inventory & reporting.",
    description:
      "A complete pharmacy point-of-sale system: inventory management, barcode billing, batch & expiry tracking, and sales reporting for store owners.",
    problem:
      "Independent pharmacy owners were tracking inventory, batch/expiry dates and sales manually, risking stock-outs, expired-stock sales and no visibility into daily performance.",
    solution:
      "Built a complete point-of-sale system with barcode-based billing, batch & expiry inventory tracking, and daily/monthly sales reporting so owners could run the counter and the back office from one tool.",
    stack: ["Laravel", "MySQL", "Tailwind", "Chart.js"],
    highlights: [
      "Barcode-based billing flow",
      "Batch & expiry inventory tracking",
      "Daily / monthly sales reports",
    ],
    icon: Stethoscope,
    accent: "from-violet-500/30 to-purple-500/10",
    theme: "violet",
    // image: "/images/projects/pharmacy.jpg",
  },
  {
    slug: "ecommerce-storefronts",
    title: "E-commerce Storefronts",
    category: "E-commerce",
    summary: "Mockup-to-production storefronts with payments.",
    description:
      "Converted design mockups into responsive storefronts with checkout flows, payment gateway integration and basic SEO — deployed to live servers.",
    problem:
      "Clients had design mockups for their online stores but no working storefront — they needed pixel-accurate builds with real checkout and payment, not just a template.",
    solution:
      "Converted design mockups into responsive, production storefronts with working checkout flows, payment gateway integration and basic SEO, then deployed and maintained them on live servers.",
    stack: ["PHP", "Laravel", "jQuery", "Bootstrap"],
    highlights: [
      "Pixel-accurate mockup conversion",
      "Checkout & payment integrations",
      "Live deployments and post-launch fixes",
    ],
    icon: ShoppingCart,
    accent: "from-emerald-500/30 to-green-500/10",
    theme: "lime",
    // image: "/images/projects/storefronts.jpg",
  }
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Luminous Labs BD",
    role: "AI Developer (Freelance / Contract)",
    period: "Jan 2026 – Present",
    location: "Dhaka, Bangladesh · Remote",
    summary:
      "Building AI-native products end-to-end — an LLM-powered voice agent and a full ERP/POS platform — directing Claude Code and agentic workflows daily.",
    highlights: [
      "Built voicenimble.com end-to-end — Claude API, RAG + vector DB retrieval, and LangGraph-orchestrated conversation flows.",
      "Automated lead handoff and CRM sync with n8n workflows around the voice agent.",
      "Designed and ran LLM evaluation pipelines to test AI outputs, triage failures and ensure agent reliability.",
      "Built and shipped LuminERP (DeshiPOS) — a multi-branch POS/ERP platform — solo, end-to-end.",
      "Uses Claude Code and GitHub Copilot daily to direct agents, review output and accelerate delivery across concurrent projects.",
    ],
    stack: ["Claude API", "Claude Code", "LangChain", "LangGraph", "RAG", "n8n", "Node.js", "Laravel"],
  },
  {
    company: "Sheba Platform Ltd",
    role: "Software Engineer",
    period: "Jan 2025 – Present",
    location: "Dhaka, Bangladesh",
    summary:
      "Working across Sheba's 3-tier ecosystem — customer app, admin and partner portal — shipping fintech features and modernising legacy modules.",
    highlights: [
      "Integrated fintech payment gateways (Sheba Pay, bKash) with secure, API-driven backends.",
      "Migrated and refactored legacy Laravel 5.2 modules to Laravel 10 — improving performance, security and maintainability.",
      "Resolved N+1 issues and added Redis caching to high-traffic endpoints.",
      "Built modular Nuxt.js & Vue.js front-end components shared across surfaces.",
      "Shipped Firebase push notifications using device tokens and topic subscriptions.",
      "Applied DevOps practices — Docker, Nginx, CI/CD, AWS, Kubernetes and Terraform.",
    ],
    stack: ["Nuxt.js", "Vue 3", "Laravel 10", "Redis", "AWS", "Docker", "K8s"],
  },
  {
    company: "Business Automation Limited",
    role: "Software Engineer",
    period: "Jul 2022 – Dec 2024",
    location: "Dhaka, Bangladesh",
    summary:
      "Developed major government systems serving millions — RAJUK EPMS, BTRC LIMS and Ministry of Land Mutation — across complex workflows and large datasets.",
    highlights: [
      "Built RAJUK EPMS, BTRC-LIMS and Ministry of Land Mutation platforms.",
      "Integrated gPlex Call Center API, payment gateways and the OSS framework; implemented fingerprint authentication for RAJUK.",
      "Worked across Laravel, NestJS, Vue 3, Vuex and Tailwind — optimising large datasets, queries and APIs.",
      "Applied Machine Learning workflows with NumPy and Pandas for automation.",
      "Modernised legacy systems with Docker, RabbitMQ, caching and queue workers.",
      "Participated in client requirement gathering with government stakeholders.",
    ],
    stack: ["Vue 3", "Vuex", "Tailwind", "Laravel", "NestJS", "Docker", "RabbitMQ"],
  },
  {
    company: "Innovation IT",
    role: "Junior Software Engineer",
    period: "Aug 2021 – Jun 2022",
    location: "Dhaka, Bangladesh",
    summary:
      "Started my engineering career building responsive web apps and e-commerce sites — from mockup conversion to live deployment.",
    highlights: [
      "Developed web applications with PHP (Laravel), jQuery and AJAX.",
      "Converted design mockups into responsive web interfaces (HTML, CSS, JS).",
      "Conducted manual testing for responsiveness and usability.",
      "Deployed websites to live servers and shipped e-commerce projects end-to-end.",
    ],
    stack: ["Laravel", "jQuery", "HTML", "CSS", "Bootstrap"],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "University Of Development Alternative (UODA)",
  location: "Dhanmondi, Dhaka",
  period: "2017 – 2021",
  cgpa: "3.48 / 4.00",
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  photo?: string;
  linkedin?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shakil consistently ships clean, well-tested code. His instinct for performance — especially around N+1 queries and caching — saved us countless hours.",
    author: "Jabed Hasan",
    role: "Lead Software Engineer",
    company: "Sheba Platform Ltd",
    photo: "/images/testimonials/jabed-hasan.png",
    linkedin: "https://www.linkedin.com/in/jabed-hasan-9a59a960/",
  },
  {
    quote:
      "Shakil translates product requirements into working software fast, and communicates trade-offs clearly enough that planning around his estimates is easy.",
    author: "Imtiaz Mahboob",
    role: "Product Manager",
    company: "Sheba Platform Ltd (sheba.xyz)",
    photo: "/images/testimonials/imtiaz-mahboob.png",
    linkedin: "https://www.linkedin.com/in/imtiazmahboob/",
  },
  {
    quote:
      "He moves fast across the stack. We handed him a legacy Laravel module and got back something modular, documented and production-ready.",
    author: "Md Kamruzzaman, PMP®",
    role: "Technical Lead & e-Governance Specialist",
    company: "National Digital Transformation (Hajj, Mutation, BTRC-LIMS, RAJUK-EPMS)",
    photo: "/images/testimonials/kamruzzaman-hasan.jpeg",
    linkedin: "https://www.linkedin.com/in/zaman786/",
  },
  {
    quote:
      "A reliable engineer who takes ownership of features end-to-end — from gathering requirements to deploying on AWS.",
    author: "Md. Ashav Noman Mahin",
    role: "Technical Project Manager",
    company: "Luminous Labs",
    photo: "/images/testimonials/mahin.png",
  },
];

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Facebook", href: profile.facebook, icon: Facebook },
  { label: "WhatsApp", href: profile.whatsapp, icon: MessageCircle },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s|-/g, "")}`, icon: Phone },
  { label: "WhatsApp", value: profile.phone, href: profile.whatsapp, icon: MessageCircle },
  { label: "Location", value: profile.location, href: undefined, icon: MapPin },
  { label: "GitHub", value: "shakil10sk", href: profile.github, icon: Github },
  { label: "Website", value: "shakilhussain.dev", href: "#", icon: Globe },
];
