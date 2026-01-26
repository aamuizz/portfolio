import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = 150;
    
    // Clear existing stars
    container.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 3;
      
      star.className = 'absolute rounded-full bg-white animate-twinkle';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;
      star.style.opacity = `${Math.random() * 0.5 + 0.3}`;
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default StarryBackground;
