'use client';

import { ReactElement, useEffect, useState } from "react";

import { Card, CardContent } from "./card";
import SoundcloudEmbed from "./soundcloudEmbed";
import { useAccent } from "@/context/AccentContext";
import { useColorCheckbox } from "@/context/ColorCheckboxContext";


/**
 * A section element containing a card with a Soundcloud playlist player with some of my music.
 * @returns {ReactElement} A section element containing a card with a Soundcloud playlist player with some of my music.
 */
export default function MusicSection(): ReactElement {
    const { checked } = useColorCheckbox();
    const { accent } = useAccent();

    const DEFAULT_COLOR = "#eb575a";

    const makeEmbedURL = (hex: string) => {
        return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A112988860&color=%23${hex.replace(/^#/, '')}&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`;
    }

    const [embedURL, setEmbedURL] = useState<string>(() => {
            return checked ? makeEmbedURL(DEFAULT_COLOR) : makeEmbedURL(accent || DEFAULT_COLOR);
        }
    );

    // Update embed URL only when reloads are allowed
    useEffect(() => {
        // When reloads are allowed, update the embed with current accent
        if (!checked) {
            setEmbedURL(makeEmbedURL(accent || DEFAULT_COLOR));
        }
    }, [checked, accent]);

    return (
        <section className="px-4">
            <div className="mb-8">
                <h3 className="text-left gap-3 text-xl font-semibold md:text-2xl font-mono hover:text-accent">Some of My Music</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors shadow-xl">
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
