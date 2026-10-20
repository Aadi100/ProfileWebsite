import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Linkedin, Github, Send, MessageSquare, MapPin, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentStatus, setSentStatus] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger prefilled mailto
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSentStatus('Your default email client has been opened! Looking forward to connecting.');
    setTimeout(() => setSentStatus(null), 6000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Whether you have an opening for a software engineer, require hardware/biometrics architecture consulting, or want to discuss a full-stack project, my inbox is open.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          {/* Left: Contact Info & Direct Links */}
          <div className="glass-card" style={{ padding: '2.25rem', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                Direct Channels
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.6 }}>
                Based in Karachi, Pakistan. Available for local and global remote software engineering roles, architecture contracts, and open-source collaborations.
              </p>
            </div>

            {/* Email Copy Card */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '1.25rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                Primary Email
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', wordBreak: 'break-all' }}>
                  {personalInfo.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="btn btn-primary btn-sm"
                  style={{ minWidth: '95px' }}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={15} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  color: '#fff',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ padding: '0.5rem', borderRadius: '0.4rem', background: 'rgba(0, 119, 181, 0.15)', color: '#0077b5' }}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>LinkedIn</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>abdulhadi03</div>
                </div>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  color: '#fff',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ padding: '0.5rem', borderRadius: '0.4rem', background: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}>
                  <Github size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>GitHub</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Aadi100</div>
                </div>
              </a>
            </div>

            {/* Quick Meta */}
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={15} color="#10b981" />
                <span>Karachi, Pakistan (PKT / UTC+5)</span>
              </span>
              {personalInfo.phone && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Phone size={15} color="#06b6d4" />
                  <a href={`tel:${personalInfo.phone}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                    {personalInfo.phone}
                  </a>
                </span>
              )}
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="glass-card" style={{ padding: '2.25rem', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
              Send a Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', marginBottom: '1.5rem' }}>
              Fill out this form to draft a direct email straight to my inbox.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-emerald)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-emerald)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineer Opportunity / Project Consultation"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-emerald)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, team, or opportunity..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-emerald)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Dispatch Message</span>
              </button>

              {sentStatus && (
                <div style={{ padding: '0.75rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '0.5rem', color: '#10b981', fontSize: '0.85rem', textAlign: 'center' }}>
                  {sentStatus}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 860px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
