import { ReactElement } from "react";
import ProjectCard from "./projectCard";


/**
 * A section component that displays a list of projects.
 * @returns {ReactElement} A section element containing a list of projects I've done.
 */
export default function ProjectSection(): ReactElement {
    return (
        <section id="projects-section" className="px-4 md:px-0">
            <div className="mb-8">
                <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent">Some Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:auto-rows-[minmax(0,520px)] lg:auto-rows-[minmax(0,420px)] xl:auto-rows-[minmax(0,380px)]">
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
    );
};
