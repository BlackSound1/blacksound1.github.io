'use client';

import { ReactElement, useEffect, useState } from 'react';

/**
 * Queries GitHub for the latest commit to the `main` branch and displays the result.
 * @returns The latest commit to `main`.
 */
export default function CommitTracker(): ReactElement {
  const [commit, setCommit] = useState('Fetching...');

  /**
   * Query GitHub for the most recent `main` commit
   */
  const trackCommit = async () => {
    const headers = new Headers();
    headers.set('Accept', 'application/vnd.github+json');
    headers.set('X-GitHub-Api-Version', '2022-11-28');
    headers.set('Authorization', process.env.GH_KEY!);

    const options = {
      method: 'GET',
      headers: headers,
    };

    const URL = 'https://api.github.com/repos/BlackSound1/BlackSound1-portfolio/commits?sha=main';

    await fetch(URL, options)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCommit(data[0]['sha'].slice(0, 7));
      });
  };

  useEffect(() => {
    trackCommit();
  }, []);

  return (
    <div id="commit-tracker" className="flex flex-wrap items-center justify-center hover:text-accent transition-colors">
      {/* Commit SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-git-commit"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M12 3l0 6" />
        <path d="M12 15l0 6" />
      </svg>
      {commit}
    </div>
  );
}
