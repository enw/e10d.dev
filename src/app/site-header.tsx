"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/work", label: "Free Software" },
  { href: "/consulting", label: "Consulting" },
  { href: "/about", label: "About" },
] as const;

const navLinkClass =
  "rounded-sm text-muted no-underline hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-dark-muted dark:hover:text-dark-fg dark:focus-visible:outline-dark-accent";

const navLinkCurrentClass =
  "text-fg dark:text-dark-fg underline decoration-accent/50 underline-offset-4 dark:decoration-dark-accent/50";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border dark:border-dark-border">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-(--max-width-content) flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`text-lg font-normal no-underline sm:text-sm ${pathname === "/" ? navLinkCurrentClass : "text-fg hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-dark-fg dark:hover:text-dark-accent dark:focus-visible:outline-dark-accent"}`}
        >
          e10d
        </Link>
        <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 sm:gap-x-2">
          {NAV_LINKS.map(({ href, label }) => {
            const current = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={current ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center px-3 py-2 text-sm ${current ? navLinkCurrentClass : navLinkClass}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="flex items-center">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
