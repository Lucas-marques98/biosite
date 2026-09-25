import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer and hover support
    const isFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || isReducedMotion) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let animationId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hovered element
      const target = e.target;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, .card-specialty');
      const isProjectView = target.closest('[data-cursor="view"]');

      if (isProjectView) {
        setIsViewing(true);
        setIsHovering(false);
      } else if (isInteractive) {
        setIsViewing(false);
        setIsHovering(true);
      } else {
        setIsViewing(false);
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp for outer follower circle
    const animate = () => {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />

      {/* Smooth outer follower with dynamic states */}
      <div
        ref={followerRef}
        className={`cursor-follower ${isHovering ? 'is-hovering' : ''} ${isViewing ? 'is-viewing' : ''}`}
        aria-hidden="true"
      >
        <span className="cursor-view-text">VER</span>
      </div>
    </>
  );
}
