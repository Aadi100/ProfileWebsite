import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, ArrowRight, Github, ShieldCheck, Cpu, Database, Sparkles, Layers } from 'lucide-react';

const roles = [
  "Full-Stack Engineer & Systems Architect",
  "Building Biometric IoT Middleware in C# .NET",
  "Architecting Multi-Tenant Cloud in Supabase",
  "Crafting High-Performance React 19 Platforms",
  "Developing On-Device Mobile AI with Expo"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="section" style={{ paddingTop: '7.5rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Hero Content */}
          <div>
            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }}
              />
              {personalInfo.badge}
            </div>

            {/* Name & Title */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.025em'
              }}
            >
              Hi, I'm <span style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{personalInfo.name}</span>
            </h1>

            {/* Typewriter Subtitle */}
            <div
              style={{
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                marginBottom: '1.5rem'
              }}
            >
              <span style={{ color: '#06b6d4', marginRight: '0.5rem' }}>&gt;</span>
              <span>{currentText}</span>
              <span className="blinking-cursor"></span>
            </div>

            {/* Bio Paragraph */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                maxWidth: '660px',
                marginBottom: '2rem'
              }}
            >
              Specializing in the <strong>Microsoft .NET ecosystem (C#, ASP.NET Core, EF Core)</strong>, <strong>modern React</strong>, and <strong>Applied AI</strong>. Combining full-stack and systems engineering with machine learning integration—from deploying <strong>on-device edge AI models (computer vision &amp; TensorFlow Lite)</strong> and real-time behavioral anomaly detection, to architecting high-reliability IoT middleware and scalable cloud platforms with immutable audit ledgers and strict RBAC.
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                <span>GitHub Repositories</span>
              </a>
              <a href="#contact" className="btn btn-ghost" style={{ border: '1px solid var(--border-subtle)' }}>
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Location & Quick Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-dim)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
              <span>📍 {personalInfo.location}</span>
              <span>⚡ Full Stack & Systems Architecture</span>
            </div>
          </div>

          {/* Right Column: Interactive Code Console / Architecture Badge */}
          <div className="glass-card" style={{ padding: '1.75rem', border: '1px solid rgba(16, 185, 129, 0.25)', position: 'relative' }}>
            {/* Terminal Window Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.45rem' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                abdulhadi@engineer-station:~
              </div>
              <Terminal size={15} color="#10b981" />
            </div>

            {/* Terminal Code Content */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              <div style={{ color: 'var(--text-dim)', marginBottom: '0.4rem' }}>// Verified Architecture Snapshot</div>
              
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#10b981' }}>const</span> <span style={{ color: '#38bdf8' }}>engineer</span> = &#123;
              </div>
              
              <div style={{ paddingLeft: '1.25rem' }}>
                <div>name: <span style={{ color: '#fcd34d' }}>"{personalInfo.name}"</span>,</div>
                <div>handle: <span style={{ color: '#fcd34d' }}>"Aadi100"</span>,</div>
                <div>architecture: <span style={{ color: '#fcd34d' }}>"Systems -&gt; Cloud -&gt; Web"</span>,</div>
                <div>cores: [
                  <span style={{ color: '#a78bfa' }}>"C# Biometric STA"</span>, 
                  <span style={{ color: '#a78bfa' }}>"WebSocket Streaming"</span>, 
                  <span style={{ color: '#a78bfa' }}>"Supabase RLS"</span>, 
                  <span style={{ color: '#a78bfa' }}>"React 19"</span>
                ],</div>
                <div>availability: <span style={{ color: '#10b981' }}>true</span>,</div>
                <div>activeLocation: <span style={{ color: '#fcd34d' }}>"Karachi, PK"</span></div>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>&#125;;</div>

              <div style={{ padding: '0.85rem', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ color: '#06b6d4', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={16} />
                  <span>Production Capabilities</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  • Biometric Debounce: Zero Duplicate Scans<br />
                  • Cloud Ledgers: PostgreSQL RLS & Append-Only<br />
                  • Real-Time Monitoring: Chart.js Telemetry
                </div>
              </div>
            </div>

            {/* Quick Stat Bar at bottom of card */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#10b981' }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>GitHub Repos</div>
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#06b6d4' }}>Full Stack</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Systems to Cloud</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
