import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-cream">
      <div className="container-content grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="font-serif text-lg text-ink-900">
            Rajan Chopra, <span className="italic">MD</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-600">
            A concierge neurology practice offering direct physician access,
            personalized consultation, and continuity of care for a limited
            number of patients and families throughout Southern California.
          </p>
        </div>

        <nav aria-label="Practice" className="md:col-span-3">
          <p className="eyebrow mb-4">Practice</p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="text-ink-700 hover:text-navy">About</Link></li>
            <li><Link href="/services" className="text-ink-700 hover:text-navy">Services</Link></li>
            <li><Link href="/services/brain-health" className="text-ink-700 hover:text-navy">Brain Health</Link></li>
            <li><Link href="/membership" className="text-ink-700 hover:text-navy">Membership</Link></li>
            <li><Link href="/faq" className="text-ink-700 hover:text-navy">FAQ</Link></li>
            <li><Link href="/contact" className="text-ink-700 hover:text-navy">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Legal" className="md:col-span-3">
          <p className="eyebrow mb-4">Legal</p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy" className="text-ink-700 hover:text-navy">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-ink-700 hover:text-navy">Terms of Use</Link></li>
            <li><Link href="/accessibility" className="text-ink-700 hover:text-navy">Accessibility</Link></li>
            <li><Link href="/terms#medical-disclaimer" className="text-ink-700 hover:text-navy">Professional Medical Disclaimer</Link></li>
          </ul>
        </nav>

        <div className="md:col-span-2">
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-ink-700">
            <li>
              <Link href="/contact" className="hover:text-navy">Request a Consultation</Link>
            </li>
            <li className="text-ink-600">By appointment, Southern California</li>
            <li>
              <a href="mailto:info@drrajanchopra.com" className="hover:text-navy">
                info@drrajanchopra.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-200 bg-ink-900">
        <div className="container-content py-5">
          <p className="text-xs leading-relaxed text-ink-200">
            This website does not provide emergency medical services. If you or someone else is experiencing a medical emergency, call 911 or go to the nearest emergency room.
          </p>
        </div>
      </div>

      <div className="border-t border-ink-200">
        <div className="container-content flex flex-col gap-4 py-8 text-xs text-ink-600 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Rajan Chopra, MD. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-navy">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-navy">Terms of Use</Link>
            <Link href="/accessibility" className="hover:text-navy">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
