import type { Metadata } from 'next';
import { Montserrat, Open_Sans, Bellefair, Caveat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});
const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bellefair',
  display: 'swap',
});
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
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
      className={`${montserrat.variable} ${openSans.variable} ${bellefair.variable} ${caveat.variable}`}
    >
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
