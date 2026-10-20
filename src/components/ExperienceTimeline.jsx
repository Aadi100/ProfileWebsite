import React, { useState } from 'react';
import { experienceMilestones, education } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, BookOpen, Layers } from 'lucide-react';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            {activeTab === 'experience' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            A comprehensive track record of enterprise software development, IoT systems engineering, and academic foundations in software engineering.
          </p>
        </div>

        {/* Tab Toggle Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}
        >
          <button
            onClick={() => setActiveTab('experience')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.65rem 1.4rem',
              borderRadius: '0.6rem',
              border: activeTab === 'experience' ? '1px solid #10b981' : '1px solid var(--border-subtle)',
              background: activeTab === 'experience' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.6)',
              color: activeTab === 'experience' ? '#10b981' : 'var(--text-muted)',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <Briefcase size={16} />
            <span>Work Experience ({experienceMilestones.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.65rem 1.4rem',
              borderRadius: '0.6rem',
              border: activeTab === 'education' ? '1px solid #10b981' : '1px solid var(--border-subtle)',
              background: activeTab === 'education' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.6)',
              color: activeTab === 'education' ? '#10b981' : 'var(--text-muted)',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <GraduationCap size={16} />
            <span>Education & Training ({education.length})</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', paddingLeft: '2rem' }}>
          
          {/* Vertical Guide Line */}
          <div
            style={{
              position: 'absolute',
              left: '7px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: 'linear-gradient(180deg, #10b981 0%, #06b6d4 50%, rgba(255, 255, 255, 0.05) 100%)'
            }}
          />

          {/* Work Experience Tab */}
          {activeTab === 'experience' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {experienceMilestones.map((item, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  
                  {/* Node Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.35rem',
                      top: '0.4rem',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#07090e',
                      border: '3px solid #10b981',
                      boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                    }}
                  />

                  {/* Experience Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '1.75rem',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            color: '#10b981',
                            background: 'rgba(16, 185, 129, 0.1)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '0.35rem',
                            border: '1px solid rgba(16, 185, 129, 0.25)'
                          }}
                        >
                          {item.period}
                        </span>
                        <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                          📍 {item.location}
                        </span>
                      </div>

                      <div style={{ color: '#06b6d4', fontWeight: 700, fontSize: '0.95rem' }}>
                        {item.company}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                      {item.role}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      {item.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="badge-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Education & Training Tab */}
          {activeTab === 'education' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {education.map((edu, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  
                  {/* Node Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.35rem',
                      top: '0.4rem',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#07090e',
                      border: '3px solid #06b6d4',
                      boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                    }}
                  />

                  {/* Education Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '1.75rem',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            color: '#06b6d4',
                            background: 'rgba(6, 182, 212, 0.1)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '0.35rem',
                            border: '1px solid rgba(6, 182, 212, 0.25)'
                          }}
                        >
                          {edu.period}
                        </span>
                        <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                          📍 {edu.location}
                        </span>
                      </div>

                      <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.9rem', background: 'rgba(16, 185, 129, 0.08)', padding: '0.2rem 0.6rem', borderRadius: '0.35rem' }}>
                        {edu.shortDegree}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>
                      {edu.degree}
                    </h3>

                    <div style={{ fontSize: '1rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '0.75rem' }}>
                      {edu.institution}
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                      {edu.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                      {edu.highlights.map((hl, hIdx) => (
                        <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          <span style={{ color: '#10b981' }}>▹</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
