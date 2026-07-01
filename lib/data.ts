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
} from "lucide-react";

export const profile = {
  name: "Md Shakil Hussain",
  shortName: "Shakil",
  role: "Full-Stack Software Engineer",
  tagline: "Backend-focused full-stack engineer building robust, secure, production systems.",
  bio: "Full-Stack Software Engineer with 4+ years building scalable enterprise systems, government applications, and high-traffic platforms. Deep backend experience with Laravel and Node.js, plus production-ready frontends with React, Next.js and Vue — backed by strong DevOps and API design practices.",
  location: "Dhaka, Bangladesh",
  email: "shakilh039@gmail.com",
  phone: "+8801636-639790",
  github: "https://github.com/shakil10sk",
  linkedin: "https://www.linkedin.com/in/shakil-hussain-h039/",
  resumeUrl: "/cv/One_page_cv_shakil-compressed.pdf",
  availability: "Open to remote backend & full-stack roles",
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
  { label: "React", x: "-8%", y: "8%", delay: 0 },
  { label: "Next.js", x: "92%", y: "14%", delay: 0.3 },
  { label: "TypeScript", x: "-12%", y: "62%", delay: 0.6 },
  { label: "Tailwind", x: "94%", y: "70%", delay: 0.9 },
];

export const stats = [
  { label: "Years of experience", value: "4+" },
  { label: "Production projects", value: "20+" },
  { label: "Companies", value: "3" },
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

export const flatSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Vue 3",
  "Nuxt.js",
  "Redux",
  "Zustand",
  "Context API",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "NestJS",
  "Laravel",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Redis",
  "Kubernetes",
];

