'use client';

import posthog from 'posthog-js';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const THEME_VARIANTS: Record<string, string[]> = {
  default: ['default'],
  catpuccin: ['latte', 'frappe', 'macchiato', 'mocha'],
  everforest: ['light', 'dark'],
  nord: ['snow storm', 'polar night'],
};

/**
 * Defines and returns the ThemeContext provider.
 * @param children Any `ReactNode` children.
 * @returns The ThemeContext provider.
 */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('default-default');
  const userInitiatedRef = useRef<boolean>(false);

  // When using setTheme throughout the app, actually use this instead
  // to let the context know it's a user-defined action
  const setThemeUser: Dispatch<SetStateAction<string>> = useCallback(
    (value) => {
      userInitiatedRef.current = true;
      setTheme(value as any);
    },
    [setTheme],
  );

  // Restore saved state once on mount (client-only)
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedTheme = localStorage.getItem('theme');
    const targetTheme = storedTheme ?? 'default-default';

    setTheme(targetTheme);
  }, []);

  // Update local storage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Add/ update data attr on root for theme
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    // Only capture if change was explicitly user-initiated
    if (!userInitiatedRef.current) {
      return;
    }

    posthog.capture('theme-changed', { newTheme: theme });

    // Reset flag after capturing
    userInitiatedRef.current = false;
  }, [theme]);

    // Only recompute when deps change
    const value = useMemo(
        () => ({ theme, setTheme: setThemeUser }),
        [theme, setThemeUser]
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
