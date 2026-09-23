import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHero, LegalBody, LegalSection } from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Booking, Cancellation & Rescheduling Policy: Jessie.Life',
  description:
    'Cancellation, rescheduling, and no-show terms for metabolic testing appointments and virtual consultations booked with Jessie Faber d/b/a dotLife Optimal Health.',
};

export default function BookingPolicyPage() {
  return (
    <>
      <LegalHero
        eyebrow="Legal"
        title="Booking, Cancellation & Rescheduling Policy"
        lastUpdated="August 16, 2026"
      />

      <LegalBody>
        <LegalSection>
          <p>
            This policy applies to appointments and services booked with Jessica (Jessie) Faber
            d/b/a dotLife Optimal Health.
          </p>
          <p>
            By booking or purchasing a service or package, you acknowledge and agree to the
            applicable cancellation and rescheduling terms below.
          </p>
        </LegalSection>

        <LegalSection heading="Metabolic Testing Appointments">
          <p>
            RMR and VO₂ Max appointments require advance preparation, and testing availability may
            be limited to specific dates and locations. Because last-minute testing appointments
            are difficult to refill, the following policy applies to standalone testing and
            testing included in a package.
          </p>
        </LegalSection>

        <LegalSection heading="2 or More Calendar Days Before Your Appointment" headingLevel="h3">
          <p>You may reschedule at no additional charge.</p>
          <p>
            If you cancel instead of rescheduling, your payment will be retained as a credit
            toward a future eligible testing appointment.
          </p>
        </LegalSection>

        <LegalSection heading="The Day Before Your Appointment" headingLevel="h3">
          <p>
            You may reschedule the appointment one time by applying your original payment plus a
            $50 rescheduling fee.
          </p>
        </LegalSection>

        <LegalSection heading="The Day of Your Appointment or a No-Show" headingLevel="h3">
          <p>The payment for that appointment is forfeited.</p>
          <p>A new appointment must be booked at the current full price.</p>
        </LegalSection>

        <LegalSection heading="Late Arrival or Arriving Unprepared" headingLevel="h3">
          <p>
            If you arrive too late to complete the test properly or safely, or if preparation
            requirements were not followed closely enough to obtain a useful result, the
            appointment will be treated as a same-day change.
          </p>
          <p>
            If you have not already used the one-time $50 rescheduling option for that
            appointment, you may reschedule once by paying the $50 fee.
          </p>
          <p>
            A repeated late arrival, preparation issue, or additional change requires a new
            appointment at the current full price.
          </p>
        </LegalSection>

        <LegalSection heading="Temporary Testing Locations and Credits" headingLevel="h3">
          <p>
            Testing credits do not expire, but they are subject to Jessie&apos;s future testing
            dates, locations, and availability.
          </p>
          <p>
            Because testing is offered at temporary and changing locations, a credit does not
            guarantee that Jessie will return to the same location or make a special trip to
            provide the test.
          </p>
        </LegalSection>

        <LegalSection heading="How to Request a Change" headingLevel="h3">
          <p>
            Cancellation or rescheduling requests must be made directly through dotLife Optimal
            Health / Jessie using the available Practice Better scheduling or communication
            method.
          </p>
          <p>Telling the host facility, gym, studio, or another third party does not count as notice to Jessie.</p>
        </LegalSection>

        <LegalSection
          heading="If Testing Cannot Be Completed for Reasons Outside Your Control"
          headingLevel="h3"
        >
          <p>
            If you arrive appropriately prepared but Jessie determines that testing should not
            proceed or be completed for safety reasons, you may choose a complimentary reschedule
            or a refund for the affected test.
          </p>
          <p>
            The same options apply if testing cannot be completed because of a provider,
            host-facility, or equipment issue.
          </p>
        </LegalSection>

        <LegalSection heading="Bundles and Packages" headingLevel="h3">
          <p>
            When RMR and VO₂ Max are purchased together, each scheduled test is treated as its own
            appointment under this policy.
          </p>
          <p>
            A cancellation, late arrival, preparation issue, or rescheduling fee affecting one test
            does not automatically cancel the other test.
          </p>
        </LegalSection>

        <LegalSection heading="Virtual Consultations">
          <p>
            Virtual consultations may be included in a package or purchased as a separate service.
            Consultation fees are nonrefundable, but appointments may be rescheduled under the
            terms below.
          </p>
        </LegalSection>

        <LegalSection heading="24 Hours or More Before Your Consultation" headingLevel="h3">
          <p>You may reschedule at no additional charge.</p>
        </LegalSection>

        <LegalSection heading="Less Than 24 Hours Before Your Consultation" headingLevel="h3">
          <p>
            Late cancellations and same-day rescheduling requests are subject to a $25
            rescheduling fee before a new appointment is booked.
          </p>
        </LegalSection>

        <LegalSection heading="Missed Consultations / No-Shows" headingLevel="h3">
          <p>
            A missed virtual consultation may be rescheduled, but a $25 rescheduling fee applies
            before a new appointment is booked.
          </p>
        </LegalSection>

        <LegalSection heading="Provider Rescheduling" headingLevel="h3">
          <p>If Jessie needs to reschedule an appointment, no rescheduling fee applies.</p>
        </LegalSection>

        <LegalSection heading="Acknowledgment">
          <p>
            By completing a booking or purchase, you acknowledge that you have reviewed and agree
            to the booking, cancellation, and rescheduling policy that applies to your appointment
            or package.
          </p>
        </LegalSection>

        <LegalSection heading="Questions">
          <p>
            Questions about this policy can be sent to:{' '}
            <Link href="mailto:contact@jessie.life" className="font-bold text-terracotta">
              contact@jessie.life
            </Link>
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
