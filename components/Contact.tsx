"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactItems, profile, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

const helpTags = [
  "Backend engineering",
  "API design & integration",
  "Performance audits",
  "DevOps & CI/CD",
  "Vue & React",
  "Production deploys",
];

export function Contact() {
  const [sent, setSent] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subjectInput = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(
      subjectInput || `Portfolio inquiry from ${name}`,
    );
    const body = encodeURIComponent(
      `Hi Shakil,\n\n${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-fuchsia-500/15 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 right-10 h-[22rem] w-[22rem] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a role, project, or just want to say hi? Drop a message — I usually reply within a day."
          align="center"
        />

        {/* Availability + response-time strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur px-5 py-3 sm:flex-row sm:justify-center sm:gap-6"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {profile.availability}
            </span>
          </div>
          <span className="hidden h-4 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
          <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            <Clock className="h-3.5 w-3.5 text-indigo-500" />
            Avg. response · within 24 hours
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Info card */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/40 dark:to-zinc-950 p-7 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-fuchsia-500/10 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest">
                  <Sparkles className="h-3 w-3" />
                  Direct line
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  Reach me directly
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Prefer email or a quick call? Use whichever channel works for you.
                </p>

                <ul className="mt-7 space-y-1">
                  {contactItems.map(({ label, value, href, icon: Icon }) => {
                    const content = (
                      <div className="group flex items-center gap-4 rounded-xl px-3 py-3 -mx-3 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60 transition-colors">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 group-hover:ring-indigo-300 dark:group-hover:ring-indigo-700/60 transition-all">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] uppercase tracking-widest text-zinc-500">
                            {label}
                          </p>
                          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                            {value}
                          </p>
                        </div>
                        {href && (
                          <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-indigo-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        )}
                      </div>
                    );
                    return (
                      <li key={label}>
                        {href ? (
                          <a href={href} target="_blank" rel="noreferrer">
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                    Socials
                  </p>
                  <div className="flex items-center gap-2">
                    {socials.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative lg:col-span-3"
          >
            {/* Decorative gradient ring */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-indigo-500/30 via-transparent to-fuchsia-500/30 opacity-60" />

            <form
              onSubmit={onSubmit}
              className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-7 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/20">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    Send a message
                  </h3>
                  <p className="text-xs text-zinc-500">
                    I'll read it carefully and get back to you.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" placeholder="Jane Doe" required />
                <Field
                  id="email"
                  label="Email"
                  placeholder="you@company.com"
                  type="email"
                  required
                />
              </div>
              <div className="mt-5">
                <Field
                  id="subject"
                  label="Subject"
                  placeholder="Let's collaborate on…"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a bit about the project, role, or idea…"
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition resize-y"
                />
              </div>

              {/* What I can help with */}
              <div className="mt-6">
                <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-500 mb-2.5">
                  What I can help with
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {helpTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-zinc-500">
                  Submitting opens your email client with a prefilled message.
                </p>
                <button
                  type="submit"
                  className={cn(
                    "group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg shadow-indigo-500/10 transition-all hover:scale-[1.02]",
                  )}
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Sent
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition"
      />
    </div>
  );
}
