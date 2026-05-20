import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Consulting in AI/LLM architecture, full-stack development, product strategy, and mentorship.",
};

const linkClass =
  "text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-dark-accent dark:decoration-dark-accent/30 dark:hover:decoration-dark-accent/80 dark:focus-visible:outline-dark-accent";

export default function Consulting() {
  return (
    <>
      <h1 className="mb-6 text-xl sm:text-2xl">Consulting</h1>
      <div className="space-y-4 text-base text-muted dark:text-dark-muted">
        <p>
          I help teams and founders design, build, and ship software. Areas I work across:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-fg dark:text-dark-fg">AI / LLM architecture</strong>
            &nbsp;&mdash; agent systems, RAG pipelines, model routing, evaluation
          </li>
          <li>
            <strong className="text-fg dark:text-dark-fg">Full-stack development</strong>
            &nbsp;&mdash; Next.js, TypeScript, Python, Postgres, Cloudflare
          </li>
          <li>
            <strong className="text-fg dark:text-dark-fg">Product strategy</strong>
            &nbsp;&mdash; PMF, technical planning, architecture decisions
          </li>
          <li>
            <strong className="text-fg dark:text-dark-fg">Mentorship</strong>
            &nbsp;&mdash; engineering leadership, career growth, technical coaching
          </li>
        </ul>
        <p className="pt-4">
          <a href="mailto:elliot@e10d.dev" className={linkClass}>
            elliot@e10d.dev
          </a>
        </p>
      </div>
    </>
  );
}
