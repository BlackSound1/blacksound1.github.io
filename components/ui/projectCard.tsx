import { ReactElement } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Tag from "./tag";

type ProjectProps = {
    name: string;
    alt: string;
    imagePath: string;
    technologies: string[];
    description: string;
    link: string;
    width: number;
    height: number;
}

export default function ProjectCard({name, alt, imagePath, technologies, description, link, width, height}: ProjectProps): ReactElement {
    return (
        <a
            className="border-surface0 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle className="text-center text-text group-hover:text-accent text-xl font-semibold transition-colors">{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image
                    className="aspect-video w-full transition-transform duration-300 group-hover:scale-105"
                    src={imagePath}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </CardContent>
            <CardFooter>
                <CardDescription className="">
                <div className="">
                    {technologies.map((tech) => {
                        return <Tag key={tech} lang={tech} />
                    })}
                </div>
                <p className="">
                    <span className="">{description}</span>
                </p>
                </CardDescription>
            </CardFooter>
            </Card>
        </a>
    );
}
