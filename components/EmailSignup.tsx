'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EmailSignup({
  source = 'site',
  buttonLabel = 'Join the List',
  layout = 'row',
  collectLocation = false,
}: {
  source?: string;
  buttonLabel?: string;
  layout?: 'row' | 'stack';
  /** When true, also collects City and State/Region (e.g. for testing-location notifications). */
  collectLocation?: boolean;
}) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          collectLocation
            ? { firstName, email, source, city, region }
            : { firstName, email, source }
        ),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'You’re on the list. Check your inbox.');
        setFirstName('');
        setEmail('');
        setCity('');
        setRegion('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <p className="rounded-md bg-forest/10 px-4 py-3 font-body text-sm text-forest" role="status">
        {message}
      </p>
    );
  }

  const isStack = layout === 'stack' || collectLocation;

  return (
    <form
      onSubmit={handleSubmit}
      className={isStack ? 'flex flex-col gap-3' : 'flex flex-col gap-3 sm:flex-row'}
    >
      <label className="sr-only" htmlFor={`firstName-${source}`}>
        First name
      </label>
      <input
        id={`firstName-${source}`}
        type="text"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        className={`h-12 min-w-0 rounded-md border border-ink/20 bg-cream-light px-4 font-body text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta ${
          isStack ? 'w-full' : 'flex-1'
        }`}
        disabled={status === 'submitting'}
      />
      {collectLocation && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor={`city-${source}`}>
              City
            </label>
            <input
              id={`city-${source}`}
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="h-12 w-full rounded-md border border-ink/20 bg-cream-light px-4 font-body text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
              disabled={status === 'submitting'}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor={`region-${source}`}>
              State / Region
            </label>
            <input
              id={`region-${source}`}
              type="text"
              required
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="State / Region"
              className="h-12 w-full rounded-md border border-ink/20 bg-cream-light px-4 font-body text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
              disabled={status === 'submitting'}
            />
          </div>
        </div>
      )}
      <label className="sr-only" htmlFor={`email-${source}`}>
        Email address
      </label>
      <input
        id={`email-${source}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className={`h-12 min-w-0 rounded-md border border-ink/20 bg-cream-light px-4 font-body text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta ${
          isStack ? 'w-full' : 'flex-1'
        }`}
        disabled={status === 'submitting'}
      />
      <button
        type="submit"
        className={`btn-primary h-12 shrink-0 py-0 ${isStack ? 'w-full' : ''}`}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Joining…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p className={`font-body text-sm text-terracotta ${isStack ? '' : 'w-full'}`} role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
