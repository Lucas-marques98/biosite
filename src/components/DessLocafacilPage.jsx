import { useState, useEffect } from 'react';
import dessMockupImg from '../assets/dess-locafacil-mockups.webp';
import '../dess-locafacil.css';

export default function DessLocafacilPage({ onBackToPortfolio, onOpenContact }) {
  const [theme, setTheme] = useState('dark');
  const [activeTourTab, setActiveTourTab] = useState('dashboard');
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeLang, setActiveLang] = useState('pt');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('todos');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tourScreens = {
    dashboard: {
      title: 'Dashboard Operacional',
      badge: 'Visão 360°',
      desc: 'Painel executivo com visão consolidada da sua locadora em tempo real: status dos carros, contratos em aberto, faturamento do mês e alertas de vencimento.',
      highlights: ['Métricas de ocupação da frota', 'Alertas de manutenções e devoluções', 'Gráficos de fluxo financeiro'],
    },
    veiculos: {
      title: 'Gestão Completa de Frota',
      badge: 'Controle de Veículos',
      desc: 'Cadastro de carros e motos com controle minucioso de placa, chassi, CRLV, odômetro atualizado, histórico de manutenções e status operacional.',
      highlights: ['Filtros por status (Disponível, Alugado, Oficina)', 'Histórico de todas as locações anteriores', 'Avisos de troca de óleo e pneus'],
    },
    clientes: {
      title: 'Base de Clientes & Locatários',
      badge: 'Leitura de CNH',
      desc: 'Centralize dados do locatário com leitura facilitada de CNH, comprovante de endereço, histórico de comportamento e pontuação de confiança.',
      highlights: ['Leitura e scanner de CNH', 'Histórico completo de contratos anteriores', 'Registro de contatos e WhatsApp direto'],
    },
    contratos: {
      title: 'Contratos Digitais Vinculados',
      badge: 'Geração em PDF',
      desc: 'Geração automática de contrato com os dados do cliente, veículo, caução e cláusulas personalizadas pronto para assinatura e envio por WhatsApp.',
      highlights: ['Geração instantânea em PDF', 'Vínculo direto com a locação', 'Estrutura para assinatura remota'],
    },
    vistorias: {
      title: 'Vistoria com Registro Fotográfico',
      badge: 'Entrada vs Devolução',
      desc: 'Checklist digital completo com fotos de avarias, nível de combustível, estepe e quilometragem de entrada e saída para eliminar atritos.',
      highlights: ['Registro de fotos com carimbo de data', 'Comparativo visual Entrada vs Devolução', 'Assinatura digital na entrega'],
    },
    financeiro: {
      title: 'Gestão Financeira & Caução',
      badge: 'Controle de Caixa',
      desc: 'Separação transparente entre receita operacional e valores sob custódia de caução, com controle de parcelas, multas e saldo pendente.',
      highlights: ['Rastreamento de cauções separadas de faturamento', 'Controle de parcelas recebidas e pendentes', 'Relatórios financeiros claros'],
    },
  };

  const faqList = [
    {
      q: 'O que é o DESS Locafácil?',
      a: 'O DESS Locafácil é uma plataforma completa criada para organizar e gerenciar operações de locação de veículos (carros e motos), centralizando veículos, clientes, contratos, vistorias e controle financeiro em um único lugar.',
    },
    {
      q: 'Preciso ter uma grande locadora para utilizar?',
      a: 'Não! O DESS Locafácil foi desenvolvido pensando tanto no pequeno proprietário que aluga de 1 a 5 carros/motos quanto em locadoras consolidadas e gestores de frota em crescimento.',
    },
    {
      q: 'Consigo cadastrar carros e motos?',
      a: 'Sim, o sistema é flexível e preparado para o gerenciamento de qualquer tipo de veículo da sua frota, permitindo personalizar especificações, odômetros e vistorias.',
    },
    {
      q: 'Consigo cadastrar e gerenciar meus clientes?',
      a: 'Sim, você centraliza todos os dados dos locatários, CNH, documentos, contatos e histórico completo de relacionamento e locações anteriores.',
    },
    {
      q: 'Como funciona o controle de contratos?',
      a: 'Os contratos são gerados automaticamente vinculados à locação, ao cliente e ao veículo selecionado, gerando documentos em PDF prontos para compartilhamento e assinatura.',
    },
    {
      q: 'Como são feitas as vistorias no aplicativo?',
      a: 'O sistema possui módulo de vistoria digital com checklist completo, registro fotográfico do estado do veículo e comparação direta entre o momento da entrega e da devolução.',
    },
    {
      q: 'Consigo acompanhar pagamentos e cobranças?',
      a: 'Sim! O DESS Locafácil permite registrar e acompanhar parcelas, valores pagos, vencimentos futuros, multas e saldos pendentes para manter a operação organizada.',
    },
    {
      q: 'O aplicativo realiza pagamentos bancários automáticos?',
      a: 'O foco atual do sistema é a gestão, controle e registro operacional e financeiro da locadora. Não atuamos como instituição bancária.',
    },
    {
      q: 'Meus dados e os dados dos meus clientes ficam seguros?',
      a: 'Sim. A plataforma utiliza autenticação moderna, controle de acesso seguro, banco de dados isolado com Row Level Security (RLS) e infraestrutura em nuvem de alta segurança.',
    },
  ];

  return (
    <div className={`dess-page-wrapper dess-theme-${theme}`}>
      {/* 1. Header / Navbar DESS */}
      <header className="dess-navbar">
        <div className="dess-container dess-nav-container">
          <div className="dess-logo">
            <span className="dess-logo-badge">DESS</span>
            <span>Locafácil</span>
          </div>

          <nav>
            <ul className="dess-nav-links">
              <li><a href="#produto" className="dess-nav-link" onClick={(e) => handleNavClick(e, 'produto')}>Produto</a></li>
              <li><a href="#funcionalidades" className="dess-nav-link" onClick={(e) => handleNavClick(e, 'funcionalidades')}>Funcionalidades</a></li>
              <li><a href="#como-funciona" className="dess-nav-link" onClick={(e) => handleNavClick(e, 'como-funciona')}>Como Funciona</a></li>
              <li><a href="#para-quem" className="dess-nav-link" onClick={(e) => handleNavClick(e, 'para-quem')}>Para Quem É</a></li>
              <li><a href="#seguranca" className="dess-nav-link" onClick={(e) => handleNavClick(e, 'seguranca')}>Segurança</a></li>
              <li><a href="#faq" className="dess-nav-link" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a></li>
            </ul>
          </nav>

          <div className="dess-nav-actions">
            {/* Theme Toggle (Light / Dark) */}
            <button
              className="dess-theme-toggle-btn"
              onClick={toggleTheme}
              title={`Alternar para tema ${theme === 'dark' ? 'Claro' : 'Escuro'}`}
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              )}
            </button>

            {/* Back to Portfolio Button */}
            <button className="dess-back-btn" onClick={onBackToPortfolio}>
              <span>← Voltar</span>
            </button>

            {/* CTA Button */}
            <button className="dess-btn dess-btn-primary dess-btn-sm" onClick={onOpenContact}>
              <span>Conhecer o Locafácil</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="dess-section dess-hero" id="produto">
        <div className="dess-container dess-hero-grid">
          <div>
            <div className="dess-badge">
              <span className="dess-badge-dot" />
              <span>Gestão de Locação de Veículos</span>
            </div>

            <h1 className="dess-title-large">
              Sua locadora organizada <br />
              <span className="dess-text-red">do contrato à vistoria.</span>
            </h1>

            <p className="dess-subtitle">
              Gerencie veículos, clientes, contratos, vistorias, cobranças, cauções e muito mais com uma plataforma criada para quem trabalha com locação.
            </p>

            <div className="dess-hero-actions">
              <button className="dess-btn dess-btn-primary" onClick={onOpenContact}>
                <span>Conhecer o DESS Locafácil</span>
                <span>→</span>
              </button>
              <a href="#como-funciona" className="dess-btn dess-btn-secondary" onClick={(e) => handleNavClick(e, 'como-funciona')}>
                <span>Ver como funciona</span>
              </a>
            </div>

            <div className="dess-hero-bullets">
              <div className="dess-bullet-item">
                <span className="dess-bullet-check">✓</span>
                <span>Gestão centralizada</span>
              </div>
              <div className="dess-bullet-item">
                <span className="dess-bullet-check">✓</span>
                <span>Mais organização</span>
              </div>
              <div className="dess-bullet-item">
                <span className="dess-bullet-check">✓</span>
                <span>Menos processos manuais</span>
              </div>
            </div>
          </div>

          <div className="dess-hero-mockup-wrapper">
            <img
              src={dessMockupImg}
              alt="DESS Locafácil App Showcase"
              className="dess-hero-mockup-img"
            />
          </div>
        </div>
      </section>

      {/* 3. Section — O Problema (Antes vs Depois) */}
      <section className="dess-section dess-section-alt">
        <div className="dess-container">
          <div className="dess-center" style={{ maxWidth: '720px' }}>
            <div className="dess-badge">
              <span className="dess-badge-dot" />
              <span>O Desafio da Gestão</span>
            </div>
            <h2 className="dess-title-medium">
              Sua locadora ainda depende de <br />
              <span className="dess-text-red">planilhas e mensagens espalhadas?</span>
            </h2>
            <p className="dess-subtitle dess-center">
              Quando cada informação fica em um lugar diferente, a operação perde tempo, clareza e controle financeiro.
            </p>
          </div>

          <div className="dess-problem-grid">
            <div className="dess-problem-card">
              <div className="dess-problem-icon">📄</div>
              <h3 className="dess-problem-title">Contratos em PDF soltos</h3>
              <p className="dess-problem-desc">Documentos arquivados em pastas perdidas no computador sem vínculo com a locação atual.</p>
            </div>

            <div className="dess-problem-card">
              <div className="dess-problem-icon">💬</div>
              <h3 className="dess-problem-title">Clientes misturados no WhatsApp</h3>
              <p className="dess-problem-desc">Comprovantes, fotos de CNH e mensagens perdidas no meio de conversas pessoais.</p>
            </div>

            <div className="dess-problem-card">
              <div className="dess-problem-icon">📸</div>
              <h3 className="dess-problem-title">Vistorias sem evidência clara</h3>
              <p className="dess-problem-desc">Fotos de amassados na galeria do celular sem checklist assinado pelo locatário.</p>
            </div>

            <div className="dess-problem-card">
              <div className="dess-problem-icon">⏳</div>
              <h3 className="dess-problem-title">Cobranças e vencimentos esquecidos</h3>
              <p className="dess-problem-desc">Dificuldade para saber quem já pagou a semana, quem está atrasado e quanto falta quitar.</p>
            </div>

            <div className="dess-problem-card">
              <div className="dess-problem-icon">🔒</div>
              <h3 className="dess-problem-title">Cauções misturadas com receita</h3>
              <p className="dess-problem-desc">Dinheiro da garantia usado no caixa do dia a dia, gerando surpresas na hora da devolução.</p>
            </div>

            <div className="dess-problem-card">
              <div className="dess-problem-icon">🛣️</div>
              <h3 className="dess-problem-title">Odômetro e KM anotados no papel</h3>
              <p className="dess-problem-desc">Falta de controle de quilometragem excedente e manutenções preventivas atrasadas.</p>
            </div>
          </div>

          <div className="dess-solution-banner">
            <div className="dess-solution-content">
              <h3>O DESS Locafácil reúne tudo isso em uma única plataforma.</h3>
              <p style={{ color: 'var(--dess-text-secondary)', fontSize: '0.95rem' }}>
                Desorganização → Centralização → Controle → Crescimento sustentável da sua locadora.
              </p>
            </div>
            <button className="dess-btn dess-btn-primary" onClick={onOpenContact}>
              <span>Centralizar minha operação</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Section — Os 6 Pilares do DESS Locafácil */}
      <section className="dess-section" id="funcionalidades">
        <div className="dess-container">
          <div className="dess-center" style={{ maxWidth: '680px' }}>
            <div className="dess-badge">
              <span className="dess-badge-dot" />
              <span>Recursos Essenciais</span>
            </div>
            <h2 className="dess-title-medium">
              Conheça o DESS Locafácil
            </h2>
            <p className="dess-subtitle dess-center">
              A plataforma definitiva para estruturar, organizar e operar sua locação de maneira profissional.
            </p>
          </div>

          <div className="dess-pillars-grid">
            <div className="dess-pillar-card">
              <div className="dess-pillar-icon">🚗</div>
              <h3 className="dess-pillar-title">Veículos</h3>
              <p className="dess-pillar-desc">Cadastre os veículos da operação, acompanhe informações, documentos, situação e histórico completo.</p>
            </div>

            <div className="dess-pillar-card">
              <div className="dess-pillar-icon">👤</div>
              <h3 className="dess-pillar-title">Clientes</h3>
              <p className="dess-pillar-desc">Centralize dados do locatário, documentos, CNH e histórico de relacionamento em poucos segundos.</p>
            </div>

            <div className="dess-pillar-card">
              <div className="dess-pillar-icon">🔑</div>
              <h3 className="dess-pillar-title">Locações</h3>
              <p className="dess-pillar-desc">Organize início, condições, valores, período, quilometragem e encerramento da locação com clareza.</p>
            </div>

            <div className="dess-pillar-card">
              <div className="dess-pillar-icon">📑</div>
              <h3 className="dess-pillar-title">Contratos</h3>
              <p className="dess-pillar-desc">Crie e mantenha contratos em PDF vinculados diretamente à locação e ao cliente.</p>
            </div>

            <div className="dess-pillar-card">
              <div className="dess-pillar-icon">🔍</div>
              <h3 className="dess-pillar-title">Vistorias</h3>
              <p className="dess-pillar-desc">Registre fotos, checklist e informações detalhadas do veículo antes e depois da locação.</p>
            </div>

            <div className="dess-pillar-card">
              <div className="dess-pillar-icon">💳</div>
              <h3 className="dess-pillar-title">Cobranças</h3>
              <p className="dess-pillar-desc">Acompanhe valores, vencimentos, parcelas e pagamentos registrados na operação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Tour: Explore o DESS Locafácil */}
      <section className="dess-section dess-section-alt">
        <div className="dess-container">
          <div className="dess-center" style={{ maxWidth: '640px' }}>
            <div className="dess-badge">
              <span className="dess-badge-dot" />
              <span>Tour Interativo</span>
            </div>
            <h2 className="dess-title-medium">
              Explore o DESS Locafácil
            </h2>
            <p className="dess-subtitle dess-center">
              Navegue pelos módulos e veja como cada recurso simplifica a rotina de quem gerencia locação de veículos.
            </p>
          </div>

          <div className="dess-tour-wrapper">
            <div className="dess-tour-nav">
              {Object.keys(tourScreens).map((key) => (
                <button
                  key={key}
                  className={`dess-tour-tab ${activeTourTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTourTab(key)}
                >
                  <span>{tourScreens[key].title}</span>
                  <span style={{ fontSize: '0.8rem' }}>→</span>
                </button>
              ))}
            </div>

            <div className="dess-tour-display">
              <div className="dess-module-info">
                <span className="dess-badge" style={{ marginBottom: '8px' }}>
                  {tourScreens[activeTourTab].badge}
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dess-text)' }}>
                  {tourScreens[activeTourTab].title}
                </h3>
                <p style={{ color: 'var(--dess-text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {tourScreens[activeTourTab].desc}
                </p>

                <div className="dess-module-features">
                  {tourScreens[activeTourTab].highlights.map((item, i) => (
                    <div key={i} className="dess-module-feature-item">
                      <span className="dess-module-feature-bullet">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '16px' }}>
                  <button className="dess-btn dess-btn-primary dess-btn-sm" onClick={onOpenContact}>
                    <span>Ver demonstração deste módulo</span>
                  </button>
                </div>
              </div>

              <div className="dess-module-card-preview">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--dess-card-border)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="dess-logo-badge">DESS</span>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Locafácil UI</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--dess-text-muted)', fontWeight: 600 }}>Dados Demonstrativos</span>
                </div>

                <div key={activeTourTab} className="dess-tour-screen-content">
                  {activeTourTab === 'dashboard' && (
                    <div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ background: 'var(--dess-bg-tertiary)', padding: '14px', borderRadius: '10px' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--dess-text-muted)' }}>Veículos Alugados</span>
                          <h4 style={{ fontSize: '1.4rem', color: 'var(--dess-red)', fontWeight: 800, marginTop: '4px' }}>8 / 10</h4>
                        </div>
                        <div style={{ background: 'var(--dess-bg-tertiary)', padding: '14px', borderRadius: '10px' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--dess-text-muted)' }}>Taxa de Ocupação</span>
                          <h4 style={{ fontSize: '1.4rem', color: '#22c55e', fontWeight: 800, marginTop: '4px' }}>80%</h4>
                        </div>
                      </div>
                      <div style={{ background: 'var(--dess-bg-tertiary)', padding: '12px', borderRadius: '10px', fontSize: '0.85rem' }}>
                        <span style={{ fontWeight: 700 }}>🔔 Alerta:</span> Devolução de VW Gol agendada para hoje às 17h.
                      </div>
                    </div>
                  )}

                  {activeTourTab === 'veiculos' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Fiat Pulse 1.3 Drive</span>
                        <span className="dess-status-chip dess-status-green">Alugado</span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--dess-text-secondary)', marginBottom: '12px' }}>Placa: ABC-1234 • Odômetro: 42.150 KM</p>
                      <div style={{ background: 'var(--dess-bg-tertiary)', padding: '10px', borderRadius: '8px', fontSize: '0.8rem' }}>
                        Próxima Revisão: em 2.850 KM
                      </div>
                    </div>
                  )}

                  {activeTourTab === 'clientes' && (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--dess-red-light)', color: 'var(--dess-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                          LM
                        </div>
                        <div>
                          <h5 style={{ fontWeight: 800, fontSize: '0.95rem' }}>Felipe Souza da Silva</h5>
                          <p style={{ fontSize: '0.78rem', color: 'var(--dess-text-muted)' }}>CNH: Cat. B • Válida até 2028</p>
                        </div>
                      </div>
                      <div className="dess-status-chip dess-status-green" style={{ display: 'inline-block' }}>Cliente Verificado</div>
                    </div>
                  )}

                  {activeTourTab === 'contratos' && (
                    <div style={{ background: 'var(--dess-bg-tertiary)', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>📄</div>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Contrato_Locacao_#1042.pdf</span>
                      <p style={{ fontSize: '0.78rem', color: 'var(--dess-text-muted)', marginTop: '4px' }}>Vinculado a Fiat Pulse • 30 Dias</p>
                      <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <span className="dess-status-chip dess-status-blue">Compartilhar WhatsApp</span>
                      </div>
                    </div>
                  )}

                  {activeTourTab === 'vistorias' && (
                    <div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                        <div style={{ background: 'var(--dess-bg-tertiary)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22c55e' }}>ENTRADA</span>
                          <p style={{ fontSize: '0.78rem', marginTop: '4px' }}>4 Fotos • Tanque Cheio</p>
                        </div>
                        <div style={{ background: 'var(--dess-bg-tertiary)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--dess-red)' }}>DEVOLUÇÃO</span>
                          <p style={{ fontSize: '0.78rem', marginTop: '4px' }}>Conferência OK</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--dess-text-muted)', textAlign: 'center' }}>Checklist digital 100% verificado</p>
                    </div>
                  )}

                  {activeTourTab === 'financeiro' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontSize: '0.85rem' }}>Caução em Custódia:</span>
                        <strong style={{ color: 'var(--dess-red)' }}>R$ 1.500,00</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontSize: '0.85rem' }}>Semanalidade:</span>
                        <strong style={{ color: '#22c55e' }}>R$ 650,00 (Pago)</strong>
                      </div>
                      <div className="dess-status-chip dess-status-green" style={{ width: '100%', textAlign: 'center', marginTop: '8px' }}>
                        Nenhuma pendência ativa
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Módulo de Vistorias Detalhado: Entrada vs Devolução */}
      <section className="dess-section">
        <div className="dess-container">
          <div className="dess-module-split">
            <div className="dess-module-info">
              <div className="dess-badge">
                <span className="dess-badge-dot" />
                <span>Vistorias Seguras</span>
              </div>
              <h2 className="dess-title-medium">
                Vistorias com histórico <br />
                <span className="dess-text-red">e registro visual de evidências</span>
              </h2>
              <p className="dess-subtitle">
                Elimine discussões no momento da devolução. Registre checklist de lataria, pneus, estepe, estofados e quilometragem antes da entrega das chaves.
              </p>

              <div className="dess-inspection-comparator">
                <div className="dess-inspection-col">
                  <span className="dess-inspection-badge entry">Vistoria de Entrada</span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--dess-text-secondary)' }}>
                    <li>✓ Checklist com 24 itens</li>
                    <li>✓ Registro de 6 fotos do veículo</li>
                    <li>✓ Odômetro: 40.000 KM</li>
                    <li>✓ Tanque: 100% (Cheio)</li>
                  </ul>
                </div>

                <div className="dess-inspection-col">
                  <span className="dess-inspection-badge return">Vistoria de Devolução</span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--dess-text-secondary)' }}>
                    <li>✓ Checagem de novas avarias</li>
                    <li>✓ Cálculo de KM rodado</li>
                    <li>✓ Conferência de combustível</li>
                    <li>✓ Liberação rápida de caução</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="dess-module-card-preview">
                <h4 style={{ fontWeight: 800, marginBottom: '14px', fontSize: '1.1rem' }}>Fluxo de Inspeção Inteligente</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ background: 'var(--dess-bg-tertiary)', padding: '14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.4rem' }}>📱</span>
                    <div>
                      <strong style={{ fontSize: '0.9rem' }}>Fotos no Smartphone</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--dess-text-muted)' }}>Envio direto com marcação de data e hora</p>
                    </div>
                  </div>

                  <div style={{ background: 'var(--dess-bg-tertiary)', padding: '14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.4rem' }}>✍️</span>
                    <div>
                      <strong style={{ fontSize: '0.9rem' }}>Assinatura na Tela</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--dess-text-muted)' }}>Locatário confere e valida o checklist no ato</p>
                    </div>
                  </div>

                  <div style={{ background: 'var(--dess-bg-tertiary)', padding: '14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.4rem' }}>🔒</span>
                    <div>
                      <strong style={{ fontSize: '0.9rem' }}>Histórico Imutável</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--dess-text-muted)' }}>Registro arquivado na nuvem e no contrato</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Como Funciona & Fluxo da Locação */}
      <section className="dess-section dess-section-alt" id="como-funciona">
        <div className="dess-container">
          <div className="dess-center" style={{ maxWidth: '680px' }}>
            <div className="dess-badge">
              <span className="dess-badge-dot" />
              <span>Passo a Passo</span>
            </div>
            <h2 className="dess-title-medium">
              Da entrada do cliente <br />
              <span className="dess-text-red">ao encerramento da locação.</span>
            </h2>
            <p className="dess-subtitle dess-center">
              Um fluxo claro e sem atritos para você operar com segurança e rapidez.
            </p>
          </div>

          <div className="dess-workflow-steps">
            <div className="dess-step-card">
              <div className="dess-step-number">1</div>
              <span className="dess-step-label">Cadastre sua locadora</span>
            </div>
            <div className="dess-step-card">
              <div className="dess-step-number">2</div>
              <span className="dess-step-label">Adicione seus veículos</span>
            </div>
            <div className="dess-step-card">
              <div className="dess-step-number">3</div>
              <span className="dess-step-label">Cadastre o cliente</span>
            </div>
            <div className="dess-step-card">
              <div className="dess-step-number">4</div>
              <span className="dess-step-label">Crie a locação</span>
            </div>
            <div className="dess-step-card">
              <div className="dess-step-number">5</div>
              <span className="dess-step-label">Vistoria e contrato</span>
            </div>
            <div className="dess-step-card">
              <div className="dess-step-number">6</div>
              <span className="dess-step-label">Acompanhe operação</span>
            </div>
            <div className="dess-step-card">
              <div className="dess-step-number">7</div>
              <span className="dess-step-label">Fechamento e histórico</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Para Quem É (4 Cards) */}
      <section className="dess-section" id="para-quem">
        <div className="dess-container">
          <div className="dess-center" style={{ maxWidth: '640px' }}>
            <div className="dess-badge">
              <span className="dess-badge-dot" />
              <span>Público-Alvo</span>
            </div>
            <h2 className="dess-title-medium">
              Para quem foi feito o DESS Locafácil?
            </h2>
            <p className="dess-subtitle dess-center">
              Criado para acompanhar quem está alugando o primeiro veículo até frotas consolidadas.
            </p>
          </div>

          <div className="dess-audience-grid">
            <div className="dess-audience-card">
              <div style={{ fontSize: '1.8rem' }}>🚀</div>
              <h3 className="dess-audience-title">Estou começando uma locadora</h3>
              <p className="dess-audience-desc">Quero sair das planilhas desde o primeiro dia e começar com processo 100% profissional e organizado.</p>
            </div>

            <div className="dess-audience-card">
              <div style={{ fontSize: '1.8rem' }}>🚗</div>
              <h3 className="dess-audience-title">Tenho alguns carros alugados</h3>
              <p className="dess-audience-desc">Alugo para motoristas de app ou particulares e preciso de controle rigoroso de pagamentos e vistorias.</p>
            </div>

            <div className="dess-audience-card">
              <div style={{ fontSize: '1.8rem' }}>🏢</div>
              <h3 className="dess-audience-title">Já tenho uma locadora ativa</h3>
              <p className="dess-audience-desc">Preciso centralizar contratos, cobranças e equipe em uma única plataforma para ganhar escala e tempo.</p>
            </div>

            <div className="dess-audience-card">
              <div style={{ fontSize: '1.8rem' }}>📊</div>
              <h3 className="dess-audience-title">Administro frotas</h3>
              <p className="dess-audience-desc">Quero acompanhar odômetro, despesas, manutenções preventivas e histórico detalhado dos veículos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Antes x DESS Locafácil (Tabela Comparativa) */}
      <section className="dess-section dess-section-alt">
        <div className="dess-container">
          <div className="dess-center" style={{ maxWidth: '640px' }}>
            <div className="dess-badge">
              <span className="dess-badge-dot" />
              <span>Comparativo</span>
            </div>
            <h2 className="dess-title-medium">
              Antes vs DESS Locafácil
            </h2>
            <p className="dess-subtitle dess-center">
              A evolução prática na rotina diária da sua operação de locação.
            </p>
          </div>

          <div className="dess-compare-table">
            <div className="dess-compare-row dess-compare-header">
              <div>Modo Tradicional (Planilhas & WhatsApp)</div>
              <div className="dess-text-red">Com o DESS Locafácil</div>
            </div>

            <div className="dess-compare-row">
              <div className="dess-compare-item">❌ Planilhas diferentes e desatualizadas</div>
              <div className="dess-compare-item">✓ Veículos centralizados em tempo real</div>
            </div>

            <div className="dess-compare-row">
              <div className="dess-compare-item">❌ Documentos e CNH perdidos no chat</div>
              <div className="dess-compare-item">✓ Clientes e documentos organizados na nuvem</div>
            </div>

            <div className="dess-compare-row">
              <div className="dess-compare-item">❌ Contratos soltos sem assinatura fácil</div>
              <div className="dess-compare-item">✓ Contratos em PDF vinculados à locação</div>
            </div>

            <div className="dess-compare-row">
              <div className="dess-compare-item">❌ Fotos de vistoria perdidas na galeria</div>
              <div className="dess-compare-item">✓ Checklist com fotos comparativas Entrada vs Saída</div>
            </div>

            <div className="dess-compare-row">
              <div className="dess-compare-item">❌ Cobranças manuais e datas esquecidas</div>
              <div className="dess-compare-item">✓ Painel de vencimentos e controle de parcelas</div>
            </div>

            <div className="dess-compare-row">
              <div className="dess-compare-item">❌ Falta de histórico na devolução</div>
              <div className="dess-compare-item">✓ Histórico imutável de todas as locações</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Segurança & Multi-idioma */}
      <section className="dess-section" id="seguranca">
        <div className="dess-container">
          <div className="dess-module-split">
            <div className="dess-module-info">
              <div className="dess-badge">
                <span className="dess-badge-dot" />
                <span>Privacidade & Segurança</span>
              </div>
              <h2 className="dess-title-medium">
                Sua operação precisa de organização. <br />
                <span className="dess-text-red">Seus dados também.</span>
              </h2>
              <p className="dess-subtitle">
                Infraestrutura moderna e segura. Seus contratos, fotos e dados de locatários protegidos com controle de acesso rigoroso e isolamento de informações.
              </p>

              <div className="dess-module-features">
                <div className="dess-module-feature-item">
                  <span className="dess-module-feature-bullet">🔒</span>
                  <span>Autenticação segura e controle de permissões</span>
                </div>
                <div className="dess-module-feature-item">
                  <span className="dess-module-feature-bullet">🛡️</span>
                  <span>Banco de dados com Row Level Security (RLS)</span>
                </div>
                <div className="dess-module-feature-item">
                  <span className="dess-module-feature-bullet">☁️</span>
                  <span>Backups em nuvem e documentos protegidos</span>
                </div>
              </div>
            </div>

            <div>
              <div className="dess-module-card-preview">
                <h4 style={{ fontWeight: 800, marginBottom: '16px' }}>Suporte Multi-Idioma</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--dess-text-secondary)', marginBottom: '16px' }}>
                  A plataforma foi estruturada para operar em múltiplos idiomas, ideal para locadoras que atendem turistas e clientes internacionais:
                </p>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    className={`dess-status-chip ${activeLang === 'pt' ? 'dess-status-red' : 'dess-status-green'}`}
                    onClick={() => setActiveLang('pt')}
                  >
                    🇧🇷 Português (Brasil)
                  </button>
                  <button
                    className={`dess-status-chip ${activeLang === 'en' ? 'dess-status-red' : 'dess-status-green'}`}
                    onClick={() => setActiveLang('en')}
                  >
                    🇺🇸 English
                  </button>
                  <button
                    className={`dess-status-chip ${activeLang === 'es' ? 'dess-status-red' : 'dess-status-green'}`}
                    onClick={() => setActiveLang('es')}
                  >
                    🇪🇸 Español
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ Accordion */}
      <section className="dess-section dess-section-alt" id="faq">
        <div className="dess-container">
          <div className="dess-center" style={{ maxWidth: '640px' }}>
            <div className="dess-badge">
              <span className="dess-badge-dot" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="dess-title-medium">
              Perguntas Frequentes
            </h2>
            <p className="dess-subtitle dess-center">
              Tudo o que você precisa saber sobre o funcionamento do DESS Locafácil.
            </p>
          </div>

          <div className="dess-faq-list">
            {faqList.map((item, idx) => (
              <div key={idx} className="dess-faq-item">
                <button
                  className="dess-faq-question"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span>{item.q}</span>
                  <span className={`dess-faq-icon ${activeFaq === idx ? 'is-open' : ''}`}>
                    +
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="dess-faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="dess-section">
        <div className="dess-container">
          <div className="dess-cta-card">
            <div className="dess-badge" style={{ marginBottom: '16px' }}>
              <span className="dess-badge-dot" />
              <span>Pronto para dar o próximo passo?</span>
            </div>
            <h2 className="dess-title-medium" style={{ maxWidth: '720px', margin: '0 auto 16px' }}>
              Pare de administrar sua locadora no improviso.
            </h2>
            <p className="dess-subtitle dess-center" style={{ marginBottom: '32px' }}>
              Tenha veículos, clientes, contratos, vistorias, cobranças e informações importantes organizados em uma única plataforma.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="dess-btn dess-btn-primary" onClick={onOpenContact}>
                <span>Conhecer o DESS Locafácil</span>
                <span>→</span>
              </button>
              <button className="dess-btn dess-btn-secondary" onClick={onBackToPortfolio}>
                <span>← Voltar ao Portfólio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="dess-footer">
        <div className="dess-container">
          <div className="dess-footer-top">
            <div className="dess-logo">
              <span className="dess-logo-badge">DESS</span>
              <span>Locafácil</span>
            </div>

            <ul className="dess-footer-links">
              <li><a href="#produto" onClick={(e) => handleNavClick(e, 'produto')}>Produto</a></li>
              <li><a href="#funcionalidades" onClick={(e) => handleNavClick(e, 'funcionalidades')}>Funcionalidades</a></li>
              <li><a href="#como-funciona" onClick={(e) => handleNavClick(e, 'como-funciona')}>Como Funciona</a></li>
              <li><a href="#seguranca" onClick={(e) => handleNavClick(e, 'seguranca')}>Segurança</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a></li>
            </ul>

            <div>
              <button className="dess-btn dess-btn-primary dess-btn-sm" onClick={onOpenContact}>
                <span>Falar com a DESS</span>
              </button>
            </div>
          </div>

          <div className="dess-footer-bottom">
            <p>© 2026 DESS Locafácil • Desenvolvido por Lucas Marques. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
