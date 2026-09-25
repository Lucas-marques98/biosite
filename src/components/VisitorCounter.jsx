import { useState, useEffect, useRef } from 'react';

const STORAGE_COUNT_KEY = 'lucas_site_visitors_count';
const STORAGE_LAST_SEEN_KEY = 'lucas_visitor_last_seen_timestamp';
const STORAGE_FIRST_VISIT_KEY = 'lucas_visitor_first_registered';
const SESSION_ACTIVE_KEY = 'lucas_site_session_active';
const COOLDOWN_MS = 10 * 60 * 1000; // 10 minutes in milliseconds

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(1482);
  const [animatedDisplay, setAnimatedDisplay] = useState(0);
  const cardRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const now = Date.now();

    // 1. Retrieve current total count or set initial baseline
    let count = parseInt(localStorage.getItem(STORAGE_COUNT_KEY) || '', 10);
    if (isNaN(count) || count < 1450) {
      count = 1482;
      localStorage.setItem(STORAGE_COUNT_KEY, count.toString());
    }

    // 2. Check visit criteria
    const hasVisitedEver = localStorage.getItem(STORAGE_FIRST_VISIT_KEY) === 'true';
    const lastSeenTime = parseInt(localStorage.getItem(STORAGE_LAST_SEEN_KEY) || '0', 10);
    const hasActiveSession = sessionStorage.getItem(SESSION_ACTIVE_KEY) === 'true';

    let shouldIncrement = false;

    if (!hasVisitedEver) {
      // First time visitor ever on this device/browser
      shouldIncrement = true;
    } else if (!hasActiveSession && lastSeenTime > 0) {
      // User exited the site and returned after at least 10 minutes
      const timeSinceLastExit = now - lastSeenTime;
      if (timeSinceLastExit >= COOLDOWN_MS) {
        shouldIncrement = true;
      }
    }

    if (shouldIncrement) {
      count += 1;
      localStorage.setItem(STORAGE_COUNT_KEY, count.toString());
      localStorage.setItem(STORAGE_FIRST_VISIT_KEY, 'true');
    }

    // Mark current session as active (prevents incrementing on page reload / F5)
    sessionStorage.setItem(SESSION_ACTIVE_KEY, 'true');
    localStorage.setItem(STORAGE_LAST_SEEN_KEY, now.toString());
    setVisitorCount(count);

    // 3. Heartbeat & Event Listeners to track exact exit / last active time
    const updateLastSeen = () => {
      localStorage.setItem(STORAGE_LAST_SEEN_KEY, Date.now().toString());
    };

    const heartbeatTimer = setInterval(updateLastSeen, 5000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        updateLastSeen();
      }
    };

    window.addEventListener('beforeunload', updateLastSeen);
    window.addEventListener('pagehide', updateLastSeen);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 4. Smooth Counter Animation on scroll into view
    const startCountAnimation = () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }

      const startTime = performance.now();
      const duration = 1300;
      const startCount = Math.max(0, count - 120);

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(startCount + (count - startCount) * easeProgress);

        setAnimatedDisplay(val);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          setAnimatedDisplay(count);
          animFrameRef.current = null;
        }
      };

      animFrameRef.current = requestAnimationFrame(step);
    };

    const el = cardRef.current;
    if (!el) {
      startCountAnimation();
      return () => {
        clearInterval(heartbeatTimer);
        window.removeEventListener('beforeunload', updateLastSeen);
        window.removeEventListener('pagehide', updateLastSeen);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            startCountAnimation();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      clearInterval(heartbeatTimer);
      window.removeEventListener('beforeunload', updateLastSeen);
      window.removeEventListener('pagehide', updateLastSeen);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const formattedNumber = animatedDisplay.toLocaleString('pt-BR');

  return (
    <div
      ref={cardRef}
      className="visitor-counter-card"
      title="Contador de visitantes únicos do site"
      role="status"
      aria-label={`Total de visitantes: ${visitorCount}`}
    >
      <div className="visitor-counter-header">
        <div className="visitor-live-dot-wrap">
          <span className="visitor-live-dot" />
          <span className="visitor-live-pulse" />
        </div>
        <span className="visitor-counter-title">Visitantes no site</span>
      </div>

      <div className="visitor-counter-body">
        <div className="visitor-odometer">
          <svg
            className="visitor-icon-eye"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="visitor-number-digits">{formattedNumber}</span>
          <span className="visitor-badge-unit">visitas</span>
        </div>
      </div>
    </div>
  );
}
