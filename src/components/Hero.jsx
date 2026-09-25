import heroBgImg from '../assets/lucas-programando-hero-v2.webp';
import { portfolioData } from '../data/portfolioData';
import StatCounter from './StatCounter';

export default function Hero({ onOpenContact }) {
  const { personal } = portfolioData;

  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="inicio">
      {/* Desktop Atmospheric Full-Bleed Background Visual */}
      <div className="hero-bg-visual-desktop" aria-hidden="true">
        <img
          src={heroBgImg}
          alt=""
          className="hero-bg-img"
          fetchPriority="high"
          width="1672"
          height="941"
          decoding="async"
        />
        <div className="hero-bg-mask-left" />
        <div className="hero-bg-mask-top" />
        <div className="hero-bg-mask-bottom" />
      </div>

      {/* Mobile Atmospheric Background Layer */}
      <div className="hero-mobile-backdrop" aria-hidden="true">
        <div className="hero-mobile-glow-primary" />
        <div className="hero-mobile-glow-secondary" />
        <div className="hero-mobile-grid" />
        <div className="hero-mobile-ambient-beam" />
      </div>

      <div className="container hero-container-rel">
        <div className="hero-content">
          {/* Badge */}
          <div className="badge-pill">
            <span className="badge-pill-dot" />
            <span>{personal.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Ideias que <br />
            se tornam <br />
            <span className="text-blue">realidade.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            {personal.description}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              <span>Ver meus projetos</span>
              <span aria-hidden="true" style={{ fontSize: '1.15rem' }}>→</span>
            </button>

            <button className="btn btn-secondary" onClick={onOpenContact}>
              <span>Falar comigo</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--accent-light)' }}>
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z" />
              </svg>
            </button>
          </div>

          {/* 3 Metrics Row with Interactive Animation */}
          <div className="hero-stats">
            {personal.stats.map((stat, idx) => (
              <StatCounter
                key={idx}
                rawNumber={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Visual: Cleanly displayed below text with smooth dark blend */}
      <div className="hero-mobile-visual" aria-hidden="true">
        <div className="container">
          <div className="hero-mobile-img-wrapper">
            <img
              src={heroBgImg}
              alt=""
              className="hero-mobile-img"
              width="1672"
              height="941"
              decoding="async"
              loading="lazy"
            />
            <div className="hero-mobile-img-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
