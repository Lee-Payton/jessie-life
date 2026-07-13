import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'Apply for the Midlife Reboot — Jessie.Life',
  description: 'Apply for the six-month Midlife Reboot program.',
  robots: { index: false }, // reached only via Reboot CTAs
};

export default function RebootApplyPage() {
  return (
    <PageStub
      eyebrow="Application"
      title="Apply for the Midlife Reboot"
      description="This is where the Reboot application lives. Direct-checkout logic for clear fits; manual-review logic for uncertainty or scope issues (via GoHighLevel + Practice Better)."
    />
  );
}
