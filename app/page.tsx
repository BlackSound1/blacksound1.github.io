import posthog from "posthog-js";

import Break from "@/components/ui/break";
import AboutMeSection from "@/components/ui/AboutMeSection";
import WorkSection from "@/components/ui/WorkSection";
import ProjectSection from "@/components/ui/ProjectsSection";
import FunSection from "@/components/ui/FunSection";


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
