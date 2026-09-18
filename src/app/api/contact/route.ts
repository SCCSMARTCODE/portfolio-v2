import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("Contact Form Error: RESEND_API_KEY environment variable is missing.");
        return NextResponse.json(
            { error: "Server configuration error: RESEND_API_KEY is not configured on server." },
            { status: 500 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "emmanuelay.adewumi@gmail.com";

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [receiverEmail],
            subject: `New Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
            replyTo: email,
        });

        if (error) {
            console.error("Resend API Delivery Error:", error);
            return NextResponse.json(
                { error: error.message || "Failed to deliver message via email service." },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Contact Form Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

