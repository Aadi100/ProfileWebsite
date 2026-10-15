import React from 'react';
import { X, Github, CheckCircle2, Cpu, Server, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          backgroundColor: '#0c111c',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '2.4rem',
            height: '2.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
            <span>{project.badge}</span>
            <span>•</span>
            <span style={{ textTransform: 'uppercase' }}>{project.category}</span>
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
          {project.tags.map((tag, i) => (
            <span key={i} className="badge-tag" style={{ borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={18} color="#10b981" />
            <span>Architecture & System Overview</span>
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {project.description}
          </p>
        </div>

        {/* Architecture Breakdown Table/List */}
        {project.architecture && (
          <div style={{ marginBottom: '2rem', background: 'rgba(0, 0, 0, 0.35)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#06b6d4', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              SYSTEM BLUEPRINT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {Object.entries(project.architecture).map(([layer, desc], idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.88rem' }}>
                  <span style={{ color: '#10b981', fontFamily: 'var(--font-mono)', minWidth: '130px', fontWeight: 600 }}>
                    {layer}:
                  </span>
                  <span style={{ color: '#cbd5e1' }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Innovations / Engineering Highlights */}
        <div style={{ marginBottom: '2.25rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <span>Key Engineering Highlights</span>
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.6 }}>
                <span style={{ color: '#10b981', marginTop: '3px' }}>▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Action Footer */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          {project.confidential && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
              <Lock size={15} color="#10b981" />
              <span>Proprietary Enterprise System • Architecture case study (Source protected under NDA)</span>
            </div>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={16} />
              <span>View Source on GitHub</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="btn btn-secondary btn-sm"
          >
            <span>Close Overview</span>
          </button>
        </div>
      </div>
    </div>
  );
}
