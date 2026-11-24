import type { Metadata } from 'next';
import VideoPage from '@/components/VideoPage';

export const metadata: Metadata = {
  title: 'Resting Metabolic Rate (RMR) Explained: Jessie.Life',
  description:
    'A short video from Jessie on what resting metabolic rate is and why measuring it beats guessing with an online calculator.',
};

export default function RmrVideoPage() {
  return (
    <VideoPage
      eyebrow="Resting Metabolic Rate"
      heading="Why measuring beats guessing"
      intro="A short explainer on what your resting metabolic rate is and what breath testing can show that calculators can't."
      videoId="1249500805"
      videoTitle="RMR testing explainer from Jessie"
      thumbnailUrl="https://i.vimeocdn.com/video/2229906520-9214ff9d081c575229424879c89cc565842f55b1235e92da4412647d1947edde-d_200x150?region=us"
      uploadDate="2026-11-23T18:52:34Z"
      ctaHref="/metabolism"
      ctaLabel="Book testing"
    />
  );
}
