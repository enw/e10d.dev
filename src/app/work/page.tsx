export default function Work() {
  return (
    <>
      <h1 className="mb-6 text-2xl">Free Software</h1>
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
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted dark:text-dark-muted">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Item({ name, desc, url }: { name: string; desc: string; url: string }) {
  return (
    <div>
      <a
        href={url}
        className="text-fg underline decoration-accent/30 underline-offset-2 hover:decoration-accent/80 dark:text-dark-fg dark:decoration-dark-accent/30 dark:hover:decoration-dark-accent/80"
      >
        {name}
      </a>
      <p className="text-sm text-muted dark:text-dark-muted">{desc}</p>
    </div>
  );
}
