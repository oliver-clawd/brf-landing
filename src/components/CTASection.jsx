import { useState } from 'react';
import './CTASection.css';

const RECIPIENT = 'oliver.clawd@secure-stack-consulting.com';

export default function CTASection() {
  const [fields, setFields] = useState({ name: '', email: '', scope: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, scope, message } = fields;

    const subject = `BRF Inquiry — ${name || 'New inquiry'}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `AWS account scope: ${scope}`,
      message ? `\nMessage:\n${message}` : '',
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="cta section" id="contact">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__text">
            <p className="label">Get Started</p>
            <h2 className="cta__headline">
              Ready to measure<br />your blast radius?
            </h2>
            <p className="cta__body">
              A BRF engagement typically runs 2–3 weeks for a single AWS account.
              You get the interactive report, evidence package, and a working session
              to walk through findings and priorities.
            </p>
            <div className="cta__bullets">
              {[
                'AWS account analysis — no agent installation required',
                'Interactive report delivered, not a PDF',
                'Prioritized remediation plan your team can act on immediately',
                'Optional: re-score after remediation to measure improvement',
              ].map((b, i) => (
                <div key={i} className="cta__bullet">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#378ADD" strokeWidth="1"/>
                    <path d="M4.5 7l2 2 3-3" stroke="#378ADD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cta__form-wrap">
            <div className="cta__form-card">
              {sent ? (
                <div className="cta__success">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19" stroke="#378ADD" strokeWidth="1.5"/>
                    <path d="M12 20l6 6 10-12" stroke="#378ADD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Email client opened</h3>
                  <p>Your message is pre-filled and ready to send to <strong>{RECIPIENT}</strong>.</p>
                  <button className="btn btn-ghost" onClick={() => setSent(false)}>Send another</button>
                </div>
              ) : (
                <>
                  <h3 className="cta__form-title">Schedule a conversation</h3>
                  <p className="cta__form-sub">
                    Tell us about your environment and we'll get back to you within one business day.
                  </p>
                  <form className="cta__form" onSubmit={handleSubmit}>
                    <div className="cta__field">
                      <label>Name</label>
                      <input type="text" placeholder="Your name" value={fields.name} onChange={set('name')} required />
                    </div>
                    <div className="cta__field">
                      <label>Email</label>
                      <input type="email" placeholder="you@company.com" value={fields.email} onChange={set('email')} required />
                    </div>
                    <div className="cta__field">
                      <label>AWS account scope</label>
                      <input type="text" placeholder="Single account / multi-account / unsure" value={fields.scope} onChange={set('scope')} />
                    </div>
                    <div className="cta__field">
                      <label>Message <span className="cta__optional">(optional)</span></label>
                      <textarea rows={3} placeholder="Anything specific you're trying to understand or fix?" value={fields.message} onChange={set('message')} />
                    </div>
                    <button type="submit" className="btn btn-primary cta__submit">
                      Send message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
