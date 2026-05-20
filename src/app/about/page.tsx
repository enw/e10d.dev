import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Elliot Winard — software engineer, systems architect, and founder.",
};

const linkClass =
  "text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-dark-accent dark:decoration-dark-accent/30 dark:hover:decoration-dark-accent/80 dark:focus-visible:outline-dark-accent";

export default function About() {
  return (
    <>
      <h1 className="mb-6 text-xl sm:text-2xl">About</h1>
      <div className="space-y-4 text-base text-muted dark:text-dark-muted">
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
          Current projects include{" "}
          <a href="https://leadpure.e10d.dev" rel="noopener noreferrer" className={linkClass}>
            LeadPure
            <span className="sr-only"> (external site)</span>
          </a>{" "}
          and Think Bigger Innovation, AI-powered decision making tech with Sheena Iyengar.
        </p>
      </div>
    </>
  );
}
