import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const seoDescription =
  "Md Shakil Hussain — Full-Stack Software Engineer building Laravel/Node.js backends, React/Vue frontends, and production AI agents with Claude, LangChain, LangGraph, RAG and vector DBs. Based in Dhaka, remote-first.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shakilhussain.dev"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: seoDescription,
  keywords: [
    "Md Shakil Hussain",
    "Full-Stack Engineer",
    "Full-Stack Developer Bangladesh",
    "AI Agent Developer",
    "LLM Integration Engineer",
    "Claude API Developer",
    "Claude Code",
    "LangChain Developer",
    "LangGraph",
    "RAG Engineer",
    "Vector Database",
    "n8n Automation",
    "Voice AI Developer",
    "ERP Developer",
    "POS Software Developer",
    "Laravel Developer",
    "Node.js Developer",
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "Remote Software Engineer",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shakilhussain.dev",
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: seoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://shakilhussain.dev",
  image: "https://shakilhussain.dev/images/shakil.jpeg",
  jobTitle: profile.role,
  description: seoDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin, profile.facebook],
  knowsAbout: [
    "Laravel",
    "Node.js",
    "React",
    "Next.js",
    "Vue.js",
    "AI Agent Development",
    "Claude API",
    "LangChain",
    "LangGraph",
    "RAG",
    "Vector Databases",
    "n8n",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${space.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <GoogleAnalytics />
      </head>
      <body className="font-sans antialiased min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-indigo-600 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
