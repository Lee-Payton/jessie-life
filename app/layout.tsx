import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
  weight: ['500', '600'],
  style: ['normal', 'italic'],
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Jessie.Life — Functional Health Strategy for Midlife Women',
  description:
    'Stop guessing what happened to your body. Lab-guided health strategy, metabolic testing, and education for women navigating perimenopause and menopause.',
  metadataBase: new URL('https://jessie.life'),
  openGraph: {
    title: 'Jessie.Life — Functional Health Strategy for Midlife Women',
    description:
      'Lab-guided health strategy, metabolic testing, and education for midlife women.',
    url: 'https://jessie.life',
    siteName: 'Jessie.Life',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-cream ${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
