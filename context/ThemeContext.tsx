'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  variants: string[];
  setVariants: Dispatch<SetStateAction<string[]>>;
  variant: string;
  setVariant: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const THEME_VARIANTS: Record<string, string[]> = {
  default: ['default'],
  catpuccin: ['latte', 'frappe', 'macchiato', 'mocha'],
};

/**
 * Defines and returns the ThemeContext provider.
 * @param children Any `ReactNode` children.
 * @returns The ThemeContext provider.
 */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('default');
  const [variant, setVariant] = useState<string>('default');
  const [variants, setVariants] = useState<string[]>(THEME_VARIANTS['default']);

  const isRestoringRef = useRef(false);

  // Restore saved state once on mount (client-only)
  useEffect(() => {
    if (typeof window === 'undefined') {
       return; 
    } 

    isRestoringRef.current = true;

    const storedTheme = localStorage.getItem('theme');
    const storedVariant = localStorage.getItem('variant');
    const storedVariants = localStorage.getItem('variants');

    let parsedVariants: string[] | null = null;
    if (storedVariants) {
      try {
        const p = JSON.parse(storedVariants);
        if (Array.isArray(p)) parsedVariants = p;
      } catch {
        ;
      }
    }

    const targetTheme = storedTheme ?? 'default';
    const targetVariants = parsedVariants ?? THEME_VARIANTS[targetTheme] ?? THEME_VARIANTS['default'];

    setTheme(targetTheme);
    setVariants(targetVariants);

    if (storedVariant && targetVariants.includes(storedVariant)) {
      setVariant(storedVariant);
    } else {
      setVariant((prev) => (targetVariants.includes(prev) ? prev : (targetVariants[0] ?? 'default')));
    }

    setTimeout(() => {
      isRestoringRef.current = false;
    }, 0);
  }, []);

  useEffect(() => {
    const v = THEME_VARIANTS[theme] ?? ['default'];
    setVariants(v);

    if (!isRestoringRef.current) {
      setVariant((prev) => (v.includes(prev) ? prev : (v[0] ?? 'default')));
    }

    localStorage.setItem('variants', JSON.stringify(v));
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('variant', variant);
  }, [variant]);

  // Add/ change data attributes on root for theme and variant
  useEffect(() => {
    if (typeof window === 'undefined') {
        return;
    }
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-variant', variant);
  }, [theme, variant]);

  const value = useMemo(
    () => ({ theme, setTheme, variants, setVariants, variant, setVariant }),
    [theme, setTheme, variants, setVariants, variant, setVariant],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/**
 * Activates the theme context.
 * @returns The theme context.
 */
export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }
  return ctx;
}
