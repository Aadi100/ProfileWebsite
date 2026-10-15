import React from 'react';
import { experienceMilestones } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Trajectory & Milestones</span>
          </div>
          <h2 className="section-title">Engineering Experience</h2>
          <p className="section-subtitle">
            A track record of taking complex problems across systems middleware, IoT hardware integrations, and cloud backends from concept to production.
          </p>
        </div>

        {/* Timeline Container */}
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

          {/* Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experienceMilestones.map((milestone, idx) => (
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

                {/* Milestone Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.1)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '0.35rem',
                          marginRight: '0.75rem',
                          border: '1px solid rgba(16, 185, 129, 0.25)'
                        }}
                      >
                        {milestone.year}
                      </span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                        📍 {milestone.location}
                      </span>
                    </div>

                    <div style={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.9rem' }}>
                      {milestone.company}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                    {milestone.role}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {milestone.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {milestone.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="badge-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
