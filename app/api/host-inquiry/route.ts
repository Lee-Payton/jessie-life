import { NextResponse } from 'next/server';

// Host inquiry handoff to GoHighLevel.
// Set GHL_HOST_WEBHOOK in Vercel env to the GHL inbound webhook URL.
const GENERIC_ERROR = 'Something went wrong while submitting your information. Please try again.';

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

    if (!webhook) {
      console.error('[host-inquiry] GHL_HOST_WEBHOOK is not configured; submission was not forwarded.');
      return NextResponse.json({ message: GENERIC_ERROR }, { status: 500 });
    }

    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, source: 'host-inquiry' }),
    });
    if (!res.ok) {
      console.error('[host-inquiry] GHL webhook responded with an error status', res.status);
      return NextResponse.json({ message: GENERIC_ERROR }, { status: 502 });
    }

    return NextResponse.json({
      message: 'Thank you. Your host inquiry has been received. Jessie will review the fit and follow up with a proposal.',
    });
  } catch (err) {
    console.error('[host-inquiry] Unexpected error', err);
    return NextResponse.json({ message: GENERIC_ERROR }, { status: 500 });
  }
}
