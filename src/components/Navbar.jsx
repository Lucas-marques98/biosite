import SocialLinks from './SocialLinks';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { LogoLM } from './LogoLM';
import HeaderMusicButton from './HeaderMusicButton';

export default function Navbar({ onOpenContact }) {
  const { navigation, personal } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const dismiss = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        document.querySelector('.mobile-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', dismiss);
    return () => window.removeEventListener('keydown', dismiss);
  }, [mobileMenuOpen]);

  useEffect(() => {
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 30);

          const sections = ['inicio', 'sobre', 'projetos', 'servicos', 'contato'];
          const scrollPos = scrollY + 220;

          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#inicio" className="navbar-logo" onClick={(e) => handleNavClick(e, '#inicio')}>
            <LogoLM size={36} />
            <span className="navbar-brand-text">{personal.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="navbar-nav-desktop">
            <ul className="navbar-links">
              {navigation.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`navbar-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Music Control Button - Easy Access */}
          <HeaderMusicButton className="header-music-desktop" />

          <SocialLinks className="header-socials" />

          {/* Right CTA Button with Paper Airplane */}
          <div className="navbar-cta">
            <button
              className="navbar-cta-btn"
              onClick={onOpenContact}
              aria-label="Vamos conversar"
            >
              <span>Vamos conversar</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(45deg)' }}>
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

          {/* Mobile Music Button */}
          <HeaderMusicButton className="header-music-mobile" />

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div id="mobile-navigation" inert={!mobileMenuOpen} className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        {navigation.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-drawer-link"
            style={{ transitionDelay: `${index * 40}ms` }}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.name}
          </a>
        ))}
        <div style={{ padding: '12px 0 4px', display: 'flex', justifyContent: 'center' }}>
          <HeaderMusicButton className="header-music-drawer" />
        </div>
        <button
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '12px' }}
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenContact();
          }}
        >
          <span>Vamos conversar</span>
          <span style={{ fontSize: '1.1rem' }}>✈</span>
        </button>
      </div>
    </>
  );
}
