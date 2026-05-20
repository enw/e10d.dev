import type { Metadata, Viewport } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { OrbWalker } from "./orb-walker";
import { SiteHeader } from "./site-header";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "e10d — Elliot Winard",
    template: "%s — e10d",
  },
  description:
    "Software, consulting, and engineering by Elliot Winard. AI/LLM architecture, full-stack development, product strategy, and mentorship.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={serif.variable}>
      <body className="flex min-h-screen flex-col overflow-x-clip bg-bg text-fg antialiased selection:bg-accent/30 dark:bg-dark-bg dark:text-dark-fg dark:selection:bg-dark-accent/40">
        <ThemeScript />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PageBackdrop />
        <OrbWalker />
        <SiteHeader />
        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto w-full max-w-(--max-width-content) flex-1 px-4 py-10 sm:py-16"
        >
          {children}
        </main>
        <footer className="border-t border-border dark:border-dark-border">
          <div className="mx-auto flex max-w-(--max-width-content) flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between dark:text-dark-muted">
            <p className="m-0">&copy; {new Date().getFullYear()} e10d</p>
            <p className="m-0 sm:text-right">Designing for inevitable decay</p>
          </div>
        </footer>
      </body>
    </html>
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
        `,
      }}
    />
  );
}
