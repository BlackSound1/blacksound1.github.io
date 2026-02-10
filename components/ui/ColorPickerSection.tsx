'use client';

import { ReactElement } from 'react';
import posthog from 'posthog-js';

import { useAccent } from '@/context/AccentContext';
import { useColorCheckbox } from '@/context/ColorCheckboxContext';

import { Card, CardContent, CardHeader, CardTitle } from './card';

/**
 * A color picker section for styling the site.
 * @returns {ReactElement} A color picker section for styling the site.
 */
export default function ColorPickerSection(): ReactElement {
  const { accent, setAccent } = useAccent();
  const { checked, setChecked } = useColorCheckbox();

  return (
    <section id="color-picker-section" className="px-4 md:col-span-2">
      <div className="mb-8">
        <h3 className="text-left gap-3 text-xl font-semibold md:text-2xl font-mono hover:text-accent">Accent Color Picker</h3>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:auto-rows-[minmax(0,206px)]">
        <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors duration-200 shadow-lg hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors duration-200">
              Change the accent color of the site
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-rows-2">
              <span>
                <input
                  className="color-checkbox mr-2 mb-4 mt-[-4]"
                  type="checkbox"
                  name="sc-color-enable"
                  onClick={() => setChecked(!checked)}
                />
                <label className="font-semibold text-muted-foreground" htmlFor="sc-color-enable">
                  Don&apos;t reload Soundcloud on color change
                </label>
              </span>
              <input
                className="h-full w-full rounded-md p-0"
                type="color"
                aria-label="Choose highlight color"
                value={accent}
                onChange={(e) => {
                  const newColor = e.target.value;
                  setAccent(newColor);
                  posthog.capture('color-changed', { newColor: newColor });
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
