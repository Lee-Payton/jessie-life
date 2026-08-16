import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHero, LegalBody, LegalSection } from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Website Disclaimer: Jessie.Life',
  description:
    'Information about the educational nature of Jessie.life services, medical care and prescribing, and the scope of metabolic and fitness testing.',
};

export default function DisclaimerPage() {
  return (
    <>
      <LegalHero eyebrow="Legal" title="Website Disclaimer" lastUpdated="August 16, 2026" />

      <LegalBody>
        <LegalSection heading="Website Disclaimer">
          <p>
            The information provided through Jessie.life, the Resource Lab, educational
            materials, programs, consultations, metabolic testing, and related communications is
            intended for education, wellness, and health-strategy purposes.
          </p>
          <p>
            It is not a substitute for individualized medical diagnosis, treatment, prescribing,
            or emergency medical care.
          </p>
        </LegalSection>

        <LegalSection heading="Medical Care and Prescribing">
          <p>
            Jessie Faber is a functional health practitioner and health educator. Jessie does not
            diagnose disease, prescribe medication, or independently start, stop, or change
            prescription medications.
          </p>
          <p>
            Information about menopause, hormone therapy, medications, supplements, laboratory
            testing, health conditions, or treatment options is provided for educational purposes
            and to help you make more informed decisions and have more productive conversations
            with appropriately licensed healthcare professionals.
          </p>
          <p>
            Jessie may help clients understand available options, prepare questions and
            information for medical appointments, and navigate access to menopause-informed
            clinicians, prescribers, telehealth platforms, or other healthcare resources.
          </p>
          <p>
            The final medical evaluation, diagnosis, prescription, and treatment decisions remain
            the responsibility of you and the appropriately licensed healthcare professional
            providing that care.
          </p>
          <p>
            Use of Jessie.life does not guarantee that a specific provider will prescribe a
            particular medication or treatment.
          </p>
        </LegalSection>

        <LegalSection heading="Emergency and Urgent Medical Care">
          <p>Jessie.life does not provide emergency or urgent medical services.</p>
          <p>
            If you believe you are experiencing a medical emergency, contact emergency services
            or seek appropriate urgent medical care.
          </p>
          <p>Do not use website forms, email, program messaging, or coaching communication for emergencies.</p>
        </LegalSection>

        <LegalSection heading="Laboratory and Health Information">
          <p>
            Laboratory results and other health information may be reviewed as part of an
            educational health-strategy service.
          </p>
          <p>
            This review is intended to help identify patterns, questions, priorities, and areas
            that may deserve further discussion or evaluation.
          </p>
          <p>
            It does not replace diagnostic interpretation or medical evaluation by an
            appropriately licensed healthcare professional.
          </p>
        </LegalSection>

        <LegalSection heading="Metabolic and Fitness Testing">
          <p>
            Resting metabolic rate, VO2, and related breath testing offered through Jessie.life
            are wellness and fitness assessments unless specifically stated otherwise.
          </p>
          <p>
            They are not diagnostic cardiopulmonary exercise tests, cardiac stress tests, or
            medical diagnostic procedures.
          </p>
          <p>
            Some health conditions, symptoms, medications, injuries, or other circumstances may
            make testing inappropriate or require medical clearance before participation.
          </p>
        </LegalSection>

        <LegalSection heading="No Guaranteed Outcomes">
          <p>
            Health, symptoms, metabolism, fitness, body composition, laboratory values, and
            responses to lifestyle or medical interventions vary substantially between
            individuals.
          </p>
          <p>
            No particular result, symptom improvement, weight change, laboratory value, treatment
            response, or health outcome is guaranteed.
          </p>
          <p>
            Recommendations and educational information are intended to support better-informed
            decisions, not promise a specific result.
          </p>
        </LegalSection>

        <LegalSection heading="Your Healthcare Team">
          <p>Jessie.life services are designed to complement appropriate medical care, not replace it.</p>
          <p>
            You are responsible for deciding when to seek evaluation from a physician or other
            licensed healthcare professional and for discussing medical decisions with the
            professionals responsible for your care.
          </p>
        </LegalSection>

        <LegalSection heading="Third-Party Resources">
          <p>
            Jessie.life may reference or link to laboratories, telehealth companies, healthcare
            professionals, products, supplements, research, websites, or other third-party
            services.
          </p>
          <p>
            Providing information about a third party does not guarantee the quality,
            availability, suitability, licensing, pricing, or outcome of that service.
          </p>
          <p>Always review the terms, qualifications, policies, and risks of any third-party service before using it.</p>
        </LegalSection>

        <LegalSection heading="Client Relationship">
          <p>
            Viewing Jessie.life, subscribing to the Resource Lab, joining an email list,
            completing a public application, or sending a website inquiry does not by itself
            create a practitioner-client relationship.
          </p>
          <p>
            A client relationship begins only when you enroll in an applicable service and
            complete any required enrollment process or agreement.
          </p>
        </LegalSection>

        <LegalSection heading="Questions">
          <p>
            Questions about Jessie.life services can be sent to:{' '}
            <Link href="mailto:contact@jessie.life" className="font-bold text-terracotta">
              contact@jessie.life
            </Link>
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
