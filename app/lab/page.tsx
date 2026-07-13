import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'The Resource Lab — Jessie.Life',
  description:
    'A private education library for women who want better explanations about hormones, metabolism, medications, supplements, lab testing, strength, and midlife health.',
};

export default function LabPage() {
  return (
    <PageStub
      eyebrow="Education Library"
      title="The Resource Lab"
      description="A private education library for women who want better explanations about hormones, metabolism, medications, supplements, lab testing, strength, longevity, and midlife health — without having to live in research mode."
    />
  );
}
