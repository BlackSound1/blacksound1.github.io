'use client';

import { ChangeEvent, ReactElement } from 'react';

import { THEME_VARIANTS, useTheme } from '@/context/ThemeContext';
import { Card, CardContent } from './card';
import { capitalize } from '@/lib/utils';

export default function ThemeSection(): ReactElement {
  const { theme, setTheme, variant, setVariant, variants } = useTheme();

  const themes = Array.from(Object.keys(THEME_VARIANTS));

  return (
    <section id="theme-section" className="px-4">
      <div className="mb-8">
        <h3 className="text-left gap-3 text-xl font-semibold md:text-2xl font-mono hover:text-accent">
          Theme Selector
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors shadow-lg hover:shadow-xl">
          <CardContent>
            <div className="grid grid-cols-2">
              <span>
                <div className='font-semibold'>Choose a theme</div>

                <select
                  name="theme"
                  id="theme"
                  value={theme}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)}
                >
                  {themes.map((t) => (
                    <option key={t} value={t}>{capitalize(t)}</option>
                  ))}
                </select>
              </span>
              <span>
                <div className="font-semibold">Choose a variant</div>
                <select
                  name="variant"
                  id="variant"
                  value={variant}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setVariant(e.target.value)}
                >
                  {variants.map((v) => (
                    <option id={v} key={v} value={v}>{capitalize(v)}</option>
                  ))}
                </select>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
