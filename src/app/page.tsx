import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elliot Winard",
  description:
    "Software engineering, AI/LLM architecture, product strategy, and mentorship by Elliot Winard.",
};

export default function Home() {
  return (
    <>
      <h1 className="mb-4 text-2xl leading-tight sm:text-3xl">e10d</h1>
      <p className="text-base text-muted dark:text-dark-muted">
        Elliot Winard &mdash; software engineering, AI/LLM architecture,
        product strategy, and mentorship.
      </p>
      <p className="mt-6 text-base text-muted dark:text-dark-muted">
        Building useful things. Designing for inevitable decay.
      </p>
    </>
  );
}
