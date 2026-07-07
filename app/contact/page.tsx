import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation with Dr. Rajan Chopra. Concierge neurology serving Los Angeles, Orange County, and the Inland Empire, with house calls available for select members.",
};

const regions = [
  {
    name: "Los Angeles",
    cities: [
      "Beverly Hills",
      "Bel Air",
      "Brentwood",
      "Santa Monica",
      "Malibu",
      "West Hollywood",
    ],
  },
  {
    name: "Orange County",
    cities: [
      "Newport Beach",
      "Newport Coast",
      "Corona del Mar",
      "Laguna Beach",
      "Irvine",
      "Coto de Caza",
    ],
  },
  {
    name: "Inland Empire",
    cities: ["Claremont", "Upland", "Rancho Cucamonga", "La Verne", "Chino Hills"],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section pt-14 md:pt-20">
        <div className="container-content max-w-prose">
          <Reveal>
            <p className="eyebrow mb-6">Contact</p>
            <h1 className="text-display-2 font-serif text-ink-900">
              Begin with a private consultation.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-600">
              Every inquiry is reviewed personally by Dr. Chopra&rsquo;s
              office. Please share as much detail as you are comfortable
              providing, and a member of the practice will follow up
              directly.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container-content grid gap-16 lg:grid-cols-12">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">Service Areas</p>
              <h2 className="text-display-3 font-serif text-ink-900">
                House Calls
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-ink-600">
                House calls are available for select concierge members,
                when clinically appropriate, throughout the following
                areas.
              </p>
            </Reveal>

            <div className="mt-10 space-y-8">
              {regions.map((region, i) => (
                <Reveal key={region.name} delay={i * 80}>
                  <div className="border-t border-ink-900 pt-4">
                    <h3 className="eyebrow mb-3">{region.name}</h3>
                    <p className="leading-relaxed text-ink-600">
                      {region.cities.join(", ")}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-12 space-y-4 border-t border-ink-200 pt-8 text-sm leading-relaxed text-ink-600">
                <p>
                  <span className="font-medium text-ink-900">Email: </span>
                  <a href="mailto:Rajan@drrajanchopra.com" className="hover:text-navy">
                    Rajan@drrajanchopra.com
                  </a>
                </p>
                <p>
                  A direct phone line is provided to members personally
                  once an inquiry has been reviewed and accepted.
                </p>
                <p className="text-ink-500">
                  Please avoid including urgent or highly sensitive medical
                  information in this form or by email. See our{" "}
                  <a href="/privacy" className="underline hover:text-navy">
                    Privacy Policy
                  </a>{" "}
                  for details.
                </p>
                <p className="text-ink-500">
                  This website does not provide emergency medical services.
                  If you or someone else is experiencing a medical
                  emergency, call 911 or go to the nearest emergency room.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
