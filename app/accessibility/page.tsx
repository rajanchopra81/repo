import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for drrajanchopra.com, describing our commitment to WCAG 2.2 AA accessibility standards.",
  robots: { index: true, follow: true },
};

export default function AccessibilityPage() {
  return (
    <section className="section pt-14 md:pt-20">
      <div className="container-content max-w-prose">
        <p className="eyebrow mb-6">Legal</p>
        <h1 className="text-display-2 font-serif text-ink-900">
          Accessibility Statement
        </h1>
        <p className="mt-4 text-sm text-ink-500">
          Effective Date: July 6, 2026
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-ink-600">
          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Our Commitment
            </h2>
            <p className="mt-3">
              We are committed to ensuring that drrajanchopra.com is
              accessible to all visitors, including people with
              disabilities. This Website has been designed and built with
              reference to the Web Content Accessibility Guidelines (WCAG)
              2.2, Level AA, and we intend for accessibility to be a
              foundational part of the Website itself, rather than an
              add-on applied after the fact.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Measures We Take
            </h2>
            <p className="mt-3">This Website is built using:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Semantic HTML and a logical, consistent heading structure</li>
              <li>Keyboard-operable navigation, menus, and interactive elements</li>
              <li>Visible focus indicators for keyboard navigation</li>
              <li>Descriptive text alternatives for meaningful imagery</li>
              <li>Accessible form labels, instructions, and error handling</li>
              <li>Color combinations selected for sufficient contrast</li>
              <li>Support for reduced-motion preferences</li>
              <li>A responsive layout that adapts across devices and screen sizes</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Ongoing Efforts
            </h2>
            <p className="mt-3">
              Accessibility is treated as an ongoing responsibility rather
              than a one-time project. As this Website is updated, we
              intend to review new content and functionality against the
              same accessibility standards. This Website does not rely on
              automated overlay or plug-in widgets in place of accessible
              design.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Feedback &amp; Assistance
            </h2>
            <p className="mt-3">
              If you encounter an accessibility barrier on this Website, or
              if you need assistance accessing any content, please contact
              us at{" "}
              <a href="mailto:info@drrajanchopra.com" className="underline hover:text-navy">
                info@drrajanchopra.com
              </a>
              . Please describe the issue and the page involved, and we
              will work to address it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
