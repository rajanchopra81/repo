"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card bg-cream" role="status">
        <p className="font-serif text-lg text-ink-900">
          Thank you for reaching out.
        </p>
        <p className="mt-3 leading-relaxed text-ink-600">
          Your inquiry has been received and will be reviewed personally by
          Dr. Chopra&rsquo;s office. You can expect a response within one to
          two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-ink-700">
            Full Name<span aria-hidden="true"> *</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-ink-600 bg-paper px-4 py-3 text-ink-900 focus-visible:border-navy"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-ink-700">
            Email<span aria-hidden="true"> *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-ink-600 bg-paper px-4 py-3 text-ink-900 focus-visible:border-navy"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm text-ink-700">
            Phone <span className="text-ink-500">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-ink-600 bg-paper px-4 py-3 text-ink-900 focus-visible:border-navy"
          />
        </div>
        <div>
          <label htmlFor="reason" className="mb-2 block text-sm text-ink-700">
            Reason for Inquiry<span aria-hidden="true"> *</span>
          </label>
          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            className="w-full border border-ink-600 bg-paper px-4 py-3 text-ink-900 focus-visible:border-navy"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="new-consultation">New Consultation</option>
            <option value="second-opinion">Second Opinion</option>
            <option value="membership">Membership Inquiry</option>
            <option value="existing-patient">Existing Patient</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 block text-sm text-ink-700">
          Preferred Contact Method
        </legend>
        <div className="flex gap-8">
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="radio" name="contactMethod" value="email" defaultChecked />
            Email
          </label>
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="radio" name="contactMethod" value="phone" />
            Phone
          </label>
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink-700">
          Message<span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-describedby="message-hint"
          className="w-full border border-ink-600 bg-paper px-4 py-3 text-ink-900 focus-visible:border-navy"
        />
        <p id="message-hint" className="mt-2 text-xs leading-relaxed text-ink-500">
          Please do not include urgent or highly sensitive medical
          information in this message. See our Privacy Policy for details.
        </p>
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-700">
        <input type="checkbox" name="acknowledgement" required className="mt-1" />
        <span>
          I understand this form is not for medical emergencies and that
          submitting it does not establish a physician&ndash;patient
          relationship.
        </span>
      </label>

      <button type="submit" className="btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit Inquiry"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-ink-700">
          Something went wrong sending your message. Please try again, or
          email us directly at{" "}
          <a href="mailto:Rajan@drrajanchopra.com" className="underline">
            Rajan@drrajanchopra.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
