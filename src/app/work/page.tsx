import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Software",
  description: "Open-source software and experiments by Elliot Winard.",
};

const linkClass =
  "text-fg underline decoration-accent/30 underline-offset-2 hover:decoration-accent/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-dark-fg dark:decoration-dark-accent/30 dark:hover:decoration-dark-accent/80 dark:focus-visible:outline-dark-accent";

export default function Work() {
  return (
    <>
      <h1 className="mb-6 text-xl sm:text-2xl">Free Software</h1>
      <div className="space-y-8">
        <Section title="Software">
          <Item
            name="LeadPure"
            desc="Open-source email enrichment API. Self-host or cloud."
            url="https://leadpure.e10d.dev"
          />
          <Item
            name="Hermes Skill Forge"
            desc="IDE for authoring and deploying BDI-based AI agents."
            url="https://github.com/enw/hermes-skill-forge"
          />
          <Item
            name="RATT"
            desc="macOS menu bar recorder with local Whisper transcripts."
            url="https://github.com/enw/RATT"
          />
        </Section>
        <Section title="Experiments">
          <Item
            name="rainbow-beat-maker"
            desc="Browser-based music creation."
            url="https://github.com/enw/rainbow-beat-maker"
          />
          <Item
            name="vault-bridge"
            desc="macOS SwiftUI navigator for Obsidian vaults."
            url="https://github.com/enw/vault-bridge"
          />
          <Item
            name="tsakarori"
            desc="Taskwarrior terminal interface."
            url="https://github.com/enw/tsakarori"
          />
          <Item
            name="kashi"
            desc="Local-first macOS meeting notes without cloud uploads."
            url="https://github.com/enw/kashi"
          />
        </Section>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <h2
        id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted dark:text-dark-muted"
      >
        {title}
      </h2>
      <ul className="m-0 list-none space-y-3 p-0">{children}</ul>
    </section>
  );
}

function Item({ name, desc, url }: { name: string; desc: string; url: string }) {
  return (
    <li>
      <a href={url} rel="noopener noreferrer" className={linkClass}>
        {name}
        <span className="sr-only"> (external site)</span>
      </a>
      <p className="mt-0.5 text-sm text-muted dark:text-dark-muted">{desc}</p>
    </li>
  );
}
