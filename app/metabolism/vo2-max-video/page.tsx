import type { Metadata } from 'next';
import VideoPage from '@/components/VideoPage';

export const metadata: Metadata = {
  title: 'VO₂ Max Explained: Jessie.Life',
  description:
    'A short video from Jessie on why your fitness is a vital sign and what VO₂ max testing can tell you.',
};

export default function Vo2MaxVideoPage() {
  return (
    <VideoPage
      eyebrow="VO₂ Max Testing"
      heading="Your fitness is a vital sign"
      intro="A short explainer on what VO₂ max measures and why it is one of the strongest predictors of long-term health."
      videoId="1249501853"
      videoTitle="VO₂ max testing explainer from Jessie"
      thumbnailUrl="https://i.vimeocdn.com/video/2229902822-90be1065516af5b353ed499f51f2a59ea3eff13fe8919e6e3e842da31bd2a57f-d_200x150?region=us"
      uploadDate="2026-11-23T18:58:29Z"
      ctaHref="/metabolism"
      ctaLabel="Book testing"
    />
  );
}
