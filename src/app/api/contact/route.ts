import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: "Server configuration error: Missing API Key" },
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

        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["sccsmart247@gmail.com"], // Replace with your email
            subject: `New Message from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            replyTo: email,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
