'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

type ColorCheckboxType = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};

// Create the ColorCheckboxContext
const ColorCheckboxContext = createContext<ColorCheckboxType | undefined>(undefined);

/**
 * Defines and returns the ColorCheckboxContext provider.
 * @param children Any `ReactNode` children.
 * @returns The ColorCheckboxContext provider.
 */
export const ColorCheckboxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const value = useMemo(() => ({ checked, setChecked }), [checked, setChecked]);

  return <ColorCheckboxContext.Provider value={value}>{children}</ColorCheckboxContext.Provider>;
};

/**
 * Activates the color checkbox context.
 * @returns The color checkbox context.
 */
export function useColorCheckbox(): ColorCheckboxType {
  const ctx = useContext(ColorCheckboxContext);
  if (!ctx) {
    throw new Error('useColorCheckbox must be used within an ColorCheckboxProvider');
  }
  return ctx;
}
