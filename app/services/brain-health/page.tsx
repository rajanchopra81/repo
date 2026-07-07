import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Brain Health & Cognitive Wellness",
  description:
    "A dedicated, evidence-based approach to memory, cognitive wellness, and healthy cognitive aging, from board-certified neurologist Dr. Rajan Chopra.",
};

const riskFactors = [
  "Blood Pressure",
  "Diabetes",
  "Cholesterol",
  "Sleep",
  "Exercise",
  "Nutrition",
  "Hearing",
  "Mood",
  "Medication Review",
];

const advancedEvaluation = [
  {
    title: "MRI",
    body: "Structural brain imaging, ordered when clinically appropriate to evaluate a specific finding or concern.",
  },
  {
    title: "Laboratory Evaluation",
    body: "Bloodwork to assess for treatable or contributing medical causes of cognitive change, when clinically indicated.",
  },
  {
    title: "Neuropsychological Testing",
    body: "Formal, standardized cognitive testing performed in collaboration with a neuropsychologist when a more detailed profile is warranted.",
  },
  {
    title: "Advanced Blood Biomarkers",
    body: "Emerging biomarker testing, used only when clinically appropriate and supported by current medical evidence.",
  },
];

const journey = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "An unhurried discussion of history, concerns, and goals related to memory and cognitive health.",
  },
  {
    n: "02",
    title: "Comprehensive Neurological Evaluation",
    body: "Clinical examination and structured cognitive assessment, along with a review of relevant health factors.",
  },
  {
    n: "03",
    title: "Personalized Brain Health Plan",
    body: "An individualized set of recommendations, developed collaboratively and grounded in current evidence.",
  },
  {
    n: "04",
    title: "Concierge Follow-Up",
    body: "Ongoing monitoring and direct access to Dr. Chopra as circumstances or questions evolve.",
  },
];

export default function BrainHealthPage() {
  return (
    <>
      <section className="section pt-14 md:pt-20">
        <div className="container-content grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6">Brain Health &amp; Cognitive Wellness</p>
              <h1 className="text-display-2 font-serif text-ink-900">
                A proactive approach to brain health, grounded in evidence.
              </h1>
              <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink-600">
                Memory and cognitive concerns deserve the same rigor, time,
                and continuity as any other area of neurological care. This
                is a dedicated focus of Dr. Chopra&rsquo;s practice, for
                patients addressing a specific concern and for those who
                wish to understand and monitor their cognitive health over
                time.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={100}>
              <ImagePlaceholder
                label="Minimalist neurology artwork — brain health"
                aspect="aspect-[3/4]"
                src="/images/brain-health.jpg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Understanding memory & cognitive wellness */}
      <section className="section">
        <div className="container-content grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">Understanding the Terms</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                Memory, wellness, and healthy aging
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <div className="max-w-prose space-y-5 leading-relaxed text-ink-600">
                <p>
                  Memory concerns take many forms — occasional forgetfulness,
                  a family history of cognitive decline, or a noticeable
                  change in thinking or recall. Cognitive wellness refers to
                  the ongoing state of attention, memory, language, and
                  executive function that allows a person to think, plan,
                  and communicate effectively. Healthy cognitive aging
                  describes the goal of supporting that function, to the
                  extent possible, as a patient grows older.
                </p>
                <p>
                  Dr. Chopra approaches each of these areas individually. An
                  evaluation may address a specific concern, or it may serve
                  as a baseline assessment for a patient who wishes to
                  monitor cognitive health over time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Comprehensive evaluation + risk factors */}
      <section className="section bg-cream">
        <div className="container-content grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">Comprehensive Evaluation</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                A structured neurological and cognitive assessment
              </h2>
              <p className="mt-6 max-w-prose leading-relaxed text-ink-600">
                Evaluation begins with a detailed clinical history and
                neurological examination, followed by a structured
                assessment of cognitive function — attention, memory,
                language, and executive function are each considered
                individually.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={100}>
              <p className="mb-6 max-w-prose leading-relaxed text-ink-600">
                Many factors associated with cognitive health are part of a
                patient&rsquo;s broader medical picture. As part of a brain
                health risk assessment, Dr. Chopra reviews:
              </p>
              <div className="grid gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-3">
                {riskFactors.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center bg-paper px-4 py-6 text-center"
                  >
                    <span className="font-serif text-base text-ink-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Advanced evaluation when appropriate */}
      <section className="section">
        <div className="container-content">
          <Reveal>
            <div className="max-w-prose">
              <p className="eyebrow mb-6">Advanced Evaluation, When Appropriate</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                Additional testing is selective, not routine.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-600">
                Not every evaluation requires advanced testing. When
                clinically indicated, Dr. Chopra may recommend:
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {advancedEvaluation.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="border-t border-ink-900 pt-6">
                  <h3 className="font-serif text-lg text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-10 max-w-prose text-sm leading-relaxed text-ink-500">
              These evaluations are used selectively, based on clinical
              judgment, rather than applied as a routine or standardized
              battery for every patient.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* Your Brain Health Journey */}
      <section className="section bg-cream">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow mb-6 text-center">Your Brain Health Journey</p>
          </Reveal>
          <div className="mt-4 grid gap-10 lg:grid-cols-4">
            {journey.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="border-t border-ink-900 pt-6">
                  <span className="font-serif text-sm text-ink-500">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-serif text-lg text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Evidence framing / disclaimer */}
      <section className="section">
        <div className="container-content max-w-3xl">
          <Reveal>
            <div className="card">
              <p className="eyebrow mb-4">A Note on Evidence &amp; Expectations</p>
              <p className="leading-relaxed text-ink-600">
                Brain health evaluation cannot guarantee the prevention of
                dementia, enhance cognitive performance, or predict future
                outcomes. Every recommendation made through this practice is
                individualized to the patient and grounded in current
                medical evidence, intended to support informed, proactive
                decisions about neurological health — not to promise a
                particular result.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      <section className="bg-navy-deep py-20 text-navy-mist md:py-28">
        <div className="container-content max-w-2xl">
          <h2 className="text-display-3 font-serif text-paper">
            Begin a brain health evaluation.
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
