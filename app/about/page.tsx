import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Dr. Rajan Chopra",
  description:
    "Dr. Rajan Chopra is a board-certified neurologist and neurohospitalist providing concierge neurological care to a limited number of patients and families in Southern California.",
};

const expertise = [
  "Concierge Neurology",
  "Brain Health & Cognitive Wellness",
  "Memory Evaluation",
  "Cognitive Assessment",
  "Healthy Cognitive Aging",
  "Brain Health Optimization",
  "Stroke",
  "Epilepsy",
  "Headache & Migraine",
  "Parkinson's Disease",
  "Movement Disorders",
  "Peripheral Neuropathy",
  "Multiple Sclerosis",
  "Neuromuscular Disorders",
  "Balance Disorders",
  "Dizziness",
  "Expert Second Opinions",
  "Hospital Care Coordination",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero / opening bio */}
      <section className="section pt-14 md:pt-20">
        <div className="container-content grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">About</p>
              <h1 className="text-display-2 font-serif text-ink-900">
                A Southern California neurologist, trained at the bedside.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink-600">
                Dr. Rajan Chopra is a board-certified neurologist who has
                spent his career caring for patients throughout Southern
                California, the region where he was born and raised.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={150}>
              <ImagePlaceholder
                label="Dr. Rajan Chopra — professional portrait, natural light"
                aspect="aspect-[4/5]"
                src="/images/portrait.jpg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Credential strip */}
      <div className="divider" />
      <section className="container-content flex flex-wrap items-center justify-between gap-6 py-10 text-xs uppercase tracking-wide2 text-ink-600">
        <span>Board-Certified Neurologist</span>
        <span className="hidden h-4 w-px bg-ink-200 md:block" />
        <span>Neurology Residency – West Virginia University</span>
        <span className="hidden h-4 w-px bg-ink-200 md:block" />
        <span>Neurohospitalist</span>
        <span className="hidden h-4 w-px bg-ink-200 md:block" />
        <span>Serving Los Angeles, Orange County &amp; the Inland Empire</span>
      </section>
      <div className="divider" />

      {/* Full biography */}
      <section className="section">
        <div className="container-content grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">Background</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                Bedside experience, at scale
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <div className="max-w-prose space-y-5 leading-relaxed text-ink-600">
                <p>
                  Dr. Chopra completed his neurology residency at West
                  Virginia University before returning to Southern
                  California, where he has spent his career in practice.
                </p>
                <p>
                  As a neurohospitalist, he has cared for patients across
                  numerous hospitals throughout Southern California,
                  managing everything from routine neurological
                  consultations to acute stroke, seizures, and critically
                  ill neurological patients in the intensive care unit. That
                  breadth of experience — rather than any single
                  institution — has shaped his understanding of both common
                  and complex neurological conditions.
                </p>
                <p>
                  He founded his concierge practice on a simple premise:
                  that meaningful neurological care requires time that a
                  conventional office visit rarely allows. Appointments are
                  longer. Communication is direct. Care plans are built
                  around the patient in front of him, not a fixed template.
                </p>
                <p>
                  Brain health, memory, and cognitive wellness are central to
                  his practice. Dr. Chopra provides comprehensive cognitive
                  evaluation, considered second opinions, and evidence-based
                  guidance for patients seeking to understand a memory
                  concern, address a modifiable risk factor, or maintain
                  cognitive function as they age.
                </p>
                <p>
                  His practice is built for patients who value privacy,
                  direct physician access, and continuity — and the
                  assurance of an experienced neurologist available when a
                  medical decision matters.
                </p>
                <p>
                  For select members, house calls are available throughout
                  Los Angeles, Orange County, and the Inland Empire when
                  clinically appropriate.{" "}
                  <Link href="/contact" className="text-navy underline underline-offset-4 hover:text-navy-deep">
                    View service areas
                  </Link>
                  .
                </p>
                <p>
                  Dr. Chopra believes exceptional neurological care begins
                  with listening. The relationships he builds with patients
                  are meant to last — supporting both immediate neurological
                  needs and long-term brain health.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Clinical Expertise */}
      <section className="section">
        <div className="container-content">
          <Reveal>
            <div className="max-w-prose">
              <p className="eyebrow mb-6">Clinical Expertise</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                Areas of focused clinical care
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, i) => (
              <Reveal key={item} delay={(i % 6) * 60}>
                <div className="flex h-full items-center bg-paper px-8 py-7">
                  <span className="font-serif text-base text-ink-900">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Link href="/services" className="btn-ghost mt-10 inline-flex">
            View All Services
          </Link>
        </div>
      </section>

      <div className="divider" />

      {/* Who this is designed for */}
      <section className="section bg-cream">
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">Who This Practice Serves</p>
            <h2 className="text-display-3 font-serif text-ink-900">
              Designed for a direct physician relationship
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-5 leading-relaxed text-ink-600">
              <p>
                This practice is designed for individuals who prefer a
                direct relationship with their physician — not a rotating
                panel of covering doctors or a brief slot on a crowded
                schedule.
              </p>
              <p>
                Patients who choose concierge neurology tend to value their
                privacy and expect the same discretion in their medical care
                that they apply to other areas of their lives. They want a
                physician who is reachable when a question or concern
                arises, not weeks later.
              </p>
              <p>
                They also value time: the time to describe symptoms fully,
                to ask questions, and to understand a diagnosis or treatment
                plan before deciding how to proceed. A comprehensive
                evaluation, not a rushed one, is the standard they expect.
              </p>
              <p>
                Above all, they are looking for a physician relationship
                built on continuity — care that evolves with them over
                years, grounded in evidence and thoughtful judgment rather
                than convenience or volume.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* Philosophy of Care */}
      <section className="section">
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">Philosophy of Care</p>
            <h2 className="text-display-3 font-serif text-ink-900">
              Listening first, deciding carefully
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-5 leading-relaxed text-ink-600">
              <p>
                Dr. Chopra&rsquo;s approach to medicine begins with
                listening. Before any recommendation is made, he takes the
                time to understand a patient&rsquo;s history, priorities,
                and concerns — because an accurate diagnosis and a sound
                treatment plan both depend on it.
              </p>
              <p>
                Every patient is different, and so is every plan of care.
                Dr. Chopra does not apply a standard protocol to a complex
                condition; he considers the individual&rsquo;s symptoms,
                history, and goals, and builds a plan suited to that patient
                alone.
              </p>
              <p>
                Time is central to this approach. Complex neurological
                questions are rarely resolved in a ten-minute visit, and
                Dr. Chopra structures his practice so that appointments are
                long enough for genuine evaluation and conversation.
              </p>
              <p>
                Brain health is a particular focus of his practice — not
                only in response to a diagnosed condition, but as a matter
                of ongoing attention. Where evidence supports it, Dr. Chopra
                discusses modifiable risk factors and preventive strategies
                with his patients, and he places significant value on early
                evaluation, since many neurological conditions are best
                addressed when identified promptly.
              </p>
              <p>
                Dr. Chopra also works closely with a patient&rsquo;s other
                physicians — primary care providers, surgeons, and
                specialists — so that neurological care is coordinated
                rather than siloed. He views this collaboration as essential
                to sound decision-making.
              </p>
              <p>
                Above all, Dr. Chopra is committed to building long-term
                relationships with his patients. He believes that
                accessibility, attentiveness, and continuity allow him to
                provide thoughtful, evidence-based care — delivered with the
                same compassion he would want for his own family.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
