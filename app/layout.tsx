import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://shakilhussain.dev"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.bio,
  keywords: [
    "Md Shakil Hussain",
    "Frontend Developer",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Laravel",
    "TypeScript",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shakilhussain.dev",
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
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
