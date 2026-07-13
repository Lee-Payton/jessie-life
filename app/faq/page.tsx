import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Jessie.Life',
  description:
    'Answers about program scope, labs, payment, remote participation, and metabolic testing.',
};

export default function FaqPage() {
  return (
    <PageStub
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      description="Answers to scope, lab, program, payment, remote, and testing questions — grouped by service."
    />
  );
}
