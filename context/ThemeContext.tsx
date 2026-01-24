'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

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
    const [theme, setTheme] = useState<string>("default-default");

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
    }, [theme]);

    // Only recompute when deps change
    const value = useMemo(
        () => ({ theme, setTheme }),
        [theme, setTheme]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

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
