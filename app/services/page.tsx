import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Concierge neurology services from Dr. Rajan Chopra, including brain health evaluation, hospital coordination, and care for stroke, epilepsy, movement disorders, and more.",
};

const services: { title: string; body: string; href: string }[] = [
  {
    title: "Concierge Neurology",
    body: "A membership-based model providing enhanced physician access, priority scheduling, and personalized care coordination. Professional medical services are billed separately.",
    href: "/membership",
  },
  {
    title: "Brain Health & Cognitive Wellness",
    body: "Individualized, evidence-based evaluation of long-term brain health, including modifiable risk factors related to memory and cognitive function.",
    href: "/services/brain-health",
  },
  {
    title: "Memory Evaluation",
    body: "Comprehensive assessment of memory concerns, drawing on clinical history, cognitive testing, and imaging when appropriate.",
    href: "/services/brain-health",
  },
  {
    title: "Cognitive Assessment",
    body: "Structured evaluation of attention, language, executive function, and related cognitive domains.",
    href: "/services/brain-health",
  },
  {
    title: "Healthy Cognitive Aging",
    body: "Ongoing, individualized guidance for patients who wish to understand and support cognitive function over time.",
    href: "/services/brain-health",
  },
  {
    title: "Stroke",
    body: "Evaluation and management of stroke and cerebrovascular disease, including risk factor assessment and coordinated follow-up.",
    href: "/contact",
  },
  {
    title: "Epilepsy",
    body: "Diagnosis and long-term management of seizure disorders, including medication management and specialist coordination.",
    href: "/contact",
  },
  {
    title: "Headache & Migraine",
    body: "Evaluation and individualized management of migraine and other primary headache disorders.",
    href: "/contact",
  },
  {
    title: "Parkinson's Disease",
    body: "Diagnosis and ongoing management of Parkinson's disease and related neurodegenerative conditions.",
    href: "/contact",
  },
  {
    title: "Movement Disorders",
    body: "Evaluation of tremor, gait disturbance, and other movement-related neurological conditions.",
    href: "/contact",
  },
  {
    title: "Peripheral Neuropathy",
    body: "Assessment of nerve-related symptoms such as numbness, tingling, and weakness, including evaluation of underlying causes.",
    href: "/contact",
  },
  {
    title: "Multiple Sclerosis",
    body: "Diagnosis, monitoring, and coordinated long-term management of multiple sclerosis and related conditions.",
    href: "/contact",
  },
  {
    title: "Neuromuscular Disorders",
    body: "Evaluation of conditions affecting the nerves and muscles, including weakness and abnormal fatigue.",
    href: "/contact",
  },
  {
    title: "Balance Disorders",
    body: "Assessment of imbalance and gait instability, with attention to underlying neurological contributors.",
    href: "/contact",
  },
  {
    title: "Dizziness",
    body: "Evaluation of dizziness and vertigo, distinguishing neurological causes from other contributing factors.",
    href: "/contact",
  },
  {
    title: "Executive Brain Health",
    body: "A comprehensive, evidence-based evaluation of long-term cognitive health, available to members and non-members. Learn more on the Brain Health page.",
    href: "/services/brain-health",
  },
  {
    title: "Hospital Care Coordination",
    body: "Direct communication with hospital teams, surgeons, and specialists, so that care remains cohesive across every setting.",
    href: "/contact",
  },
  {
    title: "House Calls",
    body: "In-home evaluation and follow-up for select concierge members, when clinically appropriate.",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section pt-14 md:pt-20">
        <div className="container-content max-w-prose">
          <Reveal>
            <p className="eyebrow mb-6">Services</p>
            <h1 className="text-display-2 font-serif text-ink-900">
              A defined set of services, delivered without compromise.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-600">
              Each area of care reflects Dr. Chopra&rsquo;s clinical
              background as a neurohospitalist and his ongoing focus on
              brain health. Every recommendation is individualized to the
              patient and grounded in current medical evidence.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      <section className="section pt-14">
        <div className="container-content">
          <div className="grid gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 6) * 50}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col justify-between bg-paper p-8 transition-colors duration-250 hover:bg-cream md:p-9"
                >
                  <div>
                    <h2 className="font-serif text-lg text-ink-900">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">
                      {s.body}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex text-xs uppercase tracking-wide2 text-navy opacity-0 transition-opacity duration-250 group-hover:opacity-100">
                    Learn More
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="bg-navy-deep py-20 text-navy-mist md:py-28">
        <div className="container-content max-w-2xl">
          <h2 className="text-display-3 font-serif text-paper">
            Discuss which services are right for you.
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
