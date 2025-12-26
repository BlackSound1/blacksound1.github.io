import posthog from "posthog-js";

import Break from "@/components/ui/break";
import AboutMeSection from "@/components/ui/AboutMeSection";
import WorkSection from "@/components/ui/WorkSection";
import ProjectSection from "@/components/ui/ProjectsSection";
import FunSection from "@/components/ui/FunSection";


export default function Home() {
  posthog.capture('$pageview', { page: 'homepage' });

  return (
    <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
      <main className="flex-1 px-0 py-8 md:px-5">
        <div className="mx-auto max-w-6xl space-y-12 px-0 py-8 md:space-y-16 md:px-4 md:py-12">
          <AboutMeSection />

          <Break />

          <WorkSection />

          <Break />

          <ProjectSection />

          <Break />

          <FunSection />
        </div>
      </main>
    </div>
  );
}
