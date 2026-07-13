import { NextResponse } from 'next/server';

/**
 * Midlife Reboot application — routing logic per
 * "Midlife Reboot Application & Routing Logic" (July 2026).
 *
 * GREEN  -> tag "Reboot Application — Clear Fit"  -> redirect to Practice Better checkout
 * YELLOW -> tag "Reboot Application — Review"     -> review confirmation + internal notification
 * RED    -> tag "Reboot Application — Not a Fit"  -> respectful routing to Audit / Resource Lab
 *
 * Conditional logic only — no visible point score. RED takes priority over YELLOW.
 * Env vars:
 *   GHL_APPLICATION_WEBHOOK        — GHL inbound webhook (tagging + notification + application copy)
 *   PRACTICE_BETTER_CHECKOUT_URL   — Reboot checkout link (pay-in-full & payment-plan selection happens in PB)
 */

const SCOPE_YES =
  'Yes. I understand that Jessie provides education and health strategy and does not diagnose disease, prescribe medication, provide emergency care, or replace my licensed medical providers.';
const LAB_FEES_YES =
  'Yes. I understand that existing labs will be used when appropriate, additional labs are likely, and I will receive access to Jessie’s wholesale lab pricing.';
const READY = 'I am ready to begin and make this a priority.';
const PAY_FULL = 'Yes, I am ready to pay in full.';
const PAY_PLAN = 'Yes, I plan to use the available payment plan.';
const SUPPORT_STRATEGY = 'A strategy, clear priorities, education, and follow-up so I can implement.';
const NO_GUARANTEE = 'No. I understand outcomes vary and depend on many factors.';

type Route = 'green' | 'yellow' | 'red';

function computeRoute(d: Record<string, string>): Route {
  /* ---------- RED — do not send to checkout ---------- */
  const red =
    d.labsWilling === 'No' || // unwilling to complete needed labs
    d.participation === 'No' || // unwilling to participate
    d.guaranteedOutcome === 'Yes' || // expects a guaranteed outcome
    d.supportType === 'Frequent reassurance and daily direction for most decisions.' || // intensive daily direction
    d.supportType === 'Someone to tell me exactly what to do without needing much participation from me.' || // take over all decisions
    d.investment === 'No, this investment is not currently feasible.'; // investment not feasible
  if (red) return 'red';

  /* ---------- GREEN — all required conditions met ---------- */
  const green =
    d.scope === SCOPE_YES && // affirms non-medical scope
    d.labsWilling === 'Yes' && // willing to complete intake + labs
    d.labFees === LAB_FEES_YES && // understands lab costs are separate
    d.readiness === READY && // ready to begin
    (d.investment === PAY_FULL || d.investment === PAY_PLAN) && // can pay in full or plan
    d.supportType === SUPPORT_STRATEGY && // wants strategy + follow-up
    d.guaranteedOutcome === NO_GUARANTEE && // no guaranteed-outcome expectation
    d.participation === 'Yes' && // willing to participate
    d.transition !== 'Other / needs explanation' && // needs explanation -> review
    !(d.reasons || '').includes('A complicated health history that does not fit one box') && // complex history -> review
    !(d.barriers || '').trim(); // disclosed barriers -> review
  if (green) return 'green';

  /* ---------- YELLOW — everything else gets a personal review ---------- */
  return 'yellow';
}

const TAGS: Record<Route, string> = {
  green: 'Reboot Application — Clear Fit',
  yellow: 'Reboot Application — Review',
  red: 'Reboot Application — Not a Fit',
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Record<string, string>;

    if (!data.fullName || !data.email) {
      return NextResponse.json(
        { message: 'Please provide at least your full name and email.' },
        { status: 400 }
      );
    }

    const route = computeRoute(data);
    const tag = TAGS[route];

    const webhook = process.env.GHL_APPLICATION_WEBHOOK;
    if (webhook) {
      // Send the application copy + tag to GHL (GHL handles internal notification,
      // application-copy email, and review-queue task per automation notes).
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, tag, route, source: 'reboot-application' }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { message: 'We could not submit your application right now. Please try again shortly.' },
          { status: 502 }
        );
      }
    } else {
      console.log('[reboot-application] (no GHL webhook set)', { tag, route, email: data.email });
    }

    return NextResponse.json({
      route,
      redirectUrl: route === 'green' ? process.env.PRACTICE_BETTER_CHECKOUT_URL || '#' : undefined,
    });
  } catch {
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
