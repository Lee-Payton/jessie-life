import Link from 'next/link';
import { footerNav } from '@/lib/site';
import EmailSignup from '@/components/EmailSignup';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-dark">
      <div className="container-content grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <span className="font-display text-2xl font-medium text-ink">
            jessie<span className="text-terracotta">.life</span>
          </span>
          <p className="mt-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-ink/60">
            Science. Strategy. Freedom.
          </p>
          <p className="mt-5 max-w-xs font-body text-sm text-ink/70">
            Empowering women in midlife with the data, strategy, and support to feel like
            themselves again — and build a life they love.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <h3 className="eyebrow mb-4">Navigation</h3>
          <ul className="space-y-2.5">
            {footerNav.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-body text-sm text-ink/80 transition-colors hover:text-terracotta">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* More */}
        <nav aria-label="Footer more">
          <h3 className="eyebrow mb-4">More</h3>
          <ul className="space-y-2.5">
            {footerNav.more.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-body text-sm text-ink/80 transition-colors hover:text-terracotta">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Stay connected */}
        <div>
          <h3 className="eyebrow mb-4">Stay Connected</h3>
          <p className="mb-4 font-body text-sm text-ink/70">
            Get free resources, education, and testing updates.
          </p>
          <EmailSignup source="footer" />
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink/50 md:flex-row">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Jessie.life. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right">
            Educational and health-strategy services only. Not medical diagnosis, treatment, or
            prescribing. Consult your licensed clinician.
          </p>
        </div>
      </div>
    </footer>
  );
}
