import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/use-theme';

const StarryBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = theme === 'light' ? 100 : 150; // Fewer stars in light mode
    
    // Clear existing stars
    container.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 3;
      
      // Use theme-aware colors
      const starColor = theme === 'light' 
        ? 'hsl(222 47% 30%)' // Darker stars for light mode
        : 'hsl(0 0% 100%)'; // White stars for dark mode
      
      star.className = 'absolute rounded-full animate-twinkle';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.backgroundColor = starColor;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;
      star.style.opacity = theme === 'light' 
        ? `${Math.random() * 0.3 + 0.1}` // More subtle in light mode
        : `${Math.random() * 0.5 + 0.3}`;
      
      container.appendChild(star);
    }
  }, [theme]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default StarryBackground;
