# e10d – Agents.md

e10d is Elliot's personal LLC and brand: consulting (AI/LLM arch, full-stack, product strategy), side projects, software engineering, mentorship, and advising.

Brand rooted in Buddhist philosophy — embracing change and impermanence. "Designing for inevitable decay."

Name origin: "Elliot Winard" → e(1)0(w)inard → e10d. Also reads as "e-tension" / "attention" (ML transformer concept).

## Repo structure

```
e10d.dev/             → Marketing + blog + portfolio site (Next.js, TS)
leadpure.e10d.dev/    → LeadPure (separate project, own repo)
synth-app/            → iOS synth (separate project, own repo)
```

This repo = the e10d.dev website only. Sub-products live in their own repos.

## Tech stack (this repo)

- **Framework**: Next.js (App Router, TS)
- **UI**: Tailwind v4 (CSS-first config in `globals.css`), no component library
- **Font**: Source Serif 4 (via next/font/google), single typeface for everything
- **Content**: Markdown files in-repo (MDX via next-mdx or similar)
- **Hosting**: Vercel
- **Domain**: e10d.dev (Vercel DNS)

## Design system

- **Warm minimalism / Zendo** — generous whitespace, minimal chrome, text as UI.
- **Designing for decay** — typography-driven, few images, no trendy UI patterns. Content should read well even if CSS fails.
- **Anti-accumulation** — don't add sections or features until content exists. Easy to remove.
- **Light + dark mode** — class-based (`<html class="dark">`), system preference on first visit, persisted to localStorage.
- **Color palette** — custom CSS variables in Tailwind `@theme`:

  | Token | Light | Dark |
  |---|---|---|
  | `bg` | `#faf8f5` | `#141312` |
  | `fg` | `#1a1817` | `#e8e4df` |
  | `muted` | `#8a8580` | `#6b6560` |
  | `accent` | `#b85a3a` | `#d4755a` |

  Tailwind v4 custom colors used directly: `bg-bg text-fg text-muted text-accent dark:bg-dark-bg dark:text-dark-fg` etc.

## Site sections

- `/` — Landing
- `/work` — Projects (grouped: Software / Experiments)
- `/consulting` — Services description
- `/blog` — No posts yet, placeholder
- `/about` — Bio

All routes are static (prerendered). Add sections only when content exists.

## Conventions

- **No comments in code** unless explaining a non-obvious workaround
- **No emoji** unless user explicitly asks
- Markdown frontmatter: `title`, `date`, `tags`, `description`
- Prefer reading existing files before editing
- Delete unused code outright
- Validate only at boundaries
- No abstractions for one-off operations

## Developer commands

```
npm run dev        # dev server
npm run build      # production build (includes lint + typecheck)
npm run lint       # lint only
```

## Related context

- **.me.toon** at `~/.me.toon` — personal profile (prefs, skills, values)
- **TBI / ThinkBigger** — the main startup (separate repos)
- **TBKB** — knowledge base (Postgres + pgvector)
- **LeadPure** — open-source email enrichment, at leadpure.e10d.dev

## Personal style (apply to all work)

From `~/.me.toon`:
- solo dev, cost-sensitive
- terse + factual over elaborate
- "ship small, iterate fast, simple interfaces"
- no fluff, ok with ambiguity, yes to complexity when warranted
- prefers structured output (PRDs, C4, canvases)

## Open questions / decisions pending

- LeadPure brand relationship: sub-brand of e10d or standalone? (undecided)
- Blog: MDX vs MD vs Contentlayer vs next-mdx-remote (TBD when content exists)
