import { ReactElement } from 'react';

import ColorPickerSection from './ColorPickerSection';
import MusicSection from './MusicSection';
import ThemeSection from './ThemeSection';

/**
 * A section containing the non-professional aspects of the site.
 * @returns {ReactElement} A section containing the non-professional aspects of the site.
 */
export default function FunSection(): ReactElement {
  return (
    <section id="fun-section" className="px-4 md:px-0">
      <div className="mb-8">
        <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent">Fun Stuff</h2>
      </div>

      {/* Color Picker */}
      <ColorPickerSection />

      {/* Themes */}
      <ThemeSection />

      {/* Music */}
      <MusicSection />
    </section>
  );
}
