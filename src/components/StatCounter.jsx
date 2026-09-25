import { useState, useEffect, useRef } from 'react';

export default function StatCounter({ rawNumber, label }) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const animFrameRef = useRef(null);
  const timeoutRef = useRef(null);

  // Extract prefix (+), number, and suffix (%)
  const match = String(rawNumber).match(/^([^\d]*)(\d+)([^\d]*)$/);
  const prefix = match ? match[1] : '';
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  const runCountUp = (duration = 1000) => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    const startTime = performance.now();
    const startVal = 0;

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startVal + (target - startVal) * easeProgress);

      setDisplayNumber(currentVal);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(updateCount);
      } else {
        setDisplayNumber(target);
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            runCountUp(1100);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    // Fallback if already in view
    const timer = setTimeout(() => {
      if (!hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        runCountUp(1100);
      }
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [target]);

  const handleInteraction = () => {
    setIsInteracted(true);
    runCountUp(550);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsInteracted(false);
    }, 600);
  };

  return (
    <div
      ref={elementRef}
      className={`hero-stat-item ${isInteracted ? 'is-hovered' : ''}`}
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
      tabIndex={0}
      role="group"
      aria-label={`${label}: ${rawNumber}`}
    >
      <div className="hero-stat-number-wrap">
        <span className="hero-stat-number">
          {prefix}{displayNumber}{suffix}
        </span>
        <span className="hero-stat-glow-aura" aria-hidden="true" />
      </div>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}
