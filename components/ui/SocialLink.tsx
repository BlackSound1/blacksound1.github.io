'use client';

import posthog from 'posthog-js';
import { ReactElement } from 'react';

interface SocialLinkProps {
  name: string;
  url: string;
}

type IconProps = { className?: string };

/**
 * A GitHub icon.
 * @param className The HTML classes to provide.
 * @returns A SVG with the GitHub logo.
 */
const GitHubIcon = ({ className }: IconProps): ReactElement => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path className="social-path" d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

/**
 * A LinkedIn icon.
 * @param className The HTML classes to provide.
 * @returns A SVG with the LinkedIn logo.
 */
const LinkedInIcon = ({ className }: IconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    width="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path className="social-path" d="M8 11v5" />
    <path className="social-path" d="M8 8v.01" />
    <path className="social-path" d="M12 16v-5" />
    <path className="social-path" d="M16 16v-3a2 2 0 1 0 -4 0" />
    <path className="social-path" d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
  </svg>
);

/**
 * A map of social icons.
 */
const ICONS: Record<string, (props: IconProps) => ReactElement> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
}

/**
 * A clickable link to one of my social pages.
 * @param name The name of the social site.
 * @param url The URL to my page on the site.
 * @param logo The logo of the site.
 * @returns {ReactElement} A clickable link to one of my social pages.
 */
export default function SocialLink({ url, name }: SocialLinkProps): ReactElement {
  const Icon = ICONS[name];

  return (
    <a
      id={`${name}-link`}
      className='hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 text-sm'
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture('social-link-clicked', { site: name })}
      aria-label={name}
    >
      {Icon ? <Icon className='icon icon-tabler icons-tabler-outline social-icon'/> : null}
      {name}
    </a>
  );
}
