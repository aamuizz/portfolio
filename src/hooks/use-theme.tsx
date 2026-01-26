import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

// Initialize theme immediately to prevent flash
const getInitialTheme = (): Theme => {
  // Check localStorage first
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  
  // Default to dark mode
  return 'dark';
};

// Apply theme to document immediately
const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
  }
};

// Initialize theme on module load
if (typeof document !== 'undefined') {
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
