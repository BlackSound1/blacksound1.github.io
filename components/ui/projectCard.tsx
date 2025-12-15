import { ReactElement } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "./tag";
import TagLogo from "@/public/tag.svg"


interface ProjectProps {
    name: string;
    alt: string;
    imagePath: string;
    technologies: string[];
    description: string;
    link: string;
    width: number;
    height: number;
}

export default function ProjectCard(
    {
        name,
        alt,
        imagePath,
        technologies,
        description,
        link,
        width,
        height
    }: ProjectProps
): ReactElement {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card className="border-surface0 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none">
                <CardHeader>
                    <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors">{name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                        className="aspect-video w-full transition-transform duration-300 group-hover:scale-105 mb-6"
                        src={imagePath}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                    <CardDescription className="">
                        <div className="flex flex-wrap gap-2 overflow-hidden text-xs">
                            <Image className="" priority src={TagLogo} alt="Tag Logo" height={16} width={16} />
                            {technologies.map((name) => {
                                return <Tag key={name} lang={name} />
                            })}
                        </div>
                        <p className="mt-2">
                            {description}
                        </p>
                    </CardDescription>
                </CardContent>
            </Card>
        </a>
    );
}
