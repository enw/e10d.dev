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
- **UI**: Tailwind, ShadCN
- **Content**: Markdown files in-repo (MDX via next-mdx or similar)
- **Hosting**: Vercel
- **Domain**: e10d.dev (Vercel DNS)

## Design philosophy

- **Warm minimalism** — soft palette, human, slightly imperfect. Clean and sparse but not cold.
- **Designing for decay** — choose elements that won't age poorly. Typography-driven, few images (images date a site), no trendy UI patterns (parallax, heavy animations). Content should read well even if CSS fails.
- **Anti-accumulation** — don't add sections or features until content exists. Everything should be easy to remove.

## Site sections

- `/` — Landing / brand page
- `/blog` — Posts (Markdown in `content/blog/`)
- `/work` — Portfolio / case studies
- `/consulting` — Services description
- `/about` — Bio / contact

Keep it minimal. Add sections only when content exists.

## Conventions

- **No comments in code** unless explaining a non-obvious workaround
- **No emoji** unless user explicitly asks
- Markdown frontmatter: `title`, `date`, `tags`, `description`
- Prefer reading existing files before editing
- Delete unused code outright (no dead code, no backwards-compat shims)
- Validate only at boundaries (user input, external APIs)
- No abstractions for one-off operations

## Developer commands

(TBD — populate as tooling is added)

```
npm run dev        # dev server
npm run build      # production build
npm run lint       # lint
npm run typecheck  # typecheck
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
