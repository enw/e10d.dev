export default function About() {
  return (
    <>
      <h1 className="mb-6 text-2xl">About</h1>
      <div className="space-y-4 text-muted dark:text-dark-muted">
        <p>
          Elliot Winard is a software engineer, systems architect, and founder in Brooklyn.
          He builds practical software with a focus on clarity, leverage, and long-term usefulness.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            At Spotify: ML and engineering leadership for production systems.
          </li>
          <li>
            At frog design: product and interaction design focused on real user outcomes.
          </li>
          <li>
            At Macromedia and Laszlo Systems: multimedia platforms and developer tooling.
          </li>
          <li>
            Always: music-informed craft and the thrill of building tools people actually use.
          </li>
        </ul>
        <p>
          Current projects include <a href="https://leadpure.e10d.dev" className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent/80 dark:text-dark-accent dark:decoration-dark-accent/30 dark:hover:decoration-dark-accent/80">LeadPure</a> and Think Bigger Innovation, AI-powered decision making tech with Sheena Iyengar.
        </p>
      </div>
    </>
  );
}
