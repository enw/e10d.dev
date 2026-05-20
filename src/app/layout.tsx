import type { Metadata } from "next";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { OrbWalker } from "./orb-walker";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "e10d — Elliot Winard",
  description:
    "Software, consulting, and engineering by Elliot Winard. AI/LLM architecture, full-stack development, product strategy, and mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={serif.variable}>
      <body className="flex min-h-screen flex-col bg-bg text-fg antialiased selection:bg-accent/30 dark:bg-dark-bg dark:text-dark-fg dark:selection:bg-dark-accent/40">
        <ThemeScript />
        <PageBackdrop />
        <OrbWalker />
        <header className="border-b border-border dark:border-dark-border">
          <nav className="mx-auto flex max-w-(--max-width-content) items-center justify-between px-4 py-4 text-sm">
            <Link href="/" className="text-fg no-underline hover:text-accent dark:text-dark-fg dark:hover:text-dark-accent">
              e10d
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/work" className="text-muted no-underline hover:text-fg dark:text-dark-muted dark:hover:text-dark-fg">Free Software</Link>
              <Link href="/consulting" className="text-muted no-underline hover:text-fg dark:text-dark-muted dark:hover:text-dark-fg">Consulting</Link>
              <Link href="/about" className="text-muted no-underline hover:text-fg dark:text-dark-muted dark:hover:text-dark-fg">About</Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-(--max-width-content) flex-1 px-4 py-16">
          {children}
        </main>
        <footer className="border-t border-border dark:border-dark-border">
          <div className="mx-auto flex max-w-(--max-width-content) items-center justify-between px-4 py-6 text-xs text-muted dark:text-dark-muted">
            <span>&copy; {new Date().getFullYear()} e10d</span>
            <span>Designing for inevitable decay</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

function ThemeToggle() {
  return (
    <button
      id="theme-toggle"
      className="cursor-pointer text-muted hover:text-fg dark:text-dark-muted dark:hover:text-dark-fg"
      aria-label="Toggle theme"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

function PageBackdrop() {
  return <div aria-hidden="true" className="page-backdrop" />;
}

function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var theme = localStorage.getItem('theme');
            if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            }
          })();
          document.addEventListener('DOMContentLoaded', function() {
            var btn = document.getElementById('theme-toggle');
            if (btn) {
              btn.addEventListener('click', function() {
                var isDark = document.documentElement.classList.toggle('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
              });
            }
          });
        `,
      }}
    />
  );
}
