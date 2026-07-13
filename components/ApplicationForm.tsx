'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full rounded-md border border-ink/20 bg-cream-light px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta';
const labelClass = 'mb-1.5 block font-body text-sm font-bold text-ink';

export default function ApplicationForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/reboot-application', {
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
        <p className="font-display text-2xl text-forest">Application received.</p>
        <p className="mt-2 font-body text-ink/80">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">Name</label>
        <input id="name" name="name" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="location">Where are you located? (state)</label>
        <input id="location" name="location" className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="stage">Where are you in the menopause transition?</label>
        <select id="stage" name="stage" className={fieldClass} defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Perimenopause</option>
          <option>Menopause</option>
          <option>Postmenopause</option>
          <option>Surgical / medical menopause</option>
          <option>Not sure</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="hrt">Are you currently using hormone therapy?</label>
        <select id="hrt" name="hrt" className={fieldClass} defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Yes</option>
          <option>No</option>
          <option>Considering it</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="goals">What are you hoping the Midlife Reboot will help you with?</label>
        <textarea id="goals" name="goals" rows={4} className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="history">Anything about your health history Jessie should know?</label>
        <textarea id="history" name="history" rows={4} className={fieldClass} />
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="labs">Do you have recent lab work you can share?</label>
        <select id="labs" name="labs" className={fieldClass} defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Yes, within the last 6 months</option>
          <option>Yes, older than 6 months</option>
          <option>No</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
        </button>
        {status === 'error' && (
          <p className="mt-3 font-body text-sm text-terracotta" role="alert">{message}</p>
        )}
      </div>
    </form>
  );
}
