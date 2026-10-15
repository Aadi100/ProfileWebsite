import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Code, Server, Layout, CheckCircle, Terminal, HardDrive } from 'lucide-react';

export default function SkillsMatrix() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code size={20} color="#10b981" />;
      case 'Layout': return <Layout size={20} color="#06b6d4" />;
      case 'Server': return <Server size={20} color="#6366f1" />;
      case 'Cpu': return <Cpu size={20} color="#f59e0b" />;
      default: return <Terminal size={20} color="#10b981" />;
    }
  };

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">End-to-End Technology Stack</h2>
          <p className="section-subtitle">
            Engineered depth across industrial device communication, resilient systems middleware, multi-tenant databases, and modern reactive user interfaces.
          </p>
        </div>

        {/* Domain Tabs Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  border: isActive ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                  background: isActive ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-card)'
                }}
              >
                <div
                  style={{
                    width: '2.6rem',
                    height: '2.6rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getIcon(cat.icon)}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: isActive ? '#fff' : 'var(--text-muted)' }}>
                    {cat.title}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                    {cat.skills.length} core technologies
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Panel */}
        <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {getIcon(skillCategories[activeCategoryIndex].icon)}
              <span>{skillCategories[activeCategoryIndex].title}</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {skillCategories[activeCategoryIndex].description}
            </p>
          </div>

          {/* Skills Grid with Proficiency & Implementation Notes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {skillCategories[activeCategoryIndex].skills.map((skill, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  padding: '1.25rem',
                  borderRadius: '0.65rem',
                  border: '1px solid rgba(255, 255, 255, 0.04)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                    {skill.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#10b981' }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: '6px',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    marginBottom: '0.65rem'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, #10b981, #06b6d4)',
                      borderRadius: '3px',
                      transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  ⚡ {skill.note}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
