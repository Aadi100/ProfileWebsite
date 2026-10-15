import React, { useState, useMemo } from 'react';
import { projects, categories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { Github, Search, Layers, Cpu, ArrowUpRight, Code, ShieldCheck, Lock } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Featured Systems & Repositories</span>
          </div>
          <h2 className="section-title">Engineered For Performance & Reliability</h2>
          <p className="section-subtitle">
            A curated showcase of deployed cloud applications, industrial IoT biometric middleware, mobile neural systems, and 64-bit silicon logic.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            alignItems: 'center',
            marginBottom: '3rem'
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              background: 'rgba(15, 23, 42, 0.7)',
              padding: '0.4rem',
              borderRadius: '0.75rem',
              border: '1px solid var(--border-subtle)'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: selectedCategory === cat.id ? 'var(--accent-emerald)' : 'transparent',
                  color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px'
            }}
          >
            <Search
              size={17}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-dim)'
              }}
            />
            <input
              type="text"
              placeholder="Search by keyword, tech, or architecture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.75rem',
                borderRadius: '0.6rem',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-emerald)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
            >
              {/* Card Header & Badge */}
              <div
                style={{
                  padding: '1.75rem 1.75rem 1rem 1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '0.35rem',
                      marginBottom: '0.65rem'
                    }}
                  >
                    {project.badge}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '0 1.75rem 1.25rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                {/* Key Bullet Points */}
                <div style={{ marginBottom: '1.25rem', background: 'rgba(0, 0, 0, 0.25)', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#06b6d4', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Key Architecture
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    {project.highlights[0]}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto', marginBottom: '1.5rem' }}>
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="badge-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="badge-tag" style={{ color: 'var(--text-dim)' }}>
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Actions Footer */}
              <div
                style={{
                  padding: '1rem 1.75rem',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}
              >
                <button
                  onClick={() => setActiveModalProject(project)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#10b981',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: 0,
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  <span>Deep Dive</span>
                  <ArrowUpRight size={16} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  {project.confidential && (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        color: 'var(--text-dim)',
                        fontFamily: 'var(--font-mono)'
                      }}
                      title="Enterprise system architecture (Proprietary / Under NDA)"
                    >
                      <Lock size={12} color="#94a3b8" />
                      <span>Enterprise NDA</span>
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}
                      title="GitHub Repository"
                    >
                      <Github size={15} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

      </div>
    </section>
  );
}
