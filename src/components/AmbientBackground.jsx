import React, { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Orbs parameters
    const orbs = [
      { x: width * 0.25, y: height * 0.35, r: 380, vx: 0.25, vy: 0.18, color: 'rgba(99, 102, 241, 0.08)' },
      { x: width * 0.75, y: height * 0.45, r: 420, vx: -0.2, vy: 0.25, color: 'rgba(124, 58, 237, 0.07)' },
      { x: width * 0.5, y: height * 0.8, r: 350, vx: 0.18, vy: -0.22, color: 'rgba(56, 189, 248, 0.05)' },
    ];

    let t = 0;

    const render = () => {
      t += 0.006;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // Draw ambient orbs
      orbs.forEach((orb, i) => {
        // Subtle natural drift
        orb.x += Math.sin(t + i * 2) * 0.6;
        orb.y += Math.cos(t + i * 1.5) * 0.6;

        // Subtle reaction to mouse
        const dx = mouseX - orb.x;
        const dy = mouseY - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const shiftX = (dx / (dist + 100)) * 25;
        const shiftY = (dy / (dist + 100)) * 25;

        const currentX = orb.x + shiftX;
        const currentY = orb.y + shiftY;

        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          orb.r
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.6, orb.color.replace(/[\d\.]+\)$/, '0.02)'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Cursor spotlight ambient glow
      const cursorGradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        280
      );
      cursorGradient.addColorStop(0, 'rgba(124, 58, 237, 0.05)');
      cursorGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = cursorGradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 280, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
