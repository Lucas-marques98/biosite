import dessMockup from '../assets/dess-locafacil-mockups.jpg';
import barberflowMockup from '../assets/barberflow-mockup.jpg';
import multimediaMockup from '../assets/multimedia-mockup.jpg';
import siteMockup from '../assets/site-profissional-mockup.jpg';
import { portfolioData } from '../data/portfolioData';

export default function SelectedWork({ onSelectProject, onOpenDessPage }) {
  const { projects } = portfolioData;

  const projectImages = {
    'dess-locafacil': dessMockup,
    barberflow: barberflowMockup,
    'sistema-multimidia': multimediaMockup,
    'site-profissional': siteMockup,
  };

  return (
    <section className="section" id="projetos">
      <div className="container">
        {/* Section Header */}
        <div className="projects-section-header">
          <div>
            <div className="badge-pill">
              <span className="badge-pill-dot" />
              <span>{projects.label}</span>
            </div>
            <h2 className="section-title">
              Projetos reais, <br />
              resultados concretos
            </h2>
          </div>
          <div>
            <a href="#todos-projetos" className="view-all-link">
              <span>Ver todos os projetos</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* 1. Main Featured Project (Dess Locafácil) */}
        <div className="project-featured-card">
          <div className="project-featured-content">
            <span className="project-badge">APP MOBILE</span>
            <h3 className="project-featured-title">Dess Locafácil</h3>
            <p className="project-featured-desc">
              App completo para gestão de locadores de veículos. Controle de carros, contratos, vistorias, clientes e muito mais. Desenvolvido com React Native, Supabase e foco em performance.
            </p>

            <div className="project-featured-actions">
              <button
                className="btn btn-primary btn-sm"
                onClick={onOpenDessPage}
              >
                <span>Ver detalhes</span>
                <span>→</span>
              </button>
              <button
                className="btn btn-white btn-sm"
                onClick={onOpenDessPage}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                <span>Conhecer projeto</span>
              </button>
            </div>
          </div>

          <div
            className="project-featured-visual"
            onClick={onOpenDessPage}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpenDessPage(); } }}
            role="button"
            tabIndex={0}
            aria-label="Ver apresentação completa do Dess Locafácil"
            style={{ cursor: 'pointer' }}
          >
            <img
              src={projectImages['dess-locafacil']}
              alt="Dess Locafácil Mobile App Preview"
              className="project-featured-img"
              width="650"
              height="380"
              loading="lazy"
            />
          </div>
        </div>

        {/* 2. Secondary Projects Row (3 Cards) */}
        <div className="projects-secondary-grid" id="todos-projetos">
          {projects.items.map((item) => {
            const img = projectImages[item.id] || barberflowMockup;
            return (
              <div
                key={item.id}
                className="project-secondary-card"
                onClick={() => onSelectProject(item, img)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelectProject(item, img); } }}
                role="button"
                tabIndex={0}
                aria-label={`Ver detalhes de ${item.title}`}
              >
                <div className="project-secondary-thumb">
                  <img
                    src={img}
                    alt={item.title}
                    className="project-secondary-img"
                    width="400"
                    height="250"
                    loading="lazy"
                  />
                </div>
                <div className="project-secondary-info">
                  <span className="project-badge">{item.badge}</span>
                  <h4 className="project-secondary-title">{item.title}</h4>
                  <p className="project-secondary-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
