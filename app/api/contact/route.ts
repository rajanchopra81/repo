import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message || !body.reason) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Website Inquiries <onboarding@resend.dev>",
        to: "Rajan@drrajanchopra.com",
        subject: `New inquiry: ${body.reason}`,
        text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || "Not provided"}\nPreferred contact method: ${body.contactMethod}\n\nMessage:\n${body.message}`,
        reply_to: body.email,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      // eslint-disable-next-line no-console
      console.error("Resend error:", errText);
      return NextResponse.json({ error: "Failed to send." }, { status: 502 });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Contact form email error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
