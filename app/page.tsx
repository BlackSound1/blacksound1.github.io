import posthog from 'posthog-js';

import AboutMeSection from '@/components/ui/AboutMeSection';
import Break from '@/components/ui/break';
import FunSection from '@/components/ui/FunSection';
import ProjectSection from '@/components/ui/ProjectsSection';
import WorkSection from '@/components/ui/WorkSection';

export default function Home() {
  posthog.capture('$pageview', { page: 'homepage' });

  return (
    <div>
      <AboutMeSection />

      <Break />

      <WorkSection />

      <Break />

      <ProjectSection />

      <Break />

      <FunSection />
    </div>
  );
}
