import { ReactElement } from "react";
import WorkCard from "./workCard";


/**
 * A section component that displays a list of work experience items.
 * @returns {ReactElement} A section element containing a list of work experience items.
 */
export default function WorkSection(): ReactElement {
    return (
        <section className="px-4 md:px-0">
            <div className="mb-8">
                <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent">Work Experience</h2>
            </div>
            <div className="grid grid-cols-1">
                <WorkCard
                    company="Verbit"
                    url="https://verbit.ai/"
                    title="Software Engineer"
                    time="Feb. 2025 - Sep. 2025"
                    description={<>
                        Helped build the next generation of Verbit&apos;s realtime captioning solution.
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
    );
};
