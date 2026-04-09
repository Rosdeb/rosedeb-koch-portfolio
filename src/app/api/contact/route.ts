import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API is working ✅" });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, "");
    const contactRecipient = process.env.CONTACT_RECIPIENT || emailUser;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!emailUser || !emailPass || !contactRecipient) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: contactRecipient,
      subject: `New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
