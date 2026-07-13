import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'About Jessie Faber — Jessie.Life',
  description:
    'Functional health practitioner, researcher, and educator helping women in perimenopause and menopause connect the dots between hormones, symptoms, labs, and real life.',
};

export default function AboutPage() {
  return (
    <PageStub
      eyebrow="About"
      title="I help women understand their midlife body so they can make better decisions about the rest of their life."
      description="I am Jessie Faber — a functional health practitioner, researcher, educator, nomad, and enthusiastic recreator of wheels. My approach is science-heavy and human-centered."
    />
  );
}
