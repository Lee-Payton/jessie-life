import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingAnalytics from '@/components/BookingAnalytics';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import { siteConfig } from '@/lib/site';

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
  title: 'Jessie.Life: Functional Health Strategy for Midlife Women',
  description:
    'Stop guessing what happened to your body. Lab-guided health strategy, metabolic testing, and education for women navigating perimenopause and menopause.',
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: 'mt1SHq4p20TBXhFAbuL5FBOkoq_D2gj2-yLQqFqYsVs',
  },
  // './' resolves against each page pathname, so every route gets its own canonical.
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Jessie.Life: Functional Health Strategy for Midlife Women',
    description:
      'Lab-guided health strategy, metabolic testing, and education for midlife women.',
    url: siteConfig.url,
    siteName: 'Jessie.Life',
    type: 'website',
    images: [
      {
        url: '/images/home-hero.png',
        width: 1448,
        height: 1086,
        alt: 'Jessie Faber sitting with a warm mug of coffee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/images/home-hero.png',
        alt: 'Jessie Faber sitting with a warm mug of coffee',
      },
    ],
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
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        ) : null}
        <BookingAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
