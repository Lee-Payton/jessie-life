import { NextResponse } from 'next/server';

// Midlife Reboot application handoff to GoHighLevel.
// GHL handles the direct-checkout vs manual-review logic downstream.
// Set GHL_APPLICATION_WEBHOOK in Vercel env to the GHL inbound webhook URL.
export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email) {
      return NextResponse.json(
        { message: 'Please provide at least your name and email.' },
        { status: 400 }
      );
    }

    const webhook = process.env.GHL_APPLICATION_WEBHOOK;

    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'reboot-application' }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { message: 'We could not submit your application right now. Please try again shortly.' },
          { status: 502 }
        );
      }
    } else {
      console.log('[reboot-application] (no GHL webhook set)', data);
    }

    return NextResponse.json({
      message:
        'Thank you for applying to the Midlife Reboot. Jessie will review your application and follow up with next steps, including checkout, within a few business days.',
    });
  } catch {
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
