'use client';

import { ReactElement, useEffect, useState } from "react";

/**
 * Query Abacus to count how many times the site has been visited and display the value.
 * @returns The View Counter.
 */
export default function ViewCounter(): ReactElement {
    const [count, setCount] = useState("Fetching...");

    /**
     * Query Abacus to get the page view count.
     */
    const trackHit = async () => {
        await fetch("https://abacus.jasoncameron.dev/hit/blacksound1-portfolio.vercel.app/visits")
              .then((resp) => {
                  return resp.json();
              }).then((data) => {
                  setCount(data.value);
              });
    }

    useEffect(() => {
        trackHit();
    }, []);

    return (
        <div><span className="hover:text-accent transition-colors">{count}</span> <span>views</span></div>
    );
};
