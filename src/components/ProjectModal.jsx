import { useEffect, useRef } from 'react';

export default function ProjectModal({ project, visualImg, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const previousFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const dialog = closeBtnRef.current?.closest('[role=dialog]');
        const items = dialog?.querySelectorAll('button, a[href], input, textarea, select, [tabindex="0"]');
        if (!items?.length) return;
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      previousFocus?.focus();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="project-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-heading"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal-header">
          <div>
            <p className="eyebrow" style={{ color: 'var(--accent)' }}>
              Projeto • {project.badge}
            </p>
            <h2 id="project-modal-heading" className="project-modal-title">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeBtnRef}
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar case study"
          >
            ✕
          </button>
        </div>

        {/* Project Image Preview */}
        {visualImg && (
          <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid var(--border)' }}>
            <img
              src={visualImg}
              alt={project.title}
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }}
            />
          </div>
        )}

        <div className="project-modal-body">
          {/* Overview */}
          <div className="project-modal-section">
            <h4>Visão Geral</h4>
            <p>{project.description}</p>
          </div>

          {/* Challenge & Solution */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {project.challenge && (
              <div className="project-modal-section">
                <h4>O Desafio</h4>
                <p>{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div className="project-modal-section">
                <h4>A Solução</h4>
                <p>{project.solution}</p>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          {project.techs && (
            <div className="project-modal-section">
              <h4>Tecnologias & Arquitetura</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.5rem' }}>
                {project.techs.map((tech) => (
                  <span key={tech} className="tag-pill" style={{ borderColor: 'var(--border-hover)', color: 'var(--text-primary)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && (
            <div className="project-modal-section">
              <h4>Resultados Chave</h4>
              <div className="project-modal-metrics">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="metric-card">
                    <span style={{ color: 'var(--accent)' }}>✦</span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
