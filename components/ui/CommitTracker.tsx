'use client';

import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';

import Commit from '@/public/commit.svg';

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
      <Image src={Commit} height={18} alt="Commit" />
      {commit}
    </div>
  );
}
