import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHero, LegalBody, LegalSection, LegalList } from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Privacy & Consumer Health Data Policy: Jessie.Life',
  description:
    'What information Jessie.life may collect, why it is collected, how it may be used or shared, and the choices you have regarding your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHero
        eyebrow="Legal"
        title="Privacy & Consumer Health Data Policy"
        lastUpdated="August 16, 2026"
      />

      <LegalBody>
        <LegalSection heading="Privacy & Consumer Health Data Policy">
          <p>
            Your privacy matters, especially when the information you are sharing relates to your
            health.
          </p>
          <p>
            This policy explains what information Jessie.life may collect, why it is collected,
            how it may be used or shared, and the choices you have regarding your information.
          </p>
          <p>
            This policy applies to information collected through Jessie.life, related forms and
            communications, and services provided through Jessie Faber&rsquo;s health education,
            health-strategy, metabolic-testing, and coaching services.
          </p>
          <p>
            Additional agreements or notices may apply when you enroll in a paid service or use a
            third-party client portal.
          </p>
        </LegalSection>

        <LegalSection heading="Information We May Collect">
          <p>Depending on how you interact with Jessie.life, we may collect:</p>

          <LegalSection heading="Contact and communication information" headingLevel="h3">
            <p>This may include your:</p>
            <LegalList
              items={[
                'First name',
                'Email address',
                'City and state or region',
                'Phone number when voluntarily provided',
                'Messages, questions, or other information you send',
              ]}
            />
          </LegalSection>

          <LegalSection heading="Service and inquiry information" headingLevel="h3">
            <p>
              If you apply for a program, request testing, inquire about hosting an event, or
              purchase a service, we may collect information such as:
            </p>
            <LegalList
              items={[
                'Services you are interested in',
                'Scheduling or location preferences',
                'Application responses',
                'Organization or event information',
                'Information needed to respond to your request or provide the service',
              ]}
            />
          </LegalSection>

          <LegalSection heading="Health and wellness information" headingLevel="h3">
            <p>
              When you apply for or participate in health-related services, you may choose to
              provide information relating to your health or wellness, including:
            </p>
            <LegalList
              items={[
                'Symptoms and health concerns',
                'Health history',
                'Menopause and hormone-related information',
                'Medications and supplements',
                'Laboratory results',
                'Nutrition, movement, sleep, stress, and lifestyle information',
                'Health and fitness goals',
                'Metabolic or fitness-testing information and results',
              ]}
            />
            <p>
              Detailed health information requested as part of a paid service is generally
              collected through the secure Practice Better client portal rather than through
              general website, newsletter, or marketing forms.
            </p>
          </LegalSection>

          <LegalSection heading="Metabolic and fitness-testing information" headingLevel="h3">
            <p>
              When you participate in RMR, VO2, or other metabolic testing, information necessary
              to perform and interpret the test may be collected and processed through the
              testing software and equipment used for that service.
            </p>
          </LegalSection>

          <LegalSection heading="Transaction information" headingLevel="h3">
            <p>
              When you purchase a service, payment information is processed by the applicable
              third-party payment or checkout provider. Jessie.life does not intentionally store
              your complete payment-card number.
            </p>
          </LegalSection>

          <LegalSection heading="Technical information" headingLevel="h3">
            <p>
              The website and its hosting providers may automatically process basic technical
              information necessary to operate, secure, and troubleshoot the website, such as IP
              address, browser or device information, and server logs.
            </p>
          </LegalSection>
        </LegalSection>

        <LegalSection heading="Why We Collect Information">
          <p>We may use information to:</p>
          <LegalList
            items={[
              'Provide a service or resource you requested',
              'Respond to questions or inquiries',
              'Review program applications',
              'Schedule appointments or testing',
              'Provide metabolic or fitness testing',
              'Provide health education, assessments, recommendations, or strategy services',
              'Maintain client records',
              'Communicate with clients about their services',
              'Send requested resources, newsletters, testing-location notifications, or other communications',
              'Manage purchases and payment status',
              'Improve website functionality and service operations',
              'Protect the security and integrity of our systems',
              'Meet legal, accounting, or regulatory obligations',
            ]}
          />
          <p>
            Health-related information is used only for purposes reasonably connected with the
            services or information you request, unless you provide additional consent or
            applicable law otherwise permits the use.
          </p>
        </LegalSection>

        <LegalSection heading="Where Information Comes From">
          <p>Information may come from:</p>
          <LegalList
            items={[
              'You directly',
              'Forms or questionnaires you complete',
              'Files, laboratory reports, or records you choose to provide',
              'Practice Better or other client-service systems used to provide services',
              'Metabolic or fitness-testing software and devices',
              'Laboratories, testing services, healthcare providers, or other sources when you request or authorize the information to be provided',
              'Website hosting and technical systems used to operate Jessie.life',
            ]}
          />
        </LegalSection>

        <LegalSection heading="How Information May Be Shared">
          <p>
            Information may be shared only when reasonably necessary to operate the business,
            provide a service you requested, comply with the law, or carry out an action you
            authorized.
          </p>
          <p>Service providers may include:</p>

          <LegalSection heading="GoHighLevel" headingLevel="h3">
            <p>
              Used for lead management, forms, email communication, marketing automation, and
              related customer-relationship functions.
            </p>
          </LegalSection>

          <LegalSection heading="Practice Better" headingLevel="h3">
            <p>
              Detailed client health information, including health questionnaires, laboratory
              reports, health history, program records, and secure client communication, is
              generally collected and managed through Practice Better rather than through general
              website or marketing forms. Practice Better states that its platform is HIPAA
              compliant and uses security measures designed to protect personal health
              information.
            </p>
          </LegalSection>

          <LegalSection heading="Metabolic-testing platforms" headingLevel="h3">
            <p>
              Testing information may be processed through PNOE or other testing systems used to
              perform and generate metabolic or fitness-testing results.
            </p>
          </LegalSection>

          <LegalSection heading="Laboratories and testing providers" headingLevel="h3">
            <p>
              Information may be shared with laboratories or testing services when you choose to
              order or participate in testing connected with a service.
            </p>
          </LegalSection>

          <LegalSection heading="Payment processors" headingLevel="h3">
            <p>
              Payment information is processed by the payment providers used for the service or
              checkout method you select.
            </p>
          </LegalSection>

          <LegalSection heading="Healthcare professionals" headingLevel="h3">
            <p>
              Information may be shared with a healthcare professional when you specifically
              request or authorize coordination or transmission of information.
            </p>
          </LegalSection>

          <p>
            We may also disclose information when reasonably necessary to comply with law,
            respond to a valid legal process, protect a person&rsquo;s safety, investigate fraud
            or misuse, or protect the rights and security of Jessie.life and its users.
          </p>
        </LegalSection>

        <LegalSection heading="Selling and Advertising Use of Health Information">
          <p>Jessie.life does not sell consumer health data.</p>
          <p>
            Jessie.life does not intentionally share consumer health data for targeted
            advertising or use sensitive health information to build advertising profiles.
          </p>
          <p>
            Contact information may be used to send newsletters, educational resources, service
            information, or other communications you requested or agreed to receive.
          </p>
          <p>You may unsubscribe from marketing emails using the unsubscribe link included in those messages.</p>
        </LegalSection>

        <LegalSection heading="Consumer Health Data Rights">
          <p>
            Depending on where you live and the laws that apply, you may have rights concerning
            your consumer health data.
          </p>
          <p>These may include the right to:</p>
          <LegalList
            items={[
              'Confirm whether consumer health data about you is being collected, shared, or sold',
              'Access consumer health data about you',
              'Request information about third parties or affiliates with whom consumer health data has been shared',
              'Withdraw consent for future collection or sharing when processing is based on consent',
              'Request deletion of consumer health data',
              'Appeal a decision regarding a privacy request',
            ]}
          />
          <p>
            To make a privacy or consumer-health-data request, email:{' '}
            <Link href="mailto:contact@jessie.life" className="font-bold text-terracotta">
              contact@jessie.life
            </Link>
          </p>
          <p>
            Please include <strong className="text-ink">Privacy Request</strong> in the subject
            line and explain what you are requesting.
          </p>
          <p>We may need to verify your identity before providing, changing, or deleting information.</p>
          <p>
            Requests will be handled within the time required by applicable law. If a request is
            denied, you may ask for the decision to be reviewed by replying to the response and
            stating that you wish to appeal the privacy decision.
          </p>
          <p>You will not be discriminated against for exercising applicable privacy rights.</p>
        </LegalSection>

        <LegalSection heading="Data Retention">
          <p>
            Information is retained only as long as reasonably necessary for the purposes for
            which it was collected, to provide ongoing services, maintain appropriate business
            and client records, satisfy legal or accounting requirements, resolve disputes, or
            protect the business and its clients.
          </p>
          <p>
            Deletion requests will be honored when required by applicable law, subject to any
            information that must legally or legitimately be retained.
          </p>
        </LegalSection>

        <LegalSection heading="Data Security">
          <p>
            Jessie.life uses reasonable administrative, technical, and operational measures
            intended to protect personal and health-related information based on the nature of
            the information and the systems being used.
          </p>
          <p>
            Access to sensitive information is intended to be limited to people and service
            providers who reasonably need it to perform their role.
          </p>
          <p>No website, electronic system, or method of transmission can be guaranteed to be completely secure.</p>
        </LegalSection>

        <LegalSection heading="Third-Party Services and Links">
          <p>Jessie.life may link to or use services operated by other companies.</p>
          <p>
            Those companies maintain their own privacy practices and policies. This policy does
            not control how an independent third party handles information that you provide
            directly to that third party.
          </p>
        </LegalSection>

        <LegalSection heading="Children's Privacy">
          <p>
            Jessie.life and its health services are intended for adults and are not designed for
            children under 18.
          </p>
          <p>We do not knowingly use the website to solicit personal health information from children.</p>
        </LegalSection>

        <LegalSection heading="Changes to This Policy">
          <p>
            This policy may be updated as the website, services, technology, or legal
            requirements change.
          </p>
          <p>
            If data practices materially change, this policy will be updated before information
            is intentionally used for materially different purposes when consent or notice is
            required.
          </p>
          <p>The current version and its effective date will always be posted on this page.</p>
        </LegalSection>

        <LegalSection heading="Questions About Privacy">
          <p>
            For privacy questions or requests, contact:{' '}
            <Link href="mailto:contact@jessie.life" className="font-bold text-terracotta">
              contact@jessie.life
            </Link>
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
