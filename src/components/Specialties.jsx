import { portfolioData } from '../data/portfolioData';

// Custom Minimalist SVG Icons
const ServiceIcon = ({ type }) => {
  switch (type) {
    case 'code':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'app':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'ai':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case 'visual':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Specialties() {
  const { bento, specialties } = portfolioData;

  const handleCardMouseMove = (e) => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);

    // 3D subtle tilt calculation (max 2deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section className="section specialties-section" id="servicos">
      <div className="container">
        <header className="section-editorial-header" data-reveal>
          <div className="chapter-number">02</div>
          <div>
            <p className="eyebrow">{bento.label}</p>
            <h2>{bento.title}</h2>
            <p className="section-lead-copy">{bento.subtitle}</p>
          </div>
        </header>

        <div className="specialties-grid">
          {specialties.map((item, index) => {
            const spanClass = index === 0 || index === 3 ? 'card-span-7' : 'card-span-5';

            return (
              <article
                key={item.id}
                className={`card-specialty ${spanClass}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                data-reveal
              >
                {/* Baby Blue Cursor-Follow Spotlight */}
                <div className="card-spotlight" aria-hidden="true" />

                {/* Decorative Large Background Number */}
                <span className="card-ghost-number" aria-hidden="true">
                  {item.id}
                </span>

                {/* Top: Icon & Arrow */}
                <div className="card-top">
                  <div className="card-icon-wrap">
                    <ServiceIcon type={item.iconType} />
                  </div>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </div>

                {/* Body: Title and description */}
                <div className="card-body">
                  <div className="card-code" style={{ marginBottom: '0.4rem' }}>{item.code}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>
                </div>

                {/* Bottom: Technical tags */}
                <div className="card-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
