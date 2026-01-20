'use client';

import posthog from 'posthog-js';
import { ReactElement } from 'react';
import Image from 'next/image';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import Tag from './tag';

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
export default function ProjectCard({
  name,
  alt,
  imagePath,
  technologies,
  description,
  link,
}: ProjectProps): ReactElement {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={name + ': ' + description}
      className="block h-full project-card"
      onClick={() => posthog.capture('project-clicked', { project: name })}
    >
      <Card className="bg-mantle hover:border-accent focus-visible:border-accent group h-full flex flex-col overflow-hidden rounded-xl border shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none">
        <CardHeader>
          <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors duration-200">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          {imagePath && (
            <div className="mx-auto w-full mb-6 h-80 md:h-56 lg:h-44 flex items-center justify-center overflow-hidden transform transition-transform duration-200 group-hover:scale-105">
              <Image
                src={imagePath}
                alt={alt}
                width={800}
                height={450}
                className="max-h-full w-auto object-contain"
                priority
              />
            </div>
          )}
          <CardDescription>
            <div className="flex flex-wrap gap-2 overflow-hidden text-xs">
              {/* Tag SVG */}
              <svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="tag-path" d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {technologies.map((name) => {
                return <Tag key={name} lang={name} />;
              })}
            </div>
            <p className="mt-3 font-semibold">{description}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
}
