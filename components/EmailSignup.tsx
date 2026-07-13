'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EmailSignup({
  source = 'site',
  buttonLabel = 'Join the List',
}: {
  source?: string;
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState('');
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
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'You’re on the list. Check your inbox.');
        setEmail('');
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor={`email-${source}`}>
        Your email address
      </label>
      <input
        id={`email-${source}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="min-w-0 flex-1 rounded-md border border-ink/20 bg-cream-light px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
        disabled={status === 'submitting'}
      />
      <button type="submit" className="btn-primary shrink-0 py-3" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Joining…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p className="font-body text-sm text-terracotta sm:sr-only" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
