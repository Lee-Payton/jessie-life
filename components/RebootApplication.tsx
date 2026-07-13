'use client';

import { useState } from 'react';
import Link from 'next/link';

type Status = 'idle' | 'submitting' | 'error';
type RouteResult = { route: 'green' | 'yellow' | 'red'; redirectUrl?: string } | null;

const fieldClass =
  'w-full rounded-md border border-ink/20 bg-cream-light px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta';
const labelClass = 'mb-1.5 block font-body text-sm font-bold text-ink';
const groupClass = 'rounded-lg bg-cream p-6 ring-1 ring-ink/5';
const radioLabel = 'flex items-start gap-3 font-body text-sm text-ink/80 cursor-pointer';
const radioInput = 'mt-0.5 h-4 w-4 flex-shrink-0 accent-[#d3553e]';

function Radios({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="mt-3 space-y-2.5">
      {options.map((opt) => (
        <label key={opt} className={radioLabel}>
          <input type="radio" name={name} value={opt} required className={radioInput} />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

export default function RebootApplication() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState<RouteResult>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/reboot-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus('error');
        setMessage(json.message || 'Something went wrong. Please try again.');
        return;
      }
      if (json.route === 'green' && json.redirectUrl && json.redirectUrl !== '#') {
        window.location.href = json.redirectUrl;
        return;
      }
      setResult({ route: json.route, redirectUrl: json.redirectUrl });
      setStatus('idle');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  /* ---------- Confirmation pages (verbatim from routing doc) ---------- */

  if (result?.route === 'green') {
    return (
      <div className="rounded-lg bg-forest/10 p-10 text-center" role="status">
        <p className="font-display text-3xl text-forest">You are ready for the next step.</p>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-ink/80">
          Continue to Practice Better to choose your payment option, complete enrollment, and
          receive access to the client portal.
        </p>
        <div className="mt-8">
          <a href={result.redirectUrl || '#'} className="btn-primary">Continue to Enrollment</a>
        </div>
      </div>
    );
  }

  if (result?.route === 'yellow') {
    return (
      <div className="rounded-lg bg-cream p-10 text-center ring-1 ring-ink/10" role="status">
        <p className="font-display text-3xl text-ink">Thank you for giving me enough information to look at the situation properly.</p>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-ink/80">
          Your application needs a quick personal review before enrollment. I will use your answers
          to determine whether the Reboot, the Midlife Metabolism Audit, or another next step makes
          the most sense.
        </p>
      </div>
    );
  }

  if (result?.route === 'red') {
    return (
      <div className="rounded-lg bg-cream p-10 text-center ring-1 ring-ink/10" role="status">
        <p className="font-display text-3xl text-ink">The Midlife Reboot does not appear to be the right next step based on your answers.</p>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-ink/80">
          That does not mean you are out of options. A focused Audit, free Resource Lab education,
          or care from an appropriately licensed medical professional may be a better fit for what
          you need now.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/audit" className="btn-primary">Explore the Midlife Metabolism Audit</Link>
          <Link href="/lab" className="btn-secondary">Visit the Resource Lab</Link>
        </div>
      </div>
    );
  }

  /* ---------- Application form (questions verbatim from routing doc) ---------- */

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 1. Contact information */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">1. Contact information</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="fullName">Full name</label>
            <input id="fullName" name="fullName" required className={fieldClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className={fieldClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required className={fieldClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="cityStateTz">City, state, and time zone</label>
            <input id="cityStateTz" name="cityStateTz" required className={fieldClass} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass} htmlFor="contactMethod">Preferred contact method</label>
            <select id="contactMethod" name="contactMethod" required className={fieldClass} defaultValue="">
              <option value="" disabled>Select one</option>
              <option>Email</option>
              <option>Phone</option>
              <option>Text</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Where are you in the midlife transition? */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">2. Where are you in the midlife transition?</h2>
        <Radios
          name="transition"
          options={[
            'Perimenopause / still cycling',
            'Menopause / no natural period for 12 months',
            'Postmenopause',
            'Surgical menopause',
            'Hysterectomy with ovaries retained',
            'Not sure',
            'Other / needs explanation',
          ]}
        />
      </div>

      {/* 3. What is bringing you */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">3. What is bringing you to the Midlife Reboot?</h2>
        <div className="mt-3 space-y-2.5">
          {[
            'Hormone or menopause symptoms',
            'Hormone-therapy questions',
            'Metabolism or body-composition changes',
            'Fatigue, burnout, sleep, or poor recovery',
            'Strength, mobility, or resilience concerns',
            'Cardiovascular or long-term health concerns',
            'Surgical menopause or hysterectomy support',
            'A complicated health history that does not fit one box',
            'Other',
          ].map((opt) => (
            <label key={opt} className={radioLabel}>
              <input type="checkbox" name="reasons" value={opt} className={radioInput} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Worthwhile */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">4. What would make this six-month investment feel worthwhile to you?</h2>
        <textarea name="worthwhile" rows={4} required className={`${fieldClass} mt-3`} />
      </div>

      {/* 5. Already tried */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">5. What have you already tried?</h2>
        <p className="mt-1 font-body text-sm text-ink/60">
          Medical care, hormone therapy, diets, supplements, exercise programs, functional care, or other approaches.
        </p>
        <textarea name="alreadyTried" rows={3} required className={`${fieldClass} mt-3`} />
      </div>

      {/* 6. Hormone therapy */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">6. Are you currently using hormone therapy or working with a clinician on hormones?</h2>
        <Radios
          name="hormoneTherapy"
          options={['Yes', 'No', 'I am considering it', 'I need help finding an appropriate prescriber', 'Prefer to explain']}
        />
      </div>

      {/* 7. Scope */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">7. Do you understand the scope of the Midlife Reboot?</h2>
        <Radios
          name="scope"
          options={[
            'Yes. I understand that Jessie provides education and health strategy and does not diagnose disease, prescribe medication, provide emergency care, or replace my licensed medical providers.',
            'No / I am unsure',
          ]}
        />
      </div>

      {/* 8. Labs willingness */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">8. Are you willing to complete the intake, gather available records, and obtain additional lab work when it is needed to build a useful plan?</h2>
        <Radios name="labsWilling" options={['Yes', 'I have questions about the labs', 'No']} />
      </div>

      {/* 9. Lab fees */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">9. Do you understand that laboratory fees are separate from the $1,500 program investment?</h2>
        <Radios
          name="labFees"
          options={[
            'Yes. I understand that existing labs will be used when appropriate, additional labs are likely, and I will receive access to Jessie’s wholesale lab pricing.',
            'No / I need to discuss this',
          ]}
        />
      </div>

      {/* 10. Readiness */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">10. Which statement best describes your readiness?</h2>
        <Radios
          name="readiness"
          options={[
            'I am ready to begin and make this a priority.',
            'I am interested and likely ready, but I need one or two questions answered.',
            'I am mainly gathering information.',
            'I am not ready to make changes right now.',
          ]}
        />
      </div>

      {/* 11. Investment */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">11. Are you prepared to invest $1,500 in the six-month Midlife Reboot?</h2>
        <Radios
          name="investment"
          options={[
            'Yes, I am ready to pay in full.',
            'Yes, I plan to use the available payment plan.',
            'I am interested, but I need to discuss the investment.',
            'No, this investment is not currently feasible.',
          ]}
        />
      </div>

      {/* 12. Participation */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">12. Are you willing to actively participate and communicate honestly about what is and is not working?</h2>
        <Radios name="participation" options={['Yes', 'I am unsure what participation involves', 'No']} />
      </div>

      {/* 13. Support type */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">13. Which best describes the support you are seeking?</h2>
        <Radios
          name="supportType"
          options={[
            'A strategy, clear priorities, education, and follow-up so I can implement.',
            'Frequent reassurance and daily direction for most decisions.',
            'Someone to tell me exactly what to do without needing much participation from me.',
            'Not sure',
          ]}
        />
      </div>

      {/* 14. Guaranteed outcome */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">14. Are you seeking a guaranteed weight-loss, symptom, hormone, or medical outcome?</h2>
        <Radios
          name="guaranteedOutcome"
          options={[
            'No. I understand outcomes vary and depend on many factors.',
            'I have a specific expectation I would like to discuss.',
            'Yes',
          ]}
        />
      </div>

      {/* 15. Barriers */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">15. Is there anything that may make it difficult to participate over the next six months?</h2>
        <p className="mt-1 font-body text-sm text-ink/60">
          Optional: travel, caregiving, major surgery, financial uncertainty, communication access, active crisis, or other constraints.
        </p>
        <textarea name="barriers" rows={3} className={`${fieldClass} mt-3`} />
      </div>

      {/* 16. Anything else */}
      <div className={groupClass}>
        <h2 className="font-display text-xl">16. Anything else Jessie should know before you enroll?</h2>
        <textarea name="anythingElse" rows={3} className={`${fieldClass} mt-3`} />
      </div>

      <div>
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
