import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Dr. Rajan Chopra's concierge neurology practice, membership, brain health evaluation, and service areas.",
};

const groups: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "About the Practice",
    items: [
      {
        q: "What is concierge neurology?",
        a: "Concierge neurology is a membership-based model of care that provides direct access to a neurologist, longer appointments, and continuity across evaluation and treatment — rather than care divided among a rotating group of providers.",
      },
      {
        q: "How is this practice different from a traditional neurology office?",
        a: "Traditional neurology practices are often structured around volume, with brief visits and limited availability. This practice maintains a deliberately limited number of patients so that each person receives more time, direct physician access, and coordinated follow-through.",
      },
      {
        q: "Who is concierge neurology designed for?",
        a: "This practice is designed for individuals who value a direct relationship with their physician, privacy and discretion in their care, and the time required for a comprehensive evaluation and thoughtful decision-making.",
      },
      {
        q: "Does Dr. Chopra treat both new and existing neurological conditions?",
        a: "Yes. The practice evaluates new neurological symptoms as well as manages existing or ongoing conditions, including complex or previously diagnosed cases.",
      },
      {
        q: "What conditions does Dr. Chopra treat?",
        a: "Dr. Chopra's clinical focus includes stroke, epilepsy, headache and migraine, Parkinson's disease and other movement disorders, peripheral neuropathy, multiple sclerosis, neuromuscular disorders, balance disorders, and dizziness, in addition to brain health and cognitive wellness. Please visit the Services page for a complete list.",
      },
    ],
  },
  {
    category: "Membership & Access",
    items: [
      {
        q: "Does Dr. Chopra accept insurance?",
        a: "This practice operates on a membership basis rather than through traditional insurance billing. Patients with specific billing or reimbursement questions are encouraged to contact the practice directly.",
      },
      {
        q: "How do I become a member?",
        a: "Membership begins with an inquiry through the practice's contact page. Availability is intentionally limited, and each inquiry is reviewed personally by Dr. Chopra's office.",
      },
      {
        q: "How long are appointments?",
        a: "Appointments are intentionally longer than a typical office visit, with time allocated based on the complexity of the concern rather than a fixed schedule.",
      },
      {
        q: "Can I schedule an appointment for a family member?",
        a: "Yes. Please contact the practice directly, and a member of the office will assist with next steps.",
      },
      {
        q: "How do I get started?",
        a: "Please visit the Contact page to submit an inquiry. Inquiries are reviewed personally by Dr. Chopra's office.",
      },
    ],
  },
  {
    category: "Clinical Care",
    items: [
      {
        q: "What happens during an initial consultation?",
        a: "An initial consultation includes a detailed discussion of medical history and current concerns, a neurological examination, and time to ask questions before any next steps are recommended.",
      },
      {
        q: "Can I request a second opinion without becoming a member?",
        a: "Second opinion consultations are available as a standalone service. Please contact the practice to discuss your specific situation.",
      },
      {
        q: "What is included in a brain health evaluation?",
        a: "A brain health evaluation typically includes a clinical history, cognitive assessment, and review of relevant health factors such as sleep, blood pressure, and mood. Additional testing, such as MRI or neuropsychological evaluation, is recommended only when clinically appropriate.",
      },
      {
        q: "Can brain health evaluation prevent dementia?",
        a: "No evaluation or treatment can guarantee the prevention of dementia or another cognitive condition. Dr. Chopra's approach is to provide individualized, evidence-based guidance regarding modifiable risk factors and overall cognitive health.",
      },
      {
        q: "How does Dr. Chopra coordinate care with other physicians?",
        a: "Dr. Chopra communicates directly with a patient's other physicians, specialists, and hospital teams to help ensure that neurological care remains coordinated with the rest of a patient's medical care.",
      },
    ],
  },
  {
    category: "Logistics & Privacy",
    items: [
      {
        q: "Does the practice offer telemedicine?",
        a: "Telemedicine consultations are available when clinically appropriate, particularly for follow-up visits or for members who are traveling.",
      },
      {
        q: "Are house calls available?",
        a: "House calls are available for select concierge members, when clinically appropriate, throughout Los Angeles, Orange County, and the Inland Empire.",
      },
      {
        q: "What areas does the practice serve?",
        a: "The practice is based in Southern California and serves patients throughout Los Angeles, Orange County, and the Inland Empire. Please visit the Contact page for a full list of service areas.",
      },
      {
        q: "What if I need to be seen urgently?",
        a: "This website does not provide emergency medical services. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room. For urgent but non-emergency concerns, members should contact the practice directly.",
      },
      {
        q: "Is my information kept private?",
        a: "Patient privacy and discretion are central to this practice. Please review the Privacy Policy for details on how information is handled, and avoid submitting urgent or highly sensitive medical information through website forms or email.",
      },
    ],
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="section pt-14 md:pt-20">
        <div className="container-content max-w-prose">
          <Reveal>
            <p className="eyebrow mb-6">FAQ</p>
            <h1 className="text-display-2 font-serif text-ink-900">
              Frequently Asked Questions
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-600">
              Answers to the questions patients and families ask most often
              about the practice, membership, and clinical care.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {groups.map((group, gi) => (
        <section
          key={group.category}
          className={`section ${gi % 2 === 1 ? "bg-cream" : ""}`}
        >
          <div className="container-content grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="text-display-3 font-serif text-ink-900">
                  {group.category}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-ink-200 border-y border-ink-200">
                {group.items.map((item) => (
                  <details key={item.q} className="faq-item group">
                    <summary>
                      <span className="pr-4">{item.q}</span>
                      <span className="faq-icon" aria-hidden="true" />
                    </summary>
                    <p className="max-w-prose pb-6 leading-relaxed text-ink-600">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="divider" />

      <section className="bg-navy-deep py-20 text-navy-mist md:py-28">
        <div className="container-content max-w-2xl">
          <h2 className="text-display-3 font-serif text-paper">
            Still have a question?
          </h2>
          <p className="mt-5 leading-relaxed text-navy-mist/80">
            Reach out directly, and a member of the practice will respond
            personally.
          </p>
          <Link
            href="/contact"
            className="btn mt-9 inline-flex border border-paper/40 text-paper hover:bg-paper hover:text-navy-deep"
          >
            Contact the Practice
          </Link>
        </div>
      </section>
    </>
  );
}
