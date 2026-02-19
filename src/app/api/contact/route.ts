import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const toEmail = process.env.CONTACT_EMAIL;
    if (!toEmail) {
      console.error("CONTACT_EMAIL env variable is not set");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      replyTo: email,
      subject: `Portfolio Contact from ${safeName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">
            New Message from Portfolio
          </h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f4; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
            ${safeMessage}
          </div>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #e5e5e5;" />
          <p style="color: #78716c; font-size: 12px;">
            Sent via your portfolio contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
