import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ui/projectCard";
import SoundcloudEmbed from "@/components/ui/soundcloudEmbed";
import WorkCard from "@/components/ui/workCard";

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
            <div className="flex flex-wrap items-center gap-x-4 pt-2">
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
          <section className="px-4 md:px-0">
            <div className="mb-8">
              <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl">Work Experience</h2>
            </div>
            <div className="grid grid-cols-1">
              <WorkCard
                company="Verbit"
                url="https://verbit.ai/"
                title="Software Engineer"
                time="Feb. 2025 - Sep. 2025"
                description={<>
                  Helped build the next generation of Verbit's realtime captioning solution.
                  <br/><strong>Achievements</strong>: Revamped and expanded our APIs unit tests, writing 117 new tests; developed 
                  an AI tool for our support team; improved our long-awaited end-to-end test suite, scoring 100% on our KPIs; helped
                  management budget server costs; updated the way we compute realtime metrics for Prometheus and Grafana; standardized logging to match
                  company-wide use of AWS CloudWatch; deeply hardened an important process to withstand over 3000 SIGHUP signals
                  per second from multiple processes: a &gt;1000x improvement.
                </>}
              />
              <WorkCard
                company="Tecsys"
                url="https://www.tecsys.com/"
                title="R&D Intern: Full-Stack Pythonista"
                time="Sep. 2021 - Apr. 2023"
                description={<>
                  <em>Six consecutive fulltime internships</em>. Developed two major projects:<br />
                  an AI tool for optimizing the efficiency of a client's warehouse workers, and an internal CLI tool and accompanying data pipeline to improve
                  the process for onboarding new clients into our software ecosystem. 
                  <br/><strong>Responsibilities</strong>: front-end and back-end coding, sprint planning, code review, bug fixing, and quality assurance.
                  <br/><strong>Achievements</strong>: Designed the backbone of our CLI apps, ensured reproducible builds, containerized an application, 
                  and wrote extensive documentation.
                </>}
              />

            </div>
          </section>

          {/* Projects */}
          <section className="px-4 md:px-0">
            <div className="mb-8">
              <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl">Some Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProjectCard 
                name="Textual System Monitor"
                link="https://github.com/BlackSound1/textual-system-monitor"
                imagePath="/static/images/TSMScreenshot.png"
                alt="TSM"
                technologies={
                  [
                    {name:"Python", color: "blue"},
                    {name: "Textual", color: "red"},
                    {name: "Makefile", color: "orange"},
                    {name: "Terminal", color: "purple"},
                    {name: "TUI", color: "pink"},
                  ]
                }
                description="A beautiful system monitoring app created in Python, using Textual"
                width={1906}
                height={998}
              />
              <ProjectCard 
                name="Go B&B"
                link="https://github.com/BlackSound1/Go-B-and-B"
                imagePath="/static/images/GoBandBHomePage.png"
                alt="Go B&B"
                technologies={
                  [
                    {name: "Web", color: "red"},
                    {name: "Go", color: "teal"},
                    {name: "REST", color: "black"},
                    {name: "Docker", color: "blue"},
                    {name: "Kubernetes", color: "green"},
                  ]
                }
                description="A beautiful system monitoring app created in Python, using Textual"
                width={1111}
                height={893}
              />
            </div>
          </section>

          {/* Music */}
          <section className="px-4 md:px-0">
            <div className="mb-8">
              <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl">Some of My Music</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="border-surface0 bg-mantle hover:border-accent focus-visible:border-accent transition-colors">
                <CardContent>
                  <SoundcloudEmbed embedURL="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A112988860&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true" />
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
