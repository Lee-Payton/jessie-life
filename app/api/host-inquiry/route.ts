import { NextResponse } from 'next/server';

// Host inquiry handoff to GoHighLevel.
// Set GHL_HOST_WEBHOOK in Vercel env to the GHL inbound webhook URL.
export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.organization) {
      return NextResponse.json(
        { message: 'Please complete the required fields (name, email, organization).' },
        { status: 400 }
      );
    }

    const webhook = process.env.GHL_HOST_WEBHOOK;

    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'host-inquiry' }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { message: 'We could not submit your inquiry right now. Please try again shortly.' },
          { status: 502 }
        );
      }
    } else {
      console.log('[host-inquiry] (no GHL webhook set)', data);
    }

    return NextResponse.json({
      message: 'Thank you — your host inquiry has been received. Jessie will review the fit and follow up with a proposal.',
    });
  } catch {
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
