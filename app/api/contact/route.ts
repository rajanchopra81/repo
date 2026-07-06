import { NextResponse } from "next/server";

/**
 * INTEGRATION NOTE FOR LAUNCH:
 * This route currently validates and accepts inquiries but does not yet
 * deliver them anywhere. Before publishing, connect a transactional email
 * provider (e.g. Resend, Postmark, SendGrid) or a CRM/inbox integration so
 * that submissions actually reach the practice. A typical implementation:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Website Inquiries <noreply@drrajanchopra.com>",
 *     to: "info@drrajanchopra.com",
 *     subject: `New inquiry: ${reason}`,
 *     text: `${name} (${email}, ${phone})\n\n${message}`,
 *   });
 *
 * Until that integration is added, submissions are not sent or stored
 * anywhere and should not be relied upon as a working intake channel.
 */

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message || !body.reason) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // TODO: wire to a real email/CRM provider before launch (see note above).
  // eslint-disable-next-line no-console
  console.log("New contact inquiry received:", {
    name: body.name,
    email: body.email,
    phone: body.phone,
    reason: body.reason,
    contactMethod: body.contactMethod,
  });

  return NextResponse.json({ ok: true });
}
