import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for drrajanchopra.com, describing how information submitted through this website is collected, used, and protected.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="section pt-14 md:pt-20">
      <div className="container-content max-w-prose">
        <p className="eyebrow mb-6">Legal</p>
        <h1 className="text-display-2 font-serif text-ink-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-500">
          Effective Date: July 6, 2026
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-ink-600">
          <div>
            <h2 className="font-serif text-xl text-ink-900">Overview</h2>
            <p className="mt-3">
              This Privacy Policy describes how information is collected,
              used, and protected when you visit drrajanchopra.com (the
              &ldquo;Website&rdquo;), operated on behalf of the practice of
              Rajan Chopra, MD (&ldquo;the Practice,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us&rdquo;). This Policy applies only
              to information collected through the Website. It does not
              describe how protected health information is handled within
              an established physician&ndash;patient relationship, which is
              governed by a separate Notice of Privacy Practices provided
              directly to patients in connection with their care.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Information We Collect
            </h2>
            <p className="mt-3">
              When you submit an inquiry through this Website, we may
              collect the information you choose to provide, which may
              include your name, email address, phone number, reason for
              inquiry, and any message you include. We may also collect
              limited technical information automatically, such as browser
              type, device type, and general usage patterns, in order to
              maintain and improve the Website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Please Do Not Submit Urgent or Highly Sensitive Information
            </h2>
            <p className="mt-3">
              This Website and its contact form are not a secure patient
              portal and are not monitored continuously. Please do not use
              this Website to submit urgent medical concerns, detailed
              clinical information, or highly sensitive medical information.
              If you are experiencing a medical emergency, call 911 or go
              to the nearest emergency room. Detailed medical information
              should be shared directly with the Practice through secure,
              patient-specific channels established after an inquiry has
              been accepted.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              How We Use Information
            </h2>
            <p className="mt-3">
              Information submitted through this Website is used to
              respond to your inquiry, evaluate potential fit for the
              Practice, and communicate with you about scheduling or
              membership. We do not sell personal information collected
              through this Website to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Cookies &amp; Analytics
            </h2>
            <p className="mt-3">
              The Website may use cookies or similar technologies, and may
              use third-party analytics tools, to understand how visitors
              use the Website and to improve its performance. You can
              control cookies through your browser settings; disabling
              cookies may affect certain Website functionality.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Third-Party Service Providers
            </h2>
            <p className="mt-3">
              We may rely on third-party service providers to operate parts
              of this Website, such as hosting, email delivery, and
              analytics. These providers may process information on our
              behalf and are expected to maintain appropriate safeguards
              for that information.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Data Security
            </h2>
            <p className="mt-3">
              We use reasonable administrative and technical measures
              intended to protect information submitted through this
              Website. No method of transmission over the internet is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              California Privacy Rights
            </h2>
            <p className="mt-3">
              California residents may have rights under the California
              Consumer Privacy Act (CCPA), as amended, including the right
              to request access to, deletion of, or information about
              personal information we hold about you, and the right not to
              be discriminated against for exercising these rights. We do
              not sell personal information as defined under the CCPA.
              Medical information collected in connection with treatment
              may also be protected under the California Confidentiality of
              Medical Information Act (CMIA) and other applicable law. To
              submit a privacy request, please contact us using the
              details below.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Children&rsquo;s Privacy
            </h2>
            <p className="mt-3">
              This Website is not directed to children, and we do not
              knowingly collect personal information from children through
              this Website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. The
              effective date above reflects the date of the most recent
              revision.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink-900">Contact Us</h2>
            <p className="mt-3">
              Questions about this Privacy Policy may be directed to{" "}
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
