import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ui/projectCard";
import SoundcloudEmbed from "@/components/ui/soundcloudEmbed";
import WorkCard from "@/components/ui/workCard";
import GitHubLogo from "@/public/github.svg";
import LinkedInLogo from "@/public/linkedin.svg";

export default function Home() {
  return (
    <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
      <main className="flex-1 px-0 py-8 md:px-5">
        <div className="mx-auto max-w-6xl space-y-12 px-0 py-8 md:space-y-16 md:px-4 md:py-12">
          {/* About Me */}
          <section className="space-y-5 px-4 md:px-0">
            <h1 className="text-3xl font-bold md:text-4xl font-mono hover:text-accent">BlackSound1</h1>
            <p className="text-subtext0 max-w-prose text-lg leading-relaxed">
              I am a developer from Montréal who wants to use technology to improve the world. I have been coding in Python for 17 years and have full-stack experience with multiple languages and frameworks.
              Before getting into tech, I worked in the entertainment industry.
              I also made some of my own music.

              <br /><br />
              This site is a <span className="text-accent">work in progress</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-4 pt-2">
              <a
                className="text-subtext1 hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 text-sm"
                href="https://github.com/BlackSound1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="" priority src={GitHubLogo} alt="GitHub Logo" height={16} />GitHub
              </a>
              <a
                className="text-subtext1 hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 text-sm"
                href="https://www.linkedin.com/in/ordon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image priority src={LinkedInLogo} alt="LinkedIn Logo" height={16} />LinkedIn
              </a>
            </div>
          </section>

          {/* Work */}
          <section className="px-4 md:px-0">
            <div className="mb-8">
              <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono">Work Experience</h2>
            </div>
            <div className="grid grid-cols-1">
              <WorkCard
                company="Verbit"
                url="https://verbit.ai/"
                title="Software Engineer"
                time="Feb. 2025 - Sep. 2025"
                description={<>
                  Helped build the next generation of Verbit's realtime captioning solution.
                </>}
              />
              <WorkCard
                company="Tecsys"
                url="https://www.tecsys.com/"
                title="R&D Intern: Full-Stack Pythonista"
                time="Sep. 2021 - Apr. 2023"
                description={<>
                  Six consecutive fulltime internships. Developed two large internal projects with a small R&D team.
                </>}
              />
            </div>
          </section>

          {/* Projects */}
          <section className="px-4 md:px-0">
            <div className="mb-8">
              <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono">Some Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-flow-row-dense auto-rows-fr">
              <ProjectCard 
                name="Textual System Monitor"
                link="https://github.com/BlackSound1/textual-system-monitor"
                imagePath="/static/images/TSMScreenshot.png"
                alt="TSM"
                technologies={["Python", "Textual", "Makefile", "Terminal", "TUI"]}
                description="A beautiful system monitoring app created in Python, using Textual."
              />
              <ProjectCard 
                name="Go B&B"
                link="https://github.com/BlackSound1/Go-B-and-B"
                imagePath="/static/images/GoBandBHomePage.png"
                alt="Go B&B"
                technologies={["Web", "Go", "Docker", "REST", "Kubernetes", "JS"]}
                description="A web app for a fictional Bed and Breakfast, written in Go."
              />
              <ProjectCard 
                name="This site"
                link="https://github.com/BlackSound1/BlackSound1-portfolio"
                imagePath="/static/images/PortfolioScreenshot.png"
                alt="This site"
                technologies={["TS", "NextJS", "HTML", "CSS", "Web"]}
                description="A simple, WIP portfolio site. You're on it now!"
              />
              <ProjectCard 
                name="Redis Clone"
                link="https://github.com/BlackSound1/redis-clone"
                imagePath="/static/images/RedisCloneScreenshot.png"
                alt="Redis Clone"
                technologies={["Go", "Redis", "Terminal"]}
                description="A minimal clone of a Redis server, written in Go."
              />
              <ProjectCard 
                name="Basic C++ Shell"
                link="https://github.com/BlackSound1/Basic-CPP-Shell"
                imagePath="/static/images/ShellScreenshot.png"
                alt="Basic C++ Shell"
                technologies={["Shell", "Terminal", "Cpp"]}
                description="A minimum viable product for a terminal shell, written in C++."
              />
              <ProjectCard 
                name="Go Microservices"
                link="https://github.com/BlackSound1/go-microservices"
                imagePath="/static/images/GoMicroservicesScreenshot.png"
                alt="Go Microservices"
                technologies={["Go", "Docker", "Kubernetes", "Makefile", "Microservices"]}
                description="A project I made to teach myself Go and the microservices architecture."
              />
            </div>
          </section>

          {/* Music */}
          <section className="px-4 md:px-0">
            <div className="mb-8">
              <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono">Some of My Music</h2>
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
