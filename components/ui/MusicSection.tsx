'use client';

import { ReactElement, useEffect, useState } from "react";
import { Card, CardContent } from "./card";
import SoundcloudEmbed from "./soundcloudEmbed";


/**
 * A section element containing a card with a Soundcloud playlist player with some of my music.
 * @returns {ReactElement} A section element containing a card with a Soundcloud playlist player with some of my music.
 */
export default function MusicSection(): ReactElement {
    const [scColor, setScColor] = useState<string>("eb575a");

    const readScColor = () => {
        const raw = typeof document !== "undefined"
            ? getComputedStyle(document.documentElement).getPropertyValue('--sc-color') || ''
            : '';
        const cleaned = raw.trim().replace(/^#/, '') || 'eb575a';
        setScColor(cleaned);
    };

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }

        // Initial read
        readScColor();

        // Watch for inline style changes (ColorPickerSection sets document.documentElement.style)
        const observer = new MutationObserver(() => readScColor());
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

        return () => observer.disconnect();
    }, []);

    const embedURL = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A112988860&color=%23${scColor}&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`;

    return (
        <section className="px-4">
            <div className="mb-8">
                <h3 className="text-left gap-3 text-xl font-semibold md:text-2xl font-mono hover:text-accent">Some of My Music</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors">
                    <CardContent>
                        <SoundcloudEmbed 
                            embedURL={embedURL}
                        />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
