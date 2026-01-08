'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';

import { darkenHex } from '@/lib/utils';

type AccentContextType = {
  accent: string;
  setAccent: Dispatch<SetStateAction<string>>;
};

// Create the AccentContext
const AccentContext = createContext<AccentContextType | undefined>(undefined);

/**
 * Defines and returns the AccentContext provider.
 * @param children Any `ReactNode` children.
 * @returns The AccentContext provider.
 */
export const AccentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accent, setAccent] = useState<string>('#eb575a');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accentColor = localStorage.getItem('accent');
      if (accentColor) {
        setAccent(accentColor);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--scrollbar-thumb', accent);
    document.documentElement.style.setProperty('--scrollbar-thumb-hover', darkenHex(accent, 20));
    document.documentElement.style.setProperty('--sc-color', accent);
    localStorage.setItem('accent', accent);
  }, [accent]);

  const value = useMemo(() => ({ accent, setAccent }), [accent, setAccent]);

  return <AccentContext.Provider value={value}>{children}</AccentContext.Provider>;
};

/**
 * Activates the accent context.
 * @returns The accent context.
 */
export function useAccent(): AccentContextType {
  const ctx = useContext(AccentContext);
  if (!ctx) {
    throw new Error('useAccent must be used within an AccentProvider');
  }
  return ctx;
}
