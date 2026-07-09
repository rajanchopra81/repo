import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your inquiry has been received.",
  robots: { index: false, follow: false },
};

export default function ContactThankYouPage() {
  return (
    <section className="section pt-14 md:pt-20">
      <div className="container-content max-w-prose">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="text-display-2 font-serif text-ink-900">
            Thank you for reaching out.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-600">
            Your inquiry has been received and will be reviewed personally by
            Dr. Chopra&rsquo;s office. You can expect a response within one to
            two business days.
          </p>
          <p className="mt-4 leading-relaxed text-ink-600">
            If you are experiencing a medical emergency, call 911 or go to the
            nearest emergency room.
          </p>
          <Link href="/" className="btn-ghost mt-10 inline-flex">
            Return home
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
