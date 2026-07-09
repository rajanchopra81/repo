import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Concierge neurology membership with Dr. Rajan Chopra — enhanced physician access, priority scheduling, and personalized care coordination. Professional medical services are billed separately.",
};

const includes = [
  {
    title: "Enhanced Physician Access",
    body: "A direct line to Dr. Chopra — not a call center, and not a rotating panel of covering physicians.",
  },
  {
    title: "Priority Scheduling",
    body: "Priority access to appointment availability for both new concerns and ongoing management.",
  },
  {
    title: "Direct Physician Communication",
    body: "Thoughtful, unhurried communication through a private channel, with the physician who knows your history.",
  },
  {
    title: "Care Coordination",
    body: "Imaging, laboratory testing, and specialist referrals arranged, expedited, and interpreted for you.",
  },
  {
    title: "Medical-Record Organization",
    body: "Prior evaluations, imaging, and treatment history gathered, organized, and reviewed before a plan is proposed.",
  },
  {
    title: "Hospital Care Coordination",
    body: "Direct communication with hospital teams, surgeons, and specialists, so care remains cohesive across settings.",
  },
  {
    title: "Concierge Administrative Support",
    body: "Prescription refill processing, prior-authorization support, and the quiet logistics of complex care.",
  },
  {
    title: "Wellness & Preventive Planning",
    body: "Ongoing, individualized planning to support long-term brain health and cognitive wellness.",
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
              ongoing, complex, or evolving neurological needs. It provides
              enhanced physician access, concierge communication,
              personalized care coordination, and other non-covered
              concierge services. Professional medical services are billed
              separately.
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

      {/* How care is billed */}
      <section className="section">
        <div className="container-content grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">How Care Is Billed</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                Membership and medical care are separate
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <div className="max-w-prose space-y-5 leading-relaxed text-ink-600">
                <p>
                  The annual membership covers the non-covered concierge
                  services described above. Professional medical services —
                  consultations, follow-up visits, telemedicine, home
                  visits, and Executive Brain Health evaluations — are billed
                  separately. You will always know the cost of a service
                  before it is provided.
                </p>
                <p>
                  Dr. Chopra participates in Medicare, and covered services
                  are billed to Medicare in the usual way. For commercial
                  insurance, the practice is out of network and does not bill
                  carriers directly; a superbill is available on request for
                  any out-of-network reimbursement. Your membership never
                  pays for or replaces covered medical care, and membership
                  is not required to receive it.
                </p>
              </div>
            </Reveal>
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
