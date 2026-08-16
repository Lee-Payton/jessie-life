import { NextResponse } from 'next/server';

// Resource Lab / notification-list opt-in handoff to GoHighLevel.
// Set GHL_SUBSCRIBE_WEBHOOK in Vercel env to the GHL inbound webhook URL.
const GENERIC_ERROR = 'Something went wrong while submitting your information. Please try again.';

export async function POST(request: Request) {
  try {
    const { firstName, email, source, city, region } = await request.json();

    if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
      return NextResponse.json(
        { message: 'Please enter your first name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const webhook = process.env.GHL_SUBSCRIBE_WEBHOOK;

    if (!webhook) {
      // No webhook configured — the submission cannot be forwarded, so do not report success.
      console.error('[subscribe] GHL_SUBSCRIBE_WEBHOOK is not configured; submission was not forwarded.', {
        email,
        source,
      });
      return NextResponse.json({ message: GENERIC_ERROR }, { status: 500 });
    }

    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        email,
        source: source || 'site',
        tag: source || 'site',
        ...(city ? { city } : {}),
        ...(region ? { region } : {}),
      }),
    });
    if (!res.ok) {
      console.error('[subscribe] GHL webhook responded with an error status', res.status);
      return NextResponse.json({ message: GENERIC_ERROR }, { status: 502 });
    }

    return NextResponse.json({
      message: 'You’re on the list. Watch your inbox for your first resources.',
    });
  } catch (err) {
    console.error('[subscribe] Unexpected error', err);
    return NextResponse.json({ message: GENERIC_ERROR }, { status: 500 });
  }
}
