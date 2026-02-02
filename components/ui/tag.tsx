import { ReactElement, useEffect, useState } from 'react';

import { useTheme } from '@/context/ThemeContext';
import { tagColorMap } from '@/lib/utils';


interface TagProps {
  lang: string;
  key: string;
}

/**
 * Return an randomly-chosen color based on the current theme and variant.
 * @param theme The theme to choose a color from.
 * @returns A randomly-chosen color based on the current theme and variant.
 */
const _fetchRandomColor = (theme: string): string => {
  const colorChoices = tagColorMap[theme] ?? tagColorMap['default-default'];
  return colorChoices[Math.floor(Math.random() * colorChoices.length)];
};

/**
 * A \<span\> dedicated to a single technology tag.
 * @param lang The language tag.
 * @returns {ReactElement} A \<span\> dedicated to a single technology tag.
 */
export default function Tag({ lang }: TagProps): ReactElement {
  const { theme } = useTheme();
  const [color, setColor] = useState<string>('black');

  // Set the tag color based on the variant
  useEffect(() => {
    setColor(_fetchRandomColor(theme));
  }, [theme]);

  return (
    <span className="bg-[#eee] tag rounded-2xl px-2 py-1 font-semibold font-mono" style={{ color: color }}>
      {lang}
    </span>
  );
}
