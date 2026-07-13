'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full rounded-md border border-ink/20 bg-cream-light px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta';
const labelClass = 'mb-1.5 block font-body text-sm font-bold text-ink';

export default function HostForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/host-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(json.message);
        form.reset();
      } else {
        setStatus('error');
        setMessage(json.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-forest/10 p-8 text-center" role="status">
        <p className="font-display text-2xl text-forest">Thank you.</p>
        <p className="mt-2 font-body text-ink/80">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">Name and role</label>
        <input id="name" name="name" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="organization">Organization and website</label>
        <input id="organization" name="organization" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="venue">City, state, and venue address</label>
        <input id="venue" name="venue" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="orgType">Type of organization</label>
        <input id="orgType" name="orgType" placeholder="Gym, studio, clinic, office, retreat…" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="participants">Estimated number of participants</label>
        <input id="participants" name="participants" className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="services">Interested services</label>
        <input id="services" name="services" placeholder="RMR, VO₂, both, workshop, Midlife Metabolism Audit, custom event" className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="space">Available equipment and space</label>
        <input id="space" name="space" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="dates">Preferred dates or date range</label>
        <input id="dates" name="dates" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="payer">Who will pay</label>
        <select id="payer" name="payer" className={fieldClass} defaultValue="">
          <option value="" disabled>Select one</option>
          <option value="organization">Organization</option>
          <option value="participants">Participants</option>
          <option value="mixed">Mixed</option>
          <option value="unsure">Unsure</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="goals">Goals for the event</label>
        <textarea id="goals" name="goals" rows={3} className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="notes">Anything else Jessie should know</label>
        <textarea id="notes" name="notes" rows={3} className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting…' : 'Submit Host Inquiry'}
        </button>
        {status === 'error' && (
          <p className="mt-3 font-body text-sm text-terracotta" role="alert">{message}</p>
        )}
      </div>
    </form>
  );
}
