'use client';

import { ReactElement } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "./tag";
import TagLogo from "@/public/tag.svg"
import posthog from "posthog-js";


interface ProjectProps {
    name: string;
    alt: string;
    imagePath?: string;
    technologies: string[];
    description: string;
    link: string;
}

/**
 * A section dedicated to my projects.
 * @param name The name of the project.
 * @param alt The text to show in the alt of the image.
 * @param imagePath The path to the image for the project.
 * @param technologies A list of technologies used in the making of the project.
 * @param description The description of the project.
 * @param link The link to the GitHub page for the project.
 * @returns {ReactElement} A section dedicated to my projects.
 */
export default function ProjectCard(
    { name, alt, imagePath, technologies, description, link }: ProjectProps
): ReactElement {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={name + ": " + description}
            className="block h-full"
            onClick={() => posthog.capture('project-clicked', { project: name })}
        >
            <Card className="bg-mantle hover:border-accent focus-visible:border-accent group h-full flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none">
                <CardHeader>
                    <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors">{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    {imagePath &&
                        <div className="mx-auto w-full mb-6 h-80 md:h-56 lg:h-44 flex items-center justify-center overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src={imagePath}
                                alt={alt}
                                width={800}
                                height={450}
                                className="max-h-full w-auto object-contain"
                                priority
                            />
                        </div>
                    }
                    <CardDescription className="">
                        <div className="flex flex-wrap gap-2 overflow-hidden text-xs">
                            <Image priority src={TagLogo} alt="Tag Logo" height={16} />
                            {technologies.map((name) => {
                                return <Tag key={name} lang={name} />
                            })}
                        </div>
                        <p className="mt-3 font-semibold">
                            {description}
                        </p>
                    </CardDescription>
                </CardContent>
            </Card>
        </a>
    );
}
