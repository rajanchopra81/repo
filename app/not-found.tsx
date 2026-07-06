import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section flex min-h-[60vh] items-center pt-14 md:pt-20">
      <div className="container-content max-w-prose">
        <p className="eyebrow mb-6">404</p>
        <h1 className="text-display-2 font-serif text-ink-900">
          This page could not be found.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-600">
          The page you are looking for may have been moved or no longer
          exists. You can return to the homepage, or reach the practice
          directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact the Practice
          </Link>
        </div>
      </div>
    </section>
  );
}
