import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'The Midlife Metabolism Audit — Jessie.Life',
  description:
    'A focused whole-health consultation built around measured resting metabolism, your symptom picture, and real-life factors. $295.',
};

export default function AuditPage() {
  return (
    <PageStub
      eyebrow="$295 Assessment"
      title="The Midlife Metabolism Audit"
      description="A focused whole-health consultation built around objective metabolic testing, your symptom picture, and the real-life factors that influence how your body is functioning right now."
    />
  );
}
