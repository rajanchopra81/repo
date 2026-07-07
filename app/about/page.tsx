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
                  conventional office visit rarely
