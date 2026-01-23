import { useTheme } from '@/context/ThemeContext';
import { ReactElement, useEffect, useState } from 'react';

interface TagProps {
  lang: string;
  key: string;
}

const tagColorMap: Record<string, string[]> = {
  'default': ['#1C71D8', '#2EC27E', '#F5C211', '#E66100', '#C01C28', '#813D9C', '#865E3C'],
  'latte': ['#dc8a78', '#dd7878', '#ea76cb', '#8839ef', '#d20f39', '#e64553', '#fe640b', '#df8e1d', '#40a02b', '#179299', '#04a5e5', '#209fb5', '#1e66f5', '#7287fd'],
  'frappe': ['#f2d5cf', '#eebebe', '#f4b8e4', '#ca9ee6', '#e78284', '#ea999c', '#ef9f76', '#e5c890', '#a6d189', '#81c8be', '#99d1db', '#85c1dc', '#8caaee', '#babbf1'],
  'macchiato': ['#f4dbd6', '#f0c6c6', '#f5bde6', '#c6a0f6', '#ed8796', '#ee99a0', '#f5a97f', '#eed49f', '#a6da95', '#8bd5ca', '#91d7e3', '#7dc4e4', '#8aadf4', '#b7bdf8'],
  'mocha': ['#f5e0dc', '#f2cdcd', '#f5c2e7', '#cba6f7', '#f38ba8', '#eba0ac', '#fab387', '#f9e2af', '#a6e3a1', '#94e2d5', '#89dceb', '#74c7ec', '#89b4fa', '#b4befe'],
}

/**
 * Return an randomly-chosen color based on the current variant.
 * @param v The theme variant to choose a color from.
 * @returns A randomly-chosen color based on the current variant.
 */
const _fetchColor = (v: string): string => {
  const colorChoices = tagColorMap[v] ?? tagColorMap['default'];
  return colorChoices[Math.floor(Math.random() * colorChoices.length)];
}

/**
 * A \<span\> dedicated to a single technology tag.
 * @param lang The language tag.
 * @returns {ReactElement} A \<span\> dedicated to a single technology tag.
 */
export default function Tag({ lang }: TagProps): ReactElement {
  const { variant } = useTheme();
  const [color, setColor] = useState<string>('black');

  useEffect(() => {
    setColor(_fetchColor(variant));
  }, [variant]);

    return (
        <span
          className="bg-[#eee] tag rounded-2xl px-2 py-1 font-semibold font-mono"
          style={{color: color}}
        >
          {lang}
        </span>
    );
}
