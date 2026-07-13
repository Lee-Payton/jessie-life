import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'Metabolism + VO₂ Testing — Jessie.Life',
  description:
    'Portable breath analysis to measure how your body uses energy at rest and oxygen during exercise. RMR ($125) and VO₂ max ($195) testing.',
};

export default function MetabolismPage() {
  return (
    <PageStub
      eyebrow="Metabolic & Fitness Testing"
      title="Stop estimating. Measure how your body actually uses energy and oxygen."
      description="Metabolism + VO₂ testing uses portable breath analysis to measure resting metabolism, fuel use, cardiorespiratory fitness, and training zones. Available through scheduled locations, pop-ups, and partner events."
    />
  );
}
