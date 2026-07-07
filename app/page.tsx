import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    title: "Board-Certified Neurologist",
    body: "Formal training and certification in adult neurology, maintained throughout an active clinical career.",
  },
  {
    title: "Depth of Hospital Experience",
    body: "Years as a neurohospitalist across numerous Southern California hospitals — routine consultations, acute stroke, seizures, and critical neurological illness.",
  },
  {
    title: "Direct Physician Access",
    body: "Patients reach Dr. Chopra directly. Not a call center, and not a rotating panel of covering physicians.",
  },
  {
    title: "Unhurried, Personalized Visits",
    body: "Appointments are structured to allow full evaluation and conversation — time proportioned to the case, not the clock.",
  },
];

const featuredExpertise = [
  "Brain Health & Cognitive Wellness",
  "Stroke",
  "Epilepsy",
  "Headache & Migraine",
  "Movement Disorders",
  "Expert Second Opinions",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section pt-14 md:pt-20">
        <div className="container-content grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">Concierge Neurology · Southern California</p>
            <h1 className="text-display-1 font-serif text-ink-900">
              Neurological care measured in attention,
              <span className="italic"> not minutes.</span>
            </h1>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink-600">
              Dr. Rajan Chopra provides a limited number of patients and
              families with direct access to board-certified neurological
              care — from first consultation through long-term management,
              coordinated personally rather than delegated.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Consultation
              </Link>
              <Link href="/membership" className="btn-secondary">
                View Membership
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <ImagePlaceholder
              label="A comfortable, private setting for a house call"
              aspect="aspect-[3/4]"
              src="/images/interior.jpg"
            />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Credibility strip */}
      <section className="container-content flex flex-wrap items-center justify-between gap-8 py-10 text-xs uppercase tracking-wide2 text-ink-600">
        <span>Board-Certified Neurologist</span>
        <span className="hidden h-4 w-px bg-ink-200 md:block" />
        <span>Neurohospitalist, Southern California</span>
        <span className="hidden h-4 w-px bg-ink-200 md:block" />
        <span>Concierge Practice, Los Angeles &amp; Orange County</span>
        <span className="hidden h-4 w-px bg-ink-200 md:block" />
        <span>By Referral and Application</span>
      </section>

      <div className="divider" />

      {/* Concierge Neurology */}
      <section className="section">
        <div className="container-content grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <ImagePlaceholder
                label="Dr. Rajan Chopra — professional portrait, natural light"
                aspect="aspect-[4/5]"
                src="/images/portrait.jpg"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow mb-6">Concierge Neurology</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                A practice designed around the patient, not the appointment
                slot.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-prose leading-relaxed text-ink-600">
                Most neurological care is constrained by volume — brief
                visits, rotating coverage, and limited continuity between
                the office, the hospital, and specialists. This practice is
                built to remove those constraints. Dr. Chopra maintains a
                deliberately limited number of patients so that each case
                receives the depth of evaluation, coordination, and
                follow-through it requires.
              </p>
              <p className="mt-4 max-w-prose leading-relaxed text-ink-600">
                This model is intended for individuals, executives,
                professional athletes, entertainers, and families who
                require both clinical rigor and discretion — and for whom
                timely, direct access to a physician is not a convenience
                but a necessity.
              </p>
              <Link href="/about" className="btn-ghost mt-8 inline-flex">
                About Dr. Chopra
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Why Choose Dr. Chopra */}
      <section className="section">
        <div className="container-content">
          <Reveal>
            <div className="max-w-prose">
              <p className="eyebrow mb-6">Why Choose Dr. Chopra</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                Depth of experience. Directness of access.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="border-t border-ink-900 pt-6">
                  <h3 className="font-serif text-lg text-ink-900">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Brain Health & Memory Evaluation */}
      <section className="section bg-cream">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow mb-6">Proactive Neurological Care</p>
          </Reveal>
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full bg-paper">
                <h2 className="text-display-3 font-serif text-ink-900">
                  Brain Health &amp; Cognitive Wellness
                </h2>
                <p className="mt-4 leading-relaxed text-ink-600">
                  A dedicated area of the practice focused on evidence-based,
                  individualized evaluation of long-term brain health —
                  addressing modifiable risk factors and building a plan
                  suited to each patient&rsquo;s history and goals.
                </p>
                <Link
                  href="/services/brain-health"
                  className="btn-ghost mt-6 inline-flex"
                >
                  Explore Brain Health
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div