export type Project = {
  title: string;
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  icon: LucideIcon;
  accent: string;
  link?: string;
  github?: string;
  category: "Government" | "Fintech" | "E-commerce" | "Internal Tool";
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
    title: "Voice Nimble — AI Voice Agents",
    category: "Internal Tool",
    summary: "AI voice calling agents for customer qualification and support.",
    description:
      "A SaaS product providing AI voice agents that answer, qualify and convert customer calls 24/7. Implemented frontend landing pages and integrated with telephony APIs for production call flows.",
    stack: ["Node.js", "React", "Twilio / Telephony", "Docker"],
    highlights: [
      "AI-driven call qualification",
      "Production telephony integration",
      "Customer-facing landing and analytics",
    ],
    icon: Globe,
    accent: "from-indigo-500/30 to-violet-500/10",
    theme: "violet",
    image: "/images/projects/voicenimble.jpg",
    link: "https://voicenimble.com/",
  },
  {
    title: "Overwatch — Admin Dashboard",
    category: "Internal Tool",
    summary: "Admin dashboard and operations console for agricultural services.",
    description:
      "A modern admin dashboard for operations and analytics. Built responsive UI components, performance-optimised list views and monitoring surfaces for system health and user management.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js"],
    highlights: [
      "Real-time metrics and activity feeds",
      "Operator-focused workflows",
      "Performance optimisations for large datasets",
    ],
    icon: Layers,
    accent: "from-sky-500/30 to-blue-500/10",
    theme: "sky",
    image: "/images/projects/overwatch.jpg",
    link: "https://overwatch.agrovue.io/",
  },
  {
    title: "Ministry of Land — Mutation",
    category: "Government",
    summary: "Digital land mutation for citizens nationwide.",
    description:
      "Digitized the land mutation process for the Ministry of Land. Integrated payment gateways, queue workers and a multi-step citizen-facing UI that works on low-end devices.",
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
    title: "Sheba Platform — 3-Tier Ecosystem",
    category: "Fintech",
    summary: "Customer, admin and partner apps for a service marketplace.",
    description:
      "Delivered features across Sheba's customer app, admin and partner portal. Migrated legacy Laravel 5.2 modules to Laravel 10 and built modular Nuxt.js front-end components shared across surfaces.",
    stack: ["Nuxt.js", "Vue 3", "Laravel 10", "Redis", "AWS", "K8s"],
    highlights: [
      "Migrated Laravel 5.2 → 10 with zero downtime",
      "Resolved N+1 queries and added Redis caching",
      "Firebase push notifications across apps",
    ],
    icon: CreditCard,
    accent: "from-fuchsia-500/30 to-pink-500/10",
    theme: "fuchsia",
    // image: "/images/projects/sheba.jpg",
  },
  {
    title: "Marketing Olympiad",
    category: "Internal Tool",
    summary: "Multi-round timed competition platform.",
    description:
      "Built a multi-round competition platform with time-based scoring, live leaderboards and admin controls for round management.",
    stack: ["Laravel", "MySQL", "jQuery", "Tailwind"],
    highlights: [
      "Round-based scoring engine",
      "Live leaderboard updates",
      "Admin tooling for question banks",
    ],
    icon: Trophy,
    accent: "from-amber-500/30 to-orange-500/10",
    theme: "amber",
    // image: "/images/projects/olympiad.jpg",
  },
  {
    title: "AmarParcel Delivery",
    category: "E-commerce",
    summary: "Foodpanda-style delivery & live tracking system.",
    description:
      "End-to-end delivery and tracking system: customer ordering, dispatcher assignment and live status updates. Designed responsive UIs and a dispatcher-facing operations console.",
    stack: ["Laravel", "jQuery", "MySQL", "Bootstrap"],
    highlights: [
      "Live order status tracking",
      "Dispatcher operations console",
      "Mobile-first customer flow",
    ],
    icon: Truck,
    accent: "from-rose-500/30 to-red-500/10",
    theme: "rose",
    // image: "/images/projects/amarparcel.jpg",
  },
  {
    title: "RAJUK EPMS",
    category: "Government",
    summary: "Electronic plan management for the capital development authority.",
    description:
      "A high-traffic government platform serving millions of citizens for plan submission, review and approval. Built modular Vue 3 + Vuex front-ends and integrated fingerprint-based authentication for secure case handling.",
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
    // images: [
    //   "/images/projects/rajuk-1.jpg",
    //   "/images/projects/rajuk-2.jpg",
    //   "/images/projects/rajuk-3.jpg",
    // ],
  },
  {
    title: "BTRC LIMS",
    category: "Government",
    summary: "License & inspection management for the telecom regulator.",
    description:
      "A regulator-grade licensing system replacing legacy workflows. Implemented complex workflow engines, dynamic forms, and reporting dashboards with strong audit trails.",
    stack: ["Vue 3", "NestJS", "PostgreSQL", "Docker", "RabbitMQ"],
    highlights: [
      "End-to-end licensing workflow engine",
      "Real-time notifications via RabbitMQ",
      "Generated PDF reports with audit logs",
    ],
    icon: Landmark,
    accent: "from-sky-500/30 to-blue-500/10",
    theme: "sky",
    // image: "/images/projects/btrc.jpg",
  },
  {
    title: "Pharmacy POS",
    category: "E-commerce",
    summary: "Point of sale with inventory & reporting.",
    description:
      "A complete pharmacy point-of-sale system: inventory management, barcode billing, batch & expiry tracking, and sales reporting for store owners.",
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
    title: "E-commerce Storefronts",
    category: "E-commerce",
    summary: "Mockup-to-production storefronts with payments.",
    description:
      "Converted design mockups into responsive storefronts with checkout flows, payment gateway integration and basic SEO — deployed to live servers.",
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
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shakil consistently ships clean, well-tested code. His instinct for performance — especially around N+1 queries and caching — saved us countless hours.",
    author: "Tech Lead",
    role: "Engineering Manager",
    company: "Sheba Platform",
  },
  {
    quote:
      "He moves fast across the stack. We handed him a legacy Laravel module and got back something modular, documented and production-ready.",
    author: "Senior Engineer",
    role: "Backend Lead",
    company: "Business Automation Ltd",
  },
  {
    quote:
      "A reliable engineer who takes ownership of features end-to-end — from gathering requirements to deploying on AWS.",
    author: "Project Manager",
    role: "Delivery Lead",
    company: "Government Project",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s|-/g, "")}`, icon: Phone },
  { label: "Location", value: profile.location, href: undefined, icon: MapPin },
  { label: "GitHub", value: "shakil10sk", href: profile.github, icon: Github },
  { label: "Website", value: "shakilhussain.dev", href: "#", icon: Globe },
];
