import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // safer for SDKs

export async function POST(req: Request) {
  try {
    const { name, email, message, hp } = await req.json().catch(() => ({}));

    if (hp) return NextResponse.json({ ok: true }); // honeypot
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const API_KEY = process.env.RESEND_API_KEY;
    if (!API_KEY) {
      // clear message for local dev / Vercel logs
      return NextResponse.json({ ok: false, error: "RESEND_API_KEY not set" }, { status: 500 });
    }

    const resend = new Resend(API_KEY);

    const to = process.env.EMAIL_TO ?? "kivex41188@haotuwu.com";
    const from = process.env.EMAIL_FROM ?? "Portfolio <onboarding@resend.dev>";
    const subject = `New inquiry from ${name}`;

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu">
        <h2 style="margin:0 0 12px 0">New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>
      </div>
    `;

    await resend.emails.send({
      to,
      from,
      subject,
      html,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]!));
}
