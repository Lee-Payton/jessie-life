import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'Upcoming Testing Locations — Jessie.Life',
  description:
    'See where metabolism and VO₂ testing is currently available, join the notification list, or request a testing day at your location.',
};

export default function LocationsPage() {
  return (
    <PageStub
      eyebrow="Mobile Testing"
      title="Upcoming Metabolism + VO₂ Testing Locations"
      description="Jessie offers mobile metabolism and VO₂ testing through scheduled locations, pop-ups, and partner events. This page is the single live source of truth for testing dates and openings."
    />
  );
}
