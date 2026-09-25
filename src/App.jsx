import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Technologies from './components/Technologies';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import { MusicProvider } from './context/MusicContext';

const DessLocafacilPage = lazy(() => import('./components/DessLocafacilPage'));

function useScrollAnimations(currentView) {
  useEffect(() => {
    let timeoutId;

    const initObserver = () => {
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      };

      // Responsive margin: tighter threshold for mobile and desktop alike
      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: '0px 0px -25px 0px',
        threshold: 0.02,
      });

      const selector = [
        // Portfolio selectors
        '.service-card',
        '.project-featured-card',
        '.project-secondary-card',
        '.tech-card',
        '.about-visual',
        '.about-content',
        '.cta-content',
        '.cta-features-card',
        '.section-header-split',
        '.projects-section-header',
        // DESS SaaS selectors
        '.dess-hero-mockup-wrapper',
        '.dess-problem-card',
        '.dess-pillar-card',
        '.dess-solution-banner',
        '.dess-module-split',
        '.dess-step-card',
        '.dess-tour-display',
        '.dess-audience-card',
        '.dess-compare-table',
        '.dess-faq-item',
        '.dess-cta-card',
      ].join(', ');

      const elements = document.querySelectorAll(selector);
      const viewportHeight = window.innerHeight;

      elements.forEach((el, index) => {
        el.classList.add('reveal-fade-up');
        const staggerClass = `delay-${(index % 4) + 1}`;
        el.classList.add(staggerClass);

        // If already within viewport on load, reveal immediately without lag
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    // Small delay ensures DOM is fully rendered after route/view transition
    let activeObserver;
    timeoutId = setTimeout(() => {
      activeObserver = initObserver();
    }, 60);

    return () => {
      clearTimeout(timeoutId);
      if (activeObserver) activeObserver.disconnect();
    };
  }, [currentView]);
}

export default function App() {
  const [currentView, setCurrentView] = useState('portfolio');
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedVisual, setSelectedVisual] = useState(null);

  // Check URL Hash for direct page navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#dess-locafacil') {
        setCurrentView('dess-locafacil');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (currentView === 'dess-locafacil' && window.location.hash === '') {
        setCurrentView('portfolio');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  useScrollAnimations(currentView);

  const handleOpenProject = (project, visual) => {
    if (project.id === 'dess-locafacil') {
      navigateToDess();
      return;
    }
    setSelectedProject(project);
    setSelectedVisual(visual);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setSelectedVisual(null);
  };

  const navigateToDess = () => {
    window.location.hash = 'dess-locafacil';
    setCurrentView('dess-locafacil');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPortfolio = () => {
    window.location.hash = '';
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MusicProvider>
      <div className="site-shell">
        {currentView === 'dess-locafacil' ? (
          /* ================= DESS LOCAFÁCIL SAAS PRESENTATION ================= */
          <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>Carregando...</div>}>
            <DessLocafacilPage
              onBackToPortfolio={navigateToPortfolio}
              onOpenContact={() => setContactOpen(true)}
            />
          </Suspense>
        ) : (
          /* ================= MAIN PORTFOLIO ================= */
          <>
            {/* 1. Header Navigation */}
            <Navbar onOpenContact={() => setContactOpen(true)} />

            <main>
              {/* 2. Hero Section */}
              <Hero onOpenContact={() => setContactOpen(true)} />

              {/* 3. Services Section ("O que eu faço") */}
              <Services onOpenContact={() => setContactOpen(true)} />

              {/* 4. Featured Projects Section ("Projetos em destaque") */}
              <SelectedWork
                onSelectProject={handleOpenProject}
                onOpenContact={() => setContactOpen(true)}
                onOpenDessPage={navigateToDess}
              />

              {/* 5. Technologies Section ("Tecnologias") */}
              <Technologies />

              {/* 6. About Me Section ("Sobre mim") */}
              <About onOpenContact={() => setContactOpen(true)} />

              {/* 7. Contact CTA Section ("Vamos conversar?") */}
              <ContactSection onOpenContact={() => setContactOpen(true)} />
            </main>

            {/* 8. Footer */}
            <Footer />
          </>
        )}

        {/* Project Details Modal (for secondary projects) */}
        <ProjectModal
          project={selectedProject}
          visualImg={selectedVisual}
          onClose={handleCloseProject}
        />

        {/* Contact / WhatsApp Modal */}
        <ContactModal
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </MusicProvider>
  );
}
