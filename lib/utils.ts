import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Dim a given hex color by a given percentage.
 * @param hex The hex color as a string.
 * @param percent The percent to dim the color by.
 * @returns The dimmed color as a hex string.
 */
export function darkenHex(hex: string, percent: number): string {
  let hexNumber = hex.replace('#', '');

  // If the hex number is like 333, double its length so it's a proper 6 character hex number
  // e.g. 333 => 333333 and 1A1 => 1A11A1
  if (hexNumber.length === 3) {
    hexNumber += hexNumber;
  }

  // Parse the hex number into an actual number
  const hexAsNum = parseInt(hexNumber, 16);

  // Convert to RGB
  let r = (hexAsNum >> 16) & 0xff;
  let g = (hexAsNum >> 8) & 0xff;
  let b = hexAsNum & 0xff;

  const _clamp = (color: number): number => {
    return Math.max(0, Math.min(255, Math.round(color * (1 - percent / 100))));
  };

  // Clamp values
  r = _clamp(r);
  g = _clamp(g);
  b = _clamp(b);

  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Capitalizes the first letter of a given string and returns the result as a new string.
 * @param str The string to capitalize.
 * @returns A version of the given string with a capitalized first letter.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
