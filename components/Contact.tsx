"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactItems, profile, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Contact() {
  const [sent, setSent] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
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
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a role, project, or just want to say hi? Drop a message — I usually reply within a day."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Info card */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/40 dark:to-zinc-950 p-7 sm:p-8">
              <h3 className="font-display text-xl font-semibold">
                Reach me directly
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Prefer email or a quick call? Use whichever channel works for you.
              </p>

              <ul className="mt-7 space-y-1">
                {contactItems.map(({ label, value, href, icon: Icon }) => {
                  const content = (
                    <div className="group flex items-center gap-4 rounded-xl px-3 py-3 -mx-3 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-colors">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 text-indigo-600 dark:text-indigo-400">
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
                        <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-indigo-500 transition-colors" />
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

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-7 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" placeholder="Jane Doe" required />
              <Field
                id="email"
                label="Email"
                placeholder="you@company.com"
                type="email"
                required
              />
            </div>
            <Field id="subject" label="Subject" placeholder="Let's collaborate on…" />
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
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400"
              />
            </div>

            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
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
          </motion.form>
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
        className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400"
      />
    </div>
  );
}
