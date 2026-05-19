export default function About() {
  return (
    <>
      <h1 className="mb-6 text-2xl">About</h1>
      <div className="space-y-4 text-muted dark:text-dark-muted">
        <p>
          Elliot Winard is a software engineer, architect, and founder based in Brooklyn.
          Building at the intersection of AI systems, practical tools, and human-scale design.
        </p>
        <p>
          Currently working on <a href="https://leadpure.e10d.dev" className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent/80 dark:text-dark-accent dark:decoration-dark-accent/30 dark:hover:decoration-dark-accent/80">LeadPure</a>,
          an open-source email enrichment API, and an iOS synth app.
        </p>
      </div>
    </>
  );
}
