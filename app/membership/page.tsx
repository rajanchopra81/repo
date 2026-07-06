import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Concierge neurology membership with Dr. Rajan Chopra — direct physician access, longer appointments, and personalized, coordinated neurological care.",
};

const includes = [
  {
    title: "Longer Appointments",
    body: "Consultations structured to allow full evaluation and conversation, without the constraints of a conventional office visit.",
  },
  {
    title: "Direct Physician Access",
    body: "A direct line to Dr. Chopra — not a call center, and not a rotating panel of covering physicians.",
  },
  {
    title: "Personalized Care Plans",
    body: "Recommendations built around each member's individual history, goals, and circumstances.",
  },
  {
    title: "Priority Scheduling",
    body: "Timely access to appointments for both new concerns and ongoing management.",
  },
  {
    title: "Comprehensive Record Review",
    body: "Careful review of prior evaluations, imaging, and treatment history before a plan is proposed.",
  },
  {
    title: "Care Coordination",
    body: "Direct communication with specialists, surgeons, and hospital teams, so care remains cohesive across settings.",
  },
  {
    title: "Brain Health Planning",
    body: "Ongoing, individualized attention to memory, cognitive wellness, and healthy cognitive aging.",
  },
  {
    title: "Telemedicine",
    body: "Secure virtual consultation where appropriate, for members who travel or prefer a remote visit.",
  },
  {
    title: "House Calls",
    body: "In-home evaluation and follow-up when clinically appropriate, throughout the practice's service areas.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <section className="section pt-14 md:pt-20">
        <div className="container-content max-w-prose">
          <Reveal>
            <p className="eyebrow mb-6">Membership</p>
            <h1 className="text-display-2 font-serif text-ink-900">
              Care structured around an ongoing relationship, not isolated
              visits.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-600">
              Membership is intended for patients and families with
              ongoing, complex, or evolving neurological needs — providing
              the continuity, access, and coordination that a single office
              visit cannot.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* What membership includes */}
      <section className="section">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow mb-6">What Membership Includes</p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item, i) => (
              <Reveal key={item.title} delay={(i % 6) * 50}>
                <div className="h-full bg-paper p-8 md:p-9">
                  <h2 className="font-serif text-lg text-ink-900">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Intentionally limited */}
      <section className="section bg-cream">
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">Availability</p>
            <h2 className="text-display-3 font-serif text-ink-900">
              A deliberately limited membership
            </h2>
            <p className="mt-6 leading-relaxed text-ink-600">
              Memberships are intentionally limited to maintain a highly
              personalized physician&ndash;patient relationship. Please
              contact the practice regarding availability and membership
              options.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep py-20 text-navy-mist md:py-28">
        <div className="container-content max-w-2xl">
          <h2 className="text-display-3 font-serif text-paper">
            Inquire about membership.
          </h2>
          <p className="mt-5 leading-relaxed text-navy-mist/80">
            Inquiries are reviewed personally by Dr. Chopra&rsquo;s office.
          </p>
          <Link
            href="/contact"
            className="btn mt-9 inline-flex border border-paper/40 text-paper hover:bg-paper hover:text-navy-deep"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
