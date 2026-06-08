import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, service, message, locale } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "hello@ifrit.co";

    if (apiKey) {
      const emailBody = `
New enquiry from Ifrit website

Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp || "Not provided"}
Service: ${service || "Not specified"}
Language: ${locale === "ar" ? "Arabic" : "English"}

Message:
${message}
      `.trim();

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Ifrit Website <noreply@ifrit.co>",
          to: [toEmail],
          subject: `New Enquiry: ${service || "General"} — ${name}`,
          text: emailBody,
          reply_to: email,
        }),
      });
    } else {
      // Dev mode — log to console
      console.log("Contact form submission (dev mode):", { name, email, whatsapp, service, message, locale });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
