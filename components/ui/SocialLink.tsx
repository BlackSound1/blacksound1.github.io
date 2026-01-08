'use client';

import Image from 'next/image';
import posthog from 'posthog-js';
import { ReactElement } from 'react';

interface SocialLinkProps {
  name: string;
  url: string;
  logo: string;
}

/**
 * A clickable link to one of my social pages.
 * @param name The name of the social site.
 * @param url The URL to my page on the site.
 * @param logo The logo of the site.
 * @returns {ReactElement} A clickable link to one of my social pages.
 */
export default function SocialLink({ url, name, logo }: SocialLinkProps): ReactElement {
  return (
    <a
      id={`${name}-link`}
      className="hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 text-sm"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture('social-link-clicked', { site: name })}
    >
      <Image priority src={logo} alt={`${name} logo`} height={18} />
      {name}
    </a>
  );
}
