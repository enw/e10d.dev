# e10d.dev

Personal site for Elliot Winard (e10d): consulting, free software, and writing.

Design principle: designing for inevitable decay.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- Source Serif 4 via `next/font/google`
- Static routes, deployed on Vercel

## Local development

Requirements:
- Node.js 20+
- npm

Install and run:

```bash
npm install
npm run dev
```

Build and quality checks:

```bash
npm run build
npm run lint
```

## Routes

- `/` — landing
- `/work` — free software/projects
- `/consulting` — services
- `/about` — bio
- `/blog` — placeholder route (hidden from nav until content exists)

## Notes

- This repo is only for the e10d.dev website.
- Related products (LeadPure, synth app, etc.) live in separate repositories.
- See `AGENTS.md` for project conventions and working rules.
