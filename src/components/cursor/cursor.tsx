'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringLink, setHoveringLink] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHoveringLink(true);
    const handleMouseLeave = () => setHoveringLink(false);

    window.addEventListener('mousemove', move);
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const circleSize = hoveringLink ? 50 : 25;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.05s linear',
        mixBlendMode: 'difference',
      }}
    >
      <div
        style={{
          width: circleSize,
          height: circleSize,
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />
    </div>
  );
}