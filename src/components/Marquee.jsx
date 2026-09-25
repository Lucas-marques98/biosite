import { useEffect, useRef } from 'react';

const MARQUEE_ITEMS = [
  'WEB DEVELOPMENT',
  'APPS & SYSTEMS',
  'AI AUTOMATION',
  'UX/UI DESIGN',
  'BRANDING',
  'VISUAL & MOTION',
];

export default function Marquee() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const animation = track.animate(
      [
        { transform: 'translateX(0%)' },
        { transform: 'translateX(-50%)' },
      ],
      {
        duration: 26000,
        iterations: Infinity,
        easing: 'linear',
      }
    );

    const handleMouseEnter = () => {
      animation.playbackRate = 0.4;
    };

    const handleMouseLeave = () => {
      animation.playbackRate = 1.0;
    };

    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animation.cancel();
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="marquee-wrapper"
      ref={wrapperRef}
      role="region"
      aria-label="Áreas de especialidade em movimento contínuo"
    >
      <div className="marquee-track" ref={trackRef}>
        {/* Set 1 */}
        <div className="marquee-group">
          {MARQUEE_ITEMS.map((item, index) => (
            <span key={`group1-${index}`} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-star" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
        {/* Set 2 */}
        <div className="marquee-group" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, index) => (
            <span key={`group2-${index}`} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-star" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
