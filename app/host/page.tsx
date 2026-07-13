import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'Bring Jessie to Your Location — Jessie.Life',
  description:
    'Bring portable RMR and VO₂ max testing to your gym, studio, clinic, med spa, office, retreat, or wellness event.',
};

export default function HostPage() {
  return (
    <PageStub
      eyebrow="For Organizations"
      title="Bring useful metabolic testing to your people — right where they already are."
      description="Jessie brings portable resting metabolic rate and VO₂ max testing to gyms, studios, offices, clinics, med spas, retreats, and wellness events."
    />
  );
}
