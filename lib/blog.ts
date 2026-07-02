import type { LucideIcon } from "lucide-react";
import { Bot, Boxes, Database, Workflow } from "lucide-react";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string */
  date: string;
  readingTime: string;
  tags: string[];
  icon: LucideIcon;
  theme: "indigo" | "sky" | "emerald" | "fuchsia" | "amber" | "rose" | "violet" | "lime";
  content: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-agents-with-claude-langgraph-rag",
    title: "Building Production AI Agents with Claude, LangGraph and RAG",
    excerpt:
      "What actually breaks when you take an AI agent from a demo to a production voice product — and the architecture that held up under real traffic.",
    date: "2026-06-20",
    readingTime: "7 min read",
    tags: ["AI Agents", "Claude API", "LangGraph", "RAG"],
    icon: Bot,
    theme: "violet",
    content: [
      {
        paragraphs: [
          "Most AI agent demos fall apart the moment real users show up. A scripted happy path works fine until someone interrupts the flow, asks something off-topic, or expects the agent to remember what they said two turns ago. Building the reasoning layer for Voice Nimble — a SaaS product that answers and qualifies customer calls 24/7 — meant solving for all of that, live, over the phone, with no room for a multi-second thinking pause.",
        ],
      },
      {
        heading: "Retrieval has to be boring and fast",
        paragraphs: [
          "The first instinct with RAG is to reach for the fanciest retrieval strategy available. In production, boring wins. We settled on a vector DB with tight metadata filtering per tenant, keeping the retrieval step under a few hundred milliseconds so it never became the bottleneck in a voice conversation where latency is immediately noticeable.",
          "The bigger lesson was chunking discipline. Call scripts, FAQs and product knowledge don't chunk the same way documentation does — conversational context needs smaller, more redundant chunks so a single retrieved passage can stand on its own when read back to a caller.",
        ],
      },
      {
        heading: "LangGraph for state, not just flow",
        paragraphs: [
          "LangChain's chains are great for linear tasks; a real qualification call is not linear. LangGraph let us model the conversation as an explicit state machine — qualify, escalate, retry, hand off — instead of hoping a single long prompt would keep track of everything.",
          "That state machine paid for itself the first time we needed to add a new escalation path. Instead of rewriting a mega-prompt, we added a node and a transition, and the rest of the graph didn't need to know it existed.",
        ],
        list: [
          "Explicit nodes for qualify / clarify / escalate / close",
          "Conversation state persisted between turns, not re-derived from history each time",
          "Guardrail nodes that can force a hand-off to a human without the model 'deciding' to loop forever",
        ],
      },
      {
        heading: "Evaluation is the unglamorous part that matters most",
        paragraphs: [
          "Shipping the agent was maybe 40% of the work. The other 60% was building an evaluation pipeline to catch regressions before customers did — replaying real (anonymized) call transcripts against new prompt versions and flagging drops in qualification accuracy or tone.",
          "Without that harness, every prompt tweak was a gamble. With it, we could tell within minutes whether a change made things better or quietly broke an edge case three releases ago.",
        ],
      },
      {
        heading: "What I'd tell someone starting this today",
        paragraphs: [
          "Treat the agent's reasoning layer like a distributed system, not a clever prompt. Design for failure paths first — timeouts, low-confidence retrieval, ambiguous intent — because that's what real traffic sends you, not the happy path you tested in the demo.",
        ],
      },
    ],
  },
  {
    slug: "directing-claude-code-solo-fullstack",
    title: "Directing Claude Code: How I Ship Full-Stack Features Solo",
    excerpt:
      "Notes from building LuminERP (DeshiPOS) end-to-end as a solo engineer, using Claude Code daily without losing ownership of the architecture.",
    date: "2026-05-10",
    readingTime: "6 min read",
    tags: ["Claude Code", "Productivity", "ERP"],
    icon: Workflow,
    theme: "indigo",
    content: [
      {
        paragraphs: [
          "LuminERP (DeshiPOS) is a multi-branch POS and ERP platform I designed and shipped solo — schema to production. Doing that alone only worked because I stopped treating Claude Code as an autocomplete tool and started treating it as a very fast, very literal engineer who needed clear direction and real code review.",
        ],
      },
      {
        heading: "Own the architecture, delegate the typing",
        paragraphs: [
          "Every schema decision, every module boundary, every naming convention for the ERP came from me first — written down before a single prompt went out. Claude Code is excellent at implementing a well-specified plan and terrible at guessing one, so the highest-leverage thing I could do was remove ambiguity before asking for code.",
          "In practice that meant writing short specs for each submodule — table shape, required fields, the exact API contract — the same way I'd brief a junior engineer, then letting Claude Code produce the migration, model, controller and routes in one pass.",
        ],
      },
      {
        heading: "Review like the code is a stranger's",
        paragraphs: [
          "Fast generation creates a real temptation to skim. I read every diff as if a stranger had opened the PR — checking company-scoping on every query, validation on every input, and that soft deletes were actually wired up, not just declared in a comment.",
          "The bugs that slipped through early on were never syntax errors; they were subtle authorization gaps and missing indexes on tables that would only hurt at scale. Those are exactly the things a fast reviewer misses and a careful one catches.",
        ],
        list: [
          "Write the spec before the prompt — ambiguity is what produces bad code, not the model",
          "Review for security and multi-tenancy first, style second",
          "Keep a checklist per submodule so nothing (events, permissions, exports) gets silently skipped",
        ],
      },
      {
        heading: "Where it actually saved time",
        paragraphs: [
          "The real win wasn't typing speed, it was parallelism of thought — I could specify the next module while the current one's tests were running, and switch context without losing my place because the spec, not my memory, was the source of truth.",
          "That compounding is what let one person ship a full ERP: not faster fingers, but a repeatable loop of spec, generate, review, verify that didn't degrade as the codebase grew.",
        ],
      },
    ],
  },
  {
    slug: "fixing-n-plus-one-queries-fintech-scale",
    title: "Fixing N+1 Queries: Lessons from Scaling a Fintech Platform",
    excerpt:
      "How a handful of unremarkable-looking Eloquent queries were quietly costing Sheba's high-traffic endpoints hundreds of milliseconds — and how we found them.",
    date: "2026-04-02",
    readingTime: "5 min read",
    tags: ["Laravel", "Performance", "MySQL", "Redis"],
    icon: Database,
    theme: "amber",
    content: [
      {
        paragraphs: [
          "Working across Sheba's customer, admin and partner surfaces meant inheriting Laravel 5.2 modules that had grown organically for years. None of the queries looked wrong in isolation. The problem only showed up under real traffic, when a single page load quietly issued hundreds of database round-trips.",
        ],
      },
      {
        heading: "The query looks fine until you count it",
        paragraphs: [
          "Eloquent's relationship loading is convenient enough to hide the cost of using it carelessly. A loop over 50 orders, each lazily pulling its customer and line items, reads like clean code and behaves like 150 separate queries. Nothing in the code review flags it because nothing looks unusual — it's just `$order->customer->name` inside a `foreach`.",
          "The fix was rarely clever: eager-load with `with()`, and for reporting endpoints, push the aggregation into the query itself instead of pulling rows into PHP to sum them.",
        ],
      },
      {
        heading: "Finding them systematically, not by guessing",
        paragraphs: [
          "Guessing which endpoint has the problem doesn't scale across a codebase this size. We enabled query logging in staging under realistic load and looked for any single request issuing more than a handful of similar-shaped queries — that pattern is almost always an N+1 hiding in plain sight.",
        ],
        list: [
          "Query-count assertions in feature tests for high-traffic endpoints, so a regression fails CI instead of production",
          "Eager-loading relationships by default on list endpoints, not as an afterthought",
          "Redis caching for read-heavy, rarely-changing lookups (catalog data, config) to remove load from MySQL entirely",
        ],
      },
      {
        heading: "The part that's easy to forget",
        paragraphs: [
          "Performance work like this only stays fixed if it's enforced, not just corrected once. Adding query-count assertions to the test suite meant the next engineer — including future me — couldn't reintroduce the same lazy-loading pattern without a test failing first.",
        ],
      },
    ],
  },
  {
    slug: "why-laravel-vue-for-luminerp-deshipos",
    title: "Why We Chose Laravel + Vue for LuminERP (DeshiPOS)",
    excerpt:
      "Picking a stack for a multi-branch ERP isn't about what's trendy — it's about what a solo engineer can hold in their head while shipping fast.",
    date: "2026-02-18",
    readingTime: "5 min read",
    tags: ["Laravel", "Vue.js", "ERP", "Architecture"],
    icon: Boxes,
    theme: "emerald",
    content: [
      {
        paragraphs: [
          "Before writing a single migration for LuminERP (DeshiPOS), I had to pick a stack I could carry solo through database design, backend, frontend and deployment — with no team to divide the work across. That constraint mattered more than any framework benchmark.",
        ],
      },
      {
        heading: "Laravel's conventions do the thinking for you",
        paragraphs: [
          "An ERP is mostly CRUD with serious edge cases: multi-branch inventory, accounting entries that must never be wrong, and staff permissions that vary by role and branch. Laravel's conventions — Eloquent, migrations, policies, queues — meant I spent my design time on the ERP's actual business rules instead of re-deciding routing or validation patterns for every module.",
          "The submodule pattern (migration → model → controller → action → events) also made the codebase predictable enough that Claude Code could extend it reliably once the first few modules established the shape.",
        ],
      },
      {
        heading: "Vue for the parts that need to feel instant",
        paragraphs: [
          "A POS counter can't feel like a web page reloading between actions — cashiers need barcode scans and payment confirmation to feel instant. Vue's reactivity made the point-of-sale screen genuinely snappy without reaching for a heavier SPA framework than the problem needed.",
        ],
        list: [
          "Vue components for the POS terminal, invoicing and live stock views — anywhere state changes on every keystroke or scan",
          "Server-rendered Laravel views for admin screens where SEO and simplicity mattered more than reactivity",
          "MySQL for transactional integrity on sales and accounting, Redis for session and cache-heavy reads",
        ],
      },
      {
        heading: "The real lesson",
        paragraphs: [
          "Stack choice for a solo build isn't about the newest tooling — it's about picking the smallest set of tools you can be fast and correct in, for the specific shape of problem in front of you. Laravel + Vue wasn't the most exciting choice. It was the one that let one person actually finish.",
        ],
      },
    ],
  },
];
