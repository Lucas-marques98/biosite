import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Send, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onOpenContact }) {
  const { contact } = portfolioData;

  return (
    <section
      id="contact"
      style={{
        paddingTop: 'clamp(7rem, 14vw, 12rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        backgroundColor: '#030304',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Background Mammoth Watermark Words: CREATE / BUILD / IMAGINE */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          textAlign: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(5rem, 16vw, 15rem)',
          fontWeight: 900,
          letterSpacing: '0.08em',
          color: 'rgba(255, 255, 255, 0.015)',
          lineHeight: 0.9,
          pointerEvents: 'none',
          userSelect: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 0,
        }}
      >
        <span>CREATE</span>
        <span>BUILD</span>
      </div>

      {/* Cinematic Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85vw',
          maxWidth: '1000px',
          height: '450px',
          background: 'radial-gradient(ellipse at bottom, rgba(99, 102, 241, 0.22) 0%, rgba(124, 58, 237, 0.1) 50%, transparent 75%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              color: '#a5b4fc',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
              background: 'rgba(99, 102, 241, 0.12)',
              padding: '0.45rem 1rem',
              borderRadius: '999px',
              border: '1px solid rgba(99, 102, 241, 0.3)',
            }}
          >
            <Sparkles size={14} style={{ color: '#818cf8' }} />
            <span>{contact.eyebrow}</span>
          </div>

          {/* Mammoth Headline */}
          <h2
            style={{
              fontSize: 'clamp(3rem, 7.5vw, 6.2rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              marginBottom: '1.75rem',
            }}
          >
            Vamos criar <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 30%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              algo marcante.
            </span>
          </h2>

          {/* Capabilities Line */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem 1.25rem',
              marginBottom: '3.5rem',
            }}
          >
            {contact.capabilities.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                  color: '#a1a1aa',
                  fontWeight: 500,
                }}
              >
                {item}
                {i < contact.capabilities.length - 1 && (
                  <span style={{ marginLeft: '1.25rem', color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                )}
              </span>
            ))}
          </div>

          {/* Cinematic Large Magnetic CTA Button */}
          <button
            onClick={onOpenContact}
            className="btn-primary"
            data-cursor-text="LET'S TALK ↗"
            style={{
              fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
              padding: '1.35rem 3.25rem',
              boxShadow: '0 15px 50px rgba(99, 102, 241, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)',
              marginBottom: '5rem',
              background: '#ffffff',
              color: '#050505',
              fontWeight: 700,
            }}
          >
            <span>{contact.cta}</span>
          </button>

          {/* Social Links Row */}
          <div
            style={{
              width: '100%',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'clamp(1.5rem, 4vw, 3.5rem)',
            }}
          >
            {contact.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="OPEN ↗"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#94a3b8',
                  transition: 'all 0.25s ease',
                  padding: '0.4rem 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                <span>{social.name}</span>
                <ArrowUpRight size={15} style={{ opacity: 0.7 }} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
