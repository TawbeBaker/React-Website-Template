'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  toggleTheme: () => null,
  mounted: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'baker-tech-theme',
  ...props
}: ThemeProviderProps) {
  // Start with dark theme always
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Load saved theme from localStorage only after mount
  useEffect(() => {
    setMounted(true);
    
    // Check localStorage for saved preference
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    
    if (storedTheme === 'light') {
      // Only set to light if explicitly saved as light
      setTheme('light');
    } else {
      // Default to dark mode
      setTheme('dark');
      localStorage.setItem(storageKey, 'dark');
    }
  }, [storageKey]);

  // Apply theme class to document when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes
    root.classList.remove('light', 'dark');
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }
    
    // Save to localStorage
    if (mounted) {
      localStorage.setItem(storageKey, theme);
    }
    
    console.log('🎨 Theme applied:', theme, '| Classes:', root.className);
  }, [theme, storageKey, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('🔄 Toggling theme:', prev, '→', newTheme);
      return newTheme;
    });
  };

  const value = {
    theme,
    toggleTheme,
    mounted,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
