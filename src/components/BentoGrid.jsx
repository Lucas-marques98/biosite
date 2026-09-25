import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  AudioWaveform,
  Play,
  Pause,
  Sparkles,
  Workflow,
  ArrowRight,
  ExternalLink,
  Laptop,
  CheckCircle,
  Database,
  MessageCircle,
  TrendingUp,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BentoGrid({ onOpenContact }) {
  const { bento } = portfolioData;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);

  // Toggle waveform animation
  const toggleMusic = () => {
    setIsPlayingMusic(!isPlayingMusic);
  };

  const workflowSteps = [
    { id: 1, label: 'Lead Capturado', icon: <TrendingUp size={16} />, detail: 'Form / Landing Page' },
    { id: 2, label: 'IA Processing', icon: <Sparkles size={16} />, detail: 'Qualificação & Roteiro' },
    { id: 3, label: 'CRM Database', icon: <Database size={16} />, detail: 'Status em Tempo Real' },
    { id: 4, label: 'WhatsApp Bot', icon: <MessageCircle size={16} />, detail: 'Notificação & Fechamento' },
  ];

  return (
    <section
      id="bento"
      style={{
        padding: 'var(--section-padding-y) 0',
        backgroundColor: '#08080a',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
      }}
    >
      {/* Background Tech Watermark */}
      <div className="section-watermark-number">02</div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-tag">{bento.label}</div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: '#ffffff',
              }}
            >
              {bento.title}
            </h2>
            <p style={{ maxWidth: '460px', color: '#888888', fontSize: '1rem', lineHeight: 1.6 }}>
              {bento.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
          }}
        >
          {/* 1. LARGE BENTO: WEB & APPS (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="bento-card"
            style={{
              gridColumn: 'span 7',
              minHeight: '420px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.7) 0%, rgba(10, 10, 15, 0.5) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#38bdf8',
                  letterSpacing: '0.1em',
                  marginBottom: '0.85rem',
                }}
              >
                <Laptop size={14} />
                <span>ECOSSISTEMA DIGITAL</span>
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.4rem',
                  letterSpacing: '-0.03em',
                }}
              >
                Websites &amp; Aplicativos Customizados
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', maxWidth: '480px' }}>
                Experiências desktop responsivas combinadas com aplicativos móveis intuitivos e sistemas escaláveis.
              </p>
            </div>

            {/* Visual Multi-Device Mockup Composition */}
            <div
              style={{
                marginTop: '1.5rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '1.5rem',
                paddingTop: '1rem',
              }}
            >
              {/* Desktop Browser Frame */}
              <div
                style={{
                  flex: 1,
                  background: 'rgba(10, 10, 14, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 12px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#71717a', marginLeft: '6px' }}>
                    lucasmarques.dev/experience
                  </span>
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '60px', height: '8px', borderRadius: '4px', background: 'rgba(99, 102, 241, 0.5)' }} />
                    <div style={{ width: '30px', height: '8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.2)' }} />
                  </div>
                  <div style={{ height: '55px', borderRadius: '8px', background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.15), rgba(56, 189, 248, 0.15))', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0' }}>Bespoke Interactive Architecture</span>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div
                style={{
                  width: '110px',
                  background: 'rgba(12, 12, 16, 0.95)',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '18px',
                  padding: '6px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div style={{ width: '30px', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.2)', margin: '2px auto 4px auto' }} />
                <div style={{ height: '70px', borderRadius: '10px', background: 'linear-gradient(180deg, #1e1b4b, #0f172a)', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '0.55rem', fontWeight: 700, color: '#ffffff' }}>App iOS/Android</div>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#38bdf8' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#818cf8' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. CARD: AI MUSIC (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bento-card"
            style={{
              gridColumn: 'span 5',
              minHeight: '420px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, rgba(30, 20, 45, 0.6) 0%, rgba(10, 10, 15, 0.6) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#a855f7',
                  letterSpacing: '0.1em',
                  marginBottom: '0.85rem',
                }}
              >
                <AudioWaveform size={14} />
                <span>AI AUDIO LAB</span>
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.03em',
                }}
              >
                AI Music &amp; Audio
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8' }}>
                Músicas personalizadas criadas com Inteligência Artificial para pessoas, marcas e momentos memoráveis.
              </p>
            </div>

            {/* Interactive Waveform Audio Visualizer */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              {/* Play / Pause Toggle Button */}
              <button
                onClick={toggleMusic}
                aria-label="Toggle Music Demo"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)',
                  transition: 'transform 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {isPlayingMusic ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '2px' }} />}
              </button>

              {/* Waveform Bars */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '4px', height: '36px' }}>
                {[12, 24, 18, 32, 14, 28, 36, 20, 16, 30, 22, 18, 34, 12, 26, 19, 31, 15].map((height, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: isPlayingMusic ? undefined : `${height}px`,
                      borderRadius: '2px',
                      background: 'linear-gradient(180deg, #a855f7 0%, #6366f1 100%)',
                      opacity: isPlayingMusic ? 1 : 0.6,
                      animation: isPlayingMusic ? `waveBounce ${0.8 + (i % 5) * 0.2}s ease-in-out infinite` : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. CARD: AI VIDEO (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#ec4899',
                  letterSpacing: '0.1em',
                  marginBottom: '0.85rem',
                }}
              >
                <Play size={14} />
                <span>CINEMATOGRAFIA AI</span>
              </div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.35rem',
                }}
              >
                AI Video &amp; Motion
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#888888' }}>
                Vídeos cinematográficos roteirizados e produzidos com modelos generativos.
              </p>
            </div>

            {/* Video Player Mockup Preview */}
            <div
              style={{
                marginTop: '1.25rem',
                height: '110px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1e112a, #0b0914)',
                border: '1px solid rgba(236, 72, 153, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <Play size={18} style={{ marginLeft: '2px' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '8px', left: '12px', right: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ height: '3px', flex: 1, background: 'rgba(255,255,255,0.15)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '60%', height: '100%', background: '#ec4899' }} />
                </div>
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>4K GEN</span>
              </div>
            </div>
          </motion.div>

          {/* 4. CARD: AI VISUALS MOSAIC (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#fbbf24',
                  letterSpacing: '0.1em',
                  marginBottom: '0.85rem',
                }}
              >
                <Sparkles size={14} />
                <span>IMAGENS &amp; BRANDING</span>
              </div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.35rem',
                }}
              >
                AI Visuals &amp; Art
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#888888' }}>
                Mosaicos visuais e ativos gráficos para campanhas digitais de alto impacto.
              </p>
            </div>

            {/* Visual Mini Mosaic Grid */}
            <div
              style={{
                marginTop: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '6px',
                height: '110px',
              }}
            >
              {[
                'linear-gradient(135deg, #312e81, #1e1b4b)',
                'linear-gradient(135deg, #581c87, #3b0764)',
                'linear-gradient(135deg, #0c4a6e, #082f49)',
              ].map((bg, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: '8px',
                    background: bg,
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Sparkles size={14} style={{ color: 'rgba(255,255,255,0.4)' }} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. CARD: AUTOMATIONS WORKFLOW (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#10b981',
                  letterSpacing: '0.1em',
                  marginBottom: '0.85rem',
                }}
              >
                <Workflow size={14} />
                <span>FLUXOS &amp; INTEGRAÇÕES</span>
              </div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.35rem',
                }}
              >
                Automações Inteligentes
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#888888' }}>
                Pipelines automatizados conectando IA, sistemas CRM e mensageria instantânea.
              </p>
            </div>

            {/* Interactive Workflow Nodes Pipeline */}
            <div
              style={{
                marginTop: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#34d399',
                }}
              >
                <span>Lead → AI → CRM → WhatsApp</span>
                <CheckCircle size={14} />
              </div>
              <div style={{ fontSize: '0.72rem', color: '#71717a', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                100% OPERAÇÃO AUTOMATIZADA
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #bento .bento-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
