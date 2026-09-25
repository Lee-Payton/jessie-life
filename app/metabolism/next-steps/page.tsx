import type { Metadata } from 'next';
import { Section, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: "You're Booked: Next Steps | Jessie.Life",
  description:
    'A simple checklist of what happens after booking metabolic testing or the Midlife Metabolism & Hormone Audit with Jessie.',
};

const startHere = [
  {
    title: 'Activate your Practice Better Client Portal.',
    body: "You'll receive an invitation by email. Please activate it even if you booked only one test. It gives you one place to find appointments, forms, tasks, and messages from Jessie. Appointment confirmations and reminders will also be sent to your email.",
  },
  {
    title: 'Complete the intake you receive.',
    body: 'Standalone testing clients will receive a short metabolic testing intake. Midlife Metabolism & Hormone Audit clients will receive the more comprehensive hormone + metabolism assessment. Please complete it as soon as you can so Jessie can review it before your appointment.',
  },
  {
    title: 'Watch for a separate PNOĒ registration email.',
    body: 'Jessie will set up your testing profile within 24 to 48 hours of booking. PNOĒ will then email you an invitation to register your account. Please complete that before testing.',
  },
  {
    title: 'Book VO₂ Max if it is not already scheduled.',
    body: (
      <>
        If your package includes VO₂ Max and it is not already scheduled, book it through your
        Practice Better Client Portal. You can find this under the Packages or Bookings section of
        your portal. This applies to the RMR + VO₂ Max bundle and the{' '}
        <span className="whitespace-nowrap">Midlife Metabolism & Hormone Audit + VO₂ Max</span>.
      </>
    ),
  },
  {
    title: 'Review your testing preparation before your appointment.',
    body: (
      <>
        Your confirmation and reminder emails will include the important instructions, and you can{' '}
        <a href="/metabolism#preparation" className="text-forest underline underline-offset-2">
          review them anytime here
        </a>
        . You&rsquo;ll sign your testing waiver when you arrive.
      </>
    ),
  },
];

const afterTesting = [
  {
    title: 'RMR or VO₂ Max only',
    body: "You'll receive your complete PNOĒ results plus Jessie's personalized plain-English summary within 72 hours of your test.",
  },
  {
    title: 'RMR + VO₂ Max bundle',
    body: 'Complete both tests. Your combined results and personalized summary will be available within 72 hours after your final test.',
  },
  {
    title: 'Midlife Metabolism & Hormone Audit',
    body: "Complete your assessment and RMR. Once Jessie has reviewed your information and prepared your Audit, you'll be invited to schedule your 45-minute private consultation. Your personalized roadmap and relevant resources are part of the Audit process.",
  },
  {
    title: 'Midlife Metabolism & Hormone Audit + VO₂ Max',
    body: "Complete your assessment, RMR, and VO₂ Max. Once everything has been reviewed, you'll be invited to schedule your 45-minute Audit consultation, followed by your personalized roadmap and resources.",
  },
];

export default function NextStepsPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>After Booking</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">
              You&rsquo;re booked. Here&rsquo;s what happens next.
            </h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Your confirmation email and other notifications are on the way. There are a few
              things that happen between booking and your appointment, depending on what you
              purchased.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Start here checklist */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Start here</h2>
          <ol className="mt-8 space-y-8">
            {startHere.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest font-body text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <p className="font-body text-lg font-bold text-ink">{step.title}</p>
                  <p className="mt-2 font-body text-ink/75">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Section 3 — What happens after testing */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">What happens after testing?</h2>
          <div className="mt-8 space-y-8">
            {afterTesting.map((item, i) => (
              <div key={i} className="border-l-4 border-sage pl-5">
                <h3 className="text-lg text-forest">{item.title}</h3>
                <p className="mt-2 font-body text-ink/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — Questions */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Questions?</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            You can message Jessie through your Practice Better Client Portal. If you need to
            change a testing appointment and the online rescheduling option is no longer
            available, reply to your appointment email or send a Practice Better message as soon
            as possible.
          </p>
        </div>
      </Section>
    </>
  );
}
