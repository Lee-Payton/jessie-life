import Link from 'next/link';
import { footerNav } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-ink text-white">
      <div className="container-content grid gap-10 py-14 md:grid-cols-3">
        <div>
          <span className="font-serif text-2xl">Jessie Faber</span>
          <p className="mt-3 max-w-xs font-body text-sm text-white/70">
            Functional health strategy, metabolic testing, and education for women
            navigating perimenopause and menopause.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-1">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-sm text-white/80 transition-colors hover:text-coral"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="font-body text-sm text-white/70">
          <p className="mb-2">
            <Link href="/contact" className="hover:text-coral">Contact</Link>
          </p>
          <p className="mb-2">
            <Link href="/privacy" className="hover:text-coral">Privacy Policy</Link>
          </p>
          <p>
            <Link href="/terms" className="hover:text-coral">Terms / Disclaimer</Link>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Jessie Faber. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right">
            Educational and health-strategy services only. Not medical diagnosis,
            treatment, or prescribing. Consult your licensed clinician.
          </p>
        </div>
      </div>
    </footer>
  );
}
