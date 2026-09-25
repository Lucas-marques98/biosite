import aboutPhoto from '../assets/lucas-programando-sobre-v2.webp';
import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const { about } = portfolioData;

  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="about-grid">
          {/* Left Visual: Developer at work */}
          <div className="about-visual">
            <img
              src={aboutPhoto}
              alt="Lucas Marques — Desenvolvedor trabalhando em setup com múltiplos monitores"
              className="about-image"
              width="1536"
              height="1024"
              decoding="async"
              loading="lazy"
            />
            <div className="about-overlay" aria-hidden="true" />
          </div>

          {/* Right Column: Bio */}
          <div className="about-content">
            <div>
              <div className="badge-pill">
                <span className="badge-pill-dot" />
                <span>{about.label}</span>
              </div>
              <h2 className="section-title">
                Mais que código, <br />
                é <span className="text-blue">propósito.</span>
              </h2>
            </div>

            <div className="about-paragraphs">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div style={{ marginTop: '12px' }}>
              <button className="btn btn-secondary" aria-expanded={expanded} aria-controls="about-pillars" onClick={() => setExpanded(!expanded)}>
                <span>{expanded ? 'Mostrar menos' : 'Conheça mais sobre mim'}</span>
                <span aria-hidden="true" style={{ display: 'inline-block', transition: 'transform 0.25s ease', transform: expanded ? 'rotate(90deg)' : 'none' }}>→</span>
              </button>
              {expanded && <ul id="about-pillars" className="about-pillars">{about.pillars.map(pillar => <li key={pillar}>{pillar}</li>)}</ul>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
