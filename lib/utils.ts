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

export const tagColorMap: Record<string, string[]> = {
  // Default
  'default-default': [
    '#1C71D8', '#2EC27E', '#F5C211', '#E66100',
    '#C01C28', '#813D9C', '#865E3C'
  ],

  // Catpuccin
  'catpuccin-latte': [
    '#dc8a78', '#dd7878', '#ea76cb', '#8839ef',
    '#d20f39', '#e64553', '#fe640b', '#df8e1d',
    '#40a02b', '#179299', '#04a5e5', '#209fb5',
    '#1e66f5', '#7287fd'
  ],
  'catpuccin-frappe': [
    '#f2d5cf', '#eebebe', '#f4b8e4', '#ca9ee6',
    '#e78284', '#ea999c', '#ef9f76', '#e5c890',
    '#a6d189', '#81c8be', '#99d1db', '#85c1dc',
    '#8caaee', '#babbf1'
  ],
  'catpuccin-macchiato': [
    '#f4dbd6', '#f0c6c6', '#f5bde6', '#c6a0f6',
    '#ed8796', '#ee99a0', '#f5a97f', '#eed49f',
    '#a6da95', '#8bd5ca', '#91d7e3', '#7dc4e4',
    '#8aadf4', '#b7bdf8'
  ],
  'catpuccin-mocha': [
    '#f5e0dc', '#f2cdcd', '#f5c2e7', '#cba6f7',
    '#f38ba8', '#eba0ac', '#fab387', '#f9e2af',
    '#a6e3a1', '#94e2d5', '#89dceb', '#74c7ec',
    '#89b4fa', '#b4befe'
  ],

  // Everforest
  'everforest-light': [
    '#f85552', '#f57d26', '#dfa000', '#8da101',
    '#35a77c', '#3a94c5', '#df69ba', '#93b259',
    '#708089', '#e66868'
  ],
  'everforest-dark': [
    '#e67e80', '#e69875', '#dbbc7f', '#a7c080',
    '#83c092', '#7fbbb3', '#d699b9', '#a7c080',
    '#d3c6aa', '#e67e80'
  ],

  // Nord
  'nord-snow storm': [
    '#8fbcbb', '#88c0d0', '#81a1c1', '#5e81ac',
  ],
  'nord-polar night': [
    '#bf616a', '#d08770', '#ebcb8b', '#a3be8c',
    '#b48ead'
  ],

  // Gruvbox
  'gruvbox-light': [
    '#9d0006', '#79740e', '#b57614', '#076678',
    '#8f3f71', '#427b58', '#af3a03'

  ],
  'gruvbox-dark': [
    '#cc241d', '#b8bb26', '#fabd2f', '#83a598',
    '#d3869b', '#8ec07c', '#fe8019'
  ],

  // Sonokai
  'sonokai-default': [
    '#ff6077', '#a7df78', '#85d3f2', '#b39df3',
    '#e7c664', '#f39660'
  ],
  'sonokai-atlantis': [
    '#ff6d7e', '#a5e179', '#72cce8', '#ba9cf3',
    '#eacb64', '#f69c5e'
  ],
  'sonokai-andromeda': [
    '#ff6188', '#a9dc76', '#77d5f0', '#bb97ee',
    '#edc763', '#f89860'
  ],
  'sonokai-shusia': [
    '#ff6188', '#a9dc76', '#78dce8', '#ab9df2',
    '#e5c463', '#ef9062'
  ],
  'sonokai-maia': [
    '#ff6d7e', '#a2e57b', '#7cd5f1', '#baa0f8',
    '#e3d367', '#f3a96a'
  ],
  'sonokai-espresso': [
    '',
  ],

}
