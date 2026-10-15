import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Cpu, Github, Linkedin, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#05070b',
        borderTop: '1px solid var(--border-subtle)',
        padding: '3rem 0',
        color: 'var(--text-dim)',
        fontSize: '0.88rem'
      }}
    >
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
        
        {/* Brand & Note */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '0.4rem',
              background: 'rgba(16, 185, 129, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981'
            }}
          >
            <Cpu size={16} />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700 }}>{personalInfo.name}</div>
            <div style={{ fontSize: '0.78rem' }}>Software Engineer & Systems Architect</div>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0077b5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <span style={{ color: 'var(--border-subtle)' }}>|</span>
          <span>© {new Date().getFullYear()} Abdul Hadi. All rights reserved.</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="btn btn-secondary btn-sm"
          style={{ padding: '0.45rem 0.85rem' }}
          title="Scroll to top"
        >
          <span>Top</span>
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}
