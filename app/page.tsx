import ProjectCard from "@/components/ui/projectCard";

export default function Home() {
  return (
    <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
      <main className="flex-1 px-0 py-8 md:px-5">
        <div className="mx-auto max-w-6xl space-y-12 px-0 py-8 md:space-y-16 md:px-4 md:py-12">
          {/* About Me */}
          <section className="space-y-5 px-4 md:px-0">
            <h1 className="text-3xl font-bold md:text-4xl">BlackSound1</h1>
            <p className="text-subtext0 max-w-prose text-lg leading-relaxed">
              I am a developer from Montréal who wants to use technology to improve the world. I have been coding in Python for 17 years and have full-stack experience with multiple languages and frameworks.
              Before getting into tech, I worked in the entertainment industry.
              I also made some of my own music.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              <a
                className="text-subtext1 hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 text-sm"
                href="https://github.com/BlackSound1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
              </a>
              <span className="text-surface1 text-xs">|</span>
              <a
                className="text-subtext1 hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 text-sm"
                href="https://www.linkedin.com/in/ordon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </section>

          {/* Work */}
          <section className="px-4 py-8 md:px-0">
            <div className="mb-8">
              <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl">Work Experience</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">

            </div>
          </section>

          {/* Projects */}
          <section className="px-4 py-8 md:px-0">
            <div className="mb-8">
              <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl">Some Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProjectCard 
                name="Textual System Monitor"
                link="https://github.com/BlackSound1/textual-system-monitor"
                imagePath="/static/images/TSMScreenshot.png"
                alt="TSM"
                technologies={["Python", "Textual", "Makefile", "Terminal", "TUI"]}
                description="A beautiful system monitoring app created in Python, using Textual"
                width={1906}
                height={998}
              />
              <ProjectCard 
                name="Go B&B"
                link="https://github.com/BlackSound1/Go-B-and-B"
                imagePath="/static/images/GoBandBHomePage.png"
                alt="Go B&B"
                technologies={["Web", "Go", "REST", "gRPC", "Docker", "RPC", "Kubernetes"]}
                description="A beautiful system monitoring app created in Python, using Textual"
                width={1111}
                height={893}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
