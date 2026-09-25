import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ContactModal({ open, onClose }) {
  const { contact } = portfolioData;
  const [service, setService] = useState('Sites & Web');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
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
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Lucas! Meu nome é ${name.trim() || 'um visitante'}.\nEmail: ${email.trim() || 'Não informado'}\nTelefone: ${phone.trim() || 'Não informado'}\nÁrea do Projeto: ${service}\n\nDetalhes do Projeto:\n${message.trim() || 'Ideia inicial.'}`
    );
    window.open(`${contact.whatsappUrl.split("?")[0]}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar modal de contato"
        >
          ✕
        </button>

        <p className="eyebrow" style={{ color: 'var(--accent)' }}>Briefing Direto</p>
        <h2 id="modal-title">Vamos criar algo marcante.</h2>
        <p className="modal-copy">
          Preencha os dados do projeto e inicie a conversa com o contexto pré-estruturado.
        </p>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <span className="form-label">Área do projeto</span>
            <div className="category-pills">
              {['Sites & Web', 'Aplicativos / SaaS', 'Soluções de IA', 'Visual & Motion'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`category-pill-btn ${service === item ? 'is-active' : ''}`}
                  onClick={() => setService(item)}
                  aria-pressed={service === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label htmlFor="client-name" className="form-label">
                Seu Nome ou Empresa *
              </label>
              <input
                id="client-name"
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como posso te chamar?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="client-phone" className="form-label">
                WhatsApp / Telefone
              </label>
              <input
                id="client-phone"
                type="tel"
                className="form-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="client-email" className="form-label">
              Seu Email
            </label>
            <input
              id="client-email"
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@empresa.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="project-context" className="form-label">
              Contexto do projeto
            </label>
            <textarea
              id="project-context"
              className="form-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Objetivos, escopo, referências ou prazo estimado..."
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <span>Iniciar conversa no WhatsApp</span>
            <span className="arrow-icon" aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </div>
  );
}
