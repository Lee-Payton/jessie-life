import { NextResponse } from 'next/server';

// Resource Lab / notification-list opt-in handoff to GoHighLevel.
// Set GHL_SUBSCRIBE_WEBHOOK in Vercel env to the GHL inbound webhook URL.
export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const webhook = process.env.GHL_SUBSCRIBE_WEBHOOK;

    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: source || 'site', tag: source || 'site' }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { message: 'We could not add you right now. Please try again shortly.' },
          { status: 502 }
        );
      }
    } else {
      // No webhook configured yet — log so nothing is lost during build phase.
      console.log('[subscribe] (no GHL webhook set)', { email, source });
    }

    return NextResponse.json({
      message: 'You’re on the list. Watch your inbox for your first resources.',
    });
  } catch {
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
