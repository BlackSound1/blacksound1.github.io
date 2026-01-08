import { ReactElement } from "react";

import GitHubLogo from "@/public/github.svg";
import LinkedInLogo from "@/public/linkedin.svg";
import SocialLink from "./SocialLink";


/**
 * The About Me section.
 * @returns {ReactElement} The About Me section.
 */
export default function AboutMeSection(): ReactElement {
    return (
        <section id="about-me-section" className="space-y-5 px-4 md:px-0">
            <h1 className="text-3xl font-bold md:text-4xl font-mono hover:text-accent">BlackSound1</h1>
            <p className="max-w-prose text-lg leading-relaxed">
                I am a developer from Montréal who wants to use technology to improve the world. 
                I have been coding in Python for 17 years and have full-stack experience with multiple languages and frameworks.
                Before getting into tech, I worked in the entertainment industry.
                I also made some of my own music.

                <br /><br />
                This site is a <span className="text-accent">work in progress</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-4 pt-2">
                <SocialLink name="GitHub" url="https://github.com/BlackSound1" logo={GitHubLogo} />
                <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/ordon/" logo={LinkedInLogo} />
            </div>
        </section>
    );
};
