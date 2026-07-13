import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'The Midlife Reboot — Jessie.Life',
  description:
    'A six-month, lab-guided health strategy for women navigating perimenopause, menopause, hormone therapy, metabolism changes, and burnout. $1,500.',
};

export default function RebootPage() {
  return (
    <PageStub
      eyebrow="Flagship Program"
      title="The Midlife Reboot"
      description="A six-month, lab-guided health strategy for women navigating perimenopause, menopause, hormone therapy, metabolism changes, burnout, and 'what the hell happened to my body?'"
    />
  );
}
