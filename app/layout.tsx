import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  style: ['normal', 'italic'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      className={`bg-cream ${playfairDisplay.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
