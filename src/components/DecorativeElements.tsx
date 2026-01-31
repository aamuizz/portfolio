import { useEffect, useRef } from 'react';

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-accent/20 rotate-12 animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-primary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export const GradientOrbs = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export const SectionDivider = ({ variant = 'default' }: { variant?: 'default' | 'wave' | 'diagonal' }) => {
  if (variant === 'wave') {
    return (
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
            className="opacity-80"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'diagonal') {
    return (
      <div className="relative w-full h-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }} />
      </div>
    );
  }

  return (
    <div className="relative w-full py-12">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse" />
    </div>
  );
};

export const GridPattern = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 opacity-[0.03] dark:opacity-[0.05] ${className}`}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export const DotPattern = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 opacity-[0.02] dark:opacity-[0.04] ${className}`}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};

export const AnimatedGradient = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/5 via-transparent to-transparent" />
    </div>
  );
};

export const CodeLines = () => {
  const lines = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] font-mono text-xs overflow-hidden pointer-events-none">
      {lines.map((line, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          {['const', 'function', 'return', 'import', 'export', 'class', 'interface'][i % 7]}
        </div>
      ))}
    </div>
  );
};

export const GlowEffect = ({ position = 'center' }: { position?: 'center' | 'top' | 'bottom' | 'left' | 'right' }) => {
  const positions = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    top: 'top-0 left-1/2 -translate-x-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2',
    left: 'top-1/2 left-0 -translate-y-1/2',
    right: 'top-1/2 right-0 -translate-y-1/2',
  };

  return (
    <div className={`absolute ${positions[position]} w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none`} />
  );
};
