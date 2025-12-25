import { ReactElement } from "react";
import { Card, CardContent } from "./card";
import SoundcloudEmbed from "./soundcloudEmbed";


/**
 * A section element containing a card with a Soundcloud playlist player with some of my music.
 * @returns {ReactElement} A section element containing a card with a Soundcloud playlist player with some of my music.
 */
export default function MusicSection(): ReactElement {
    return (
        <section className="px-4">
            <div className="mb-8">
                <h3 className="text-left gap-3 text-xl font-semibold md:text-2xl font-mono hover:text-accent">Some of My Music</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors">
                    <CardContent>
                        <SoundcloudEmbed embedURL="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A112988860&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true" />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
