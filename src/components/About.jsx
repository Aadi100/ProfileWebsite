import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Cpu, Server, Layers, ShieldCheck, Zap, Globe, HardDrive } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <HardDrive size={24} color="#10b981" />,
      title: "Biometric IoT & Systems Middleware",
      subtitle: "C# .NET 4.8 / Core & OCX Drivers",
      description: "Bridging physical access terminals (facial recognition, RFID, fingerprints) to cloud servers. Implementing STA COM invokers, debounce filters, SQLite offline buffering, and resilient WebSocket streaming."
    },
    {
      icon: <Server size={24} color="#06b6d4" />,
      title: "Cloud & Append-Only Backends",
      subtitle: "Supabase, PostgreSQL RLS & Deno",
      description: "Architecting zero-conflict booking engines using PostgreSQL partial unique indexes, append-only dual ledgers for automated FBR tax invoicing, and asynchronous notification pipelines (Resend & WhatsApp)."
    },
    {
      icon: <Cpu size={24} color="#6366f1" />,
      title: "High-Performance Systems & APIs",
      subtitle: "C# .NET, WebSockets & Serial I/O",
      description: "Engineering low-latency services, bidirectional WebSocket communication channels, and hardware serial port listeners (RS-232) designed for 24/7 continuous enterprise uptime."
    },
    {
      icon: <Layers size={24} color="#f59e0b" />,
      title: "Modern Reactive Web & Mobile",
      subtitle: "React 19, Expo & On-Device TFLite",
      description: "Building sub-second dashboards with Chart.js telemetry and Oxlint optimizations, paired with cross-platform mobile apps featuring on-device neural face recognition via Vision Camera and TensorFlow Lite."
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Engineering Profile</span>
          </div>
          <h2 className="section-title">Architected For Scale & Reliability</h2>
          <p className="section-subtitle">
            Bridging the complete modern technology stack — from industrial hardware device communication to high-throughput cloud backends and responsive reactive interfaces.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div
                style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {pillar.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                  {pillar.title}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#10b981', marginBottom: '0.65rem' }}>
                  {pillar.subtitle}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Deep-Dive Callout */}
        <div
          className="glass-card about-callout"
          style={{
            padding: '2.5rem',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            background: 'radial-gradient(ellipse at top left, rgba(16, 185, 129, 0.08), transparent 70%), var(--bg-card)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              <ShieldCheck size={16} />
              <span>Engineering Rigor & Philosophy</span>
            </div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              Built for Zero Race Conditions, Deterministic Execution & Scale
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Passionate about leveraging intelligent systems and Clean Architecture to deliver fault-tolerant, scalable enterprise software. From deploying on-device edge AI models (computer vision &amp; TensorFlow Lite) and real-time behavioral anomaly detection, to architecting thread-safe IoT middleware, immutable audit ledgers, and secure database schemas with strict RBAC in Agile environments.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              <span className="badge-tag">Edge AI &amp; TensorFlow Lite</span>
              <span className="badge-tag">Clean Architecture &amp; SOLID</span>
              <span className="badge-tag">Deterministic Debounce Logic</span>
              <span className="badge-tag">PostgreSQL / SQL Server RBAC</span>
              <span className="badge-tag">STA Thread-Safe COM Invokers</span>
              <span className="badge-tag">Real-Time WebSocket Streaming</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
