"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services/brain-health", label: "Brain Health" },
  { href: "/membership", label: "Membership" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-paper/90 backdrop-blur">
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-lg tracking-wide text-ink-900">
          Rajan Chopra, <span className="italic">MD</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`nav-link ${
                pathname === l.href ? "text-navy" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-secondary hidden lg:inline-flex">
          Request a Consultation
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink-900 transition-transform duration-250 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink-900 transition-transform duration-250 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-ink-200 bg-paper px-6 pb-8 pt-4 lg:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="nav-link border-b border-ink-200 py-4"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-5 w-full">
            Request a Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
