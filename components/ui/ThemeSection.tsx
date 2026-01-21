'use client';

import { ReactElement } from 'react';

import { Card, CardContent } from './card';
import ThemeDropdown from './ThemeDropdown';
import VariantDropdown from './VariantDropdown';

export default function ThemeSection(): ReactElement {
  return (
    <section id="theme-section" className="px-4">
      <div className="mb-8">
        <h3 className="text-left gap-3 text-xl font-semibold md:text-2xl font-mono hover:text-accent">
          Theme Selector
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors duration-200 shadow-lg hover:shadow-xl">
          <CardContent>
            <div className="grid grid-cols-2">
              <span>
                <div className='font-semibold'>Choose a theme</div>
                <ThemeDropdown />
              </span>
              <span>
                <div className="font-semibold">Choose a variant</div>
                <VariantDropdown />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
