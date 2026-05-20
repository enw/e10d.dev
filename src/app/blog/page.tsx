import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog posts from Elliot Winard.",
};

export default function Blog() {
  return (
    <>
      <h1 className="mb-6 text-xl sm:text-2xl">Blog</h1>
      <p className="text-base text-muted dark:text-dark-muted">No posts yet. Coming soon.</p>
    </>
  );
}
