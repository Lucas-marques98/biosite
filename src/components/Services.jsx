import { portfolioData } from '../data/portfolioData';

export default function Services({ onOpenContact }) {
  const { services } = portfolioData;

  const renderIcon = (type) => {
    switch (type) {
      case 'smartphone':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        );
      case 'monitor':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        );
      case 'gears':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        );
      case 'brain':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 .6.12 1.17.34 1.7A4.5 4.5 0 0 0 4.5 12a4.5 4.5 0 0 0 3.34 4.3c-.22.53-.34 1.1-.34 1.7a4.5 4.5 0 0 0 4.5 4.5 4.5 4.5 0 0 0 4.5-4.5c0-.6-.12-1.17-.34-1.7A4.5 4.5 0 0 0 19.5 12a4.5 4.5 0 0 0-3.34-4.3c.22-.53.34-1.1.34-1.7A4.5 4.5 0 0 0 12 2z"></path>
            <line x1="12" y1="6" x2="12" y2="18"></line>
            <path d="M9 10a3 3 0 0 0 6 0"></path>
            <path d="M9 14a3 3 0 0 0 6 0"></path>
          </svg>
        );
    }
  };

  return (
    <section className="section" id="servicos">
      <div className="container">
        {/* Section Header Split */}
        <div className="section-header-split">
          <div className="section-header-left">
            <div className="badge-pill">
              <span className="badge-pill-dot" />
              <span>{services.label}</span>
            </div>
            <h2 className="section-title">
              Soluções digitais <br />
              para o seu próximo nível
            </h2>
          </div>
          <div className="section-header-right">
            <p>{services.description}</p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-grid">
          {services.items.map((item) => (
            <div
              key={item.id}
              className="service-card"
              onClick={onOpenContact}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpenContact(); } }}
              role="button"
              tabIndex={0}
            >
              <div>
                <div className="service-card-icon">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.description}</p>
              </div>

              <div className="service-card-footer">
                <div className="service-card-arrow" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
