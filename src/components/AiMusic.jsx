import { portfolioData } from '../data/portfolioData';

export default function AiMusic({ onOpenContact }) {
  const { aiMusic } = portfolioData;

  // 28 animated waveform bars with staggered heights and scaleY factors
  const waveBars = Array.from({ length: 28 }, (_, i) => {
    const scale = (0.35 + ((i * 13) % 65) / 100).toFixed(2);
    const delay = (i * 0.045).toFixed(2);
    return { scale, delay: `-${delay}s` };
  });

  return (
    <section className="section music-section" id="musica">
      <div className="container">
        <header className="section-editorial-header" data-reveal>
          <div className="chapter-number">04</div>
          <div>
            <p className="eyebrow">{aiMusic.label} • {aiMusic.eyebrow}</p>
            <h2>{aiMusic.headline}</h2>
            <p className="section-lead-copy">{aiMusic.description}</p>
          </div>
        </header>

        <div className="music-grid">
          {/* Left Column: Rotating Vinyl Record (Accelerates on hover) */}
          <div className="vinyl-wrapper" data-reveal>
            <div
              className="vinyl-disc"
              aria-label="Disco de vinil estilizado girando"
              title="Passe o mouse para acelerar a rotação"
            >
              <div className="vinyl-center">
                <div className="vinyl-hole" />
              </div>
            </div>
          </div>

          {/* Right Column: Waveform, Categories & Action */}
          <div className="music-details" data-reveal>
            {/* Simulated Animated Waveform with scaleY */}
            <div className="waveform-container" aria-label="Visualizador sonoro animado">
              {waveBars.map((bar, i) => (
                <div
                  key={i}
                  className="wave-bar"
                  style={{
                    '--scale-y': bar.scale,
                    animationDelay: bar.delay,
                  }}
                />
              ))}
            </div>

            {/* Categories */}
            <div className="music-categories-grid">
              {aiMusic.categories.map((cat, idx) => (
                <div key={cat.name} className="music-category-card">
                  <span className="eyebrow" style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>
                    0{idx + 1}
                  </span>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ marginTop: '2.5rem' }}>
              <button className="btn btn-primary" onClick={onOpenContact}>
                <span>{aiMusic.cta}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
