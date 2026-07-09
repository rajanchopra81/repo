import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for drrajanchopra.com, including important disclaimers about the informational nature of this website and its content.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="section pt-14 md:pt-20">
      <div className="container-content max-w-prose">
        <p className="eyebrow mb-6">Legal</p>
        <h1 className="text-display-2 font-serif text-ink-900">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-ink-500">
          Effective Date: July 6, 2026
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-ink-600">
          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing or using drrajanchopra.com (the
              &ldquo;Website&rdquo;), you agree to these Terms of Use. If
              you do not agree with these terms, please do not use the
              Website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Informational Purposes Only
            </h2>
            <p className="mt-3">
              The content of this Website, including descriptions of
              services, clinical focus areas, and general health
              information, is provided for general informational purposes
              only. It is not intended to be comprehensive and does not
              address individual circumstances.
            </p>
          </div>

          <div
            id="medical-disclaimer"
            className="scroll-mt-28 border-y border-ink-200 py-8"
          >
            <h2 className="font-serif text-xl text-ink-900">
              Professional Medical Disclaimer
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Nothing on this Website constitutes medical advice, and no
                content on this Website should be used to diagnose or
                treat any medical condition. Reading this Website does not
                and is not intended to create a physician&ndash;patient
                relationship between you and Dr. Rajan Chopra or the
                Practice. A physician&ndash;patient relationship is
                established only after a formal engagement, such as a
                scheduled consultation or accepted membership, on terms
                agreed to directly with the Practice.
              </p>
              <p>
                Submitting an inquiry through this Website&rsquo;s contact
                form does not, by itself, establish a
                physician&ndash;patient relationship and does not
                guarantee acceptance as a patient or member.
              </p>
              <p>
                This Website does not provide emergency medical services.
                If you or someone else is experiencing a medical emergency,
                call 911 or go to the nearest emergency room. Do not rely
                on this Website, email, or the contact form for urgent
                medical concerns.
              </p>
              <p>
                Descriptions of clinical focus areas and evaluation methods
                on this Website are general in nature. Any recommendation
                regarding a specific patient&rsquo;s diagnosis, evaluation,
                or treatment is made individually, based on that
                patient&rsquo;s history and circumstances, and is not
                implied or guaranteed by anything described on this
                Website.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this Website, including text, graphics, and
              design elements, is the property of the Practice or its
              licensors and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create
              derivative works from this content without prior written
              permission.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Third-Party Links
            </h2>
            <p className="mt-3">
              This Website may contain links to third-party websites. We
              are not responsible for the content, accuracy, or privacy
              practices of any third-party website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, the Practice and its
              affiliates shall not be liable for any damages arising from
              your use of, or inability to use, this Website or its
              content.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Scope; Medical Matters Governed Separately
            </h2>
            <p className="mt-3">
              These Terms govern your use of the Website only. They do not
              govern the provision of medical care. Any matter relating to
              medical services — including any dispute concerning care,
              treatment, or a physician&ndash;patient relationship — is
              governed solely by the applicable patient agreement, and not by
              these Terms. Nothing in these Terms requires a website visitor
              to arbitrate, or otherwise resolve, any medical or
              professional-liability claim.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Changes to These Terms
            </h2>
            <p className="mt-3">
              We may revise these Terms of Use from time to time. The
              effective date above reflects the date of the most recent
              revision. Continued use of the Website after changes are
              posted constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Governing Law
            </h2>
            <p className="mt-3">
              These Terms of Use are governed by the laws of the State of
              California, without regard to its conflict of law
              principles.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">Contact Us</h2>
            <p className="mt-3">
              Questions about these Terms of Use may be directed to{" "}
              <a href="mailto:Rajan@drrajanchopra.com" className="underline hover:text-navy">
                Rajan@drrajanchopra.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
