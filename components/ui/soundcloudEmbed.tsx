import { ReactElement } from 'react';

interface SoundcloudProps {
  embedURL: string;
}

/**
 * An \<iframe\> dedicated to a Soundcloud playlist of some of my music.
 * @param embedURL The URL to the Soundcloud embedding
 * @returns {ReactElement} An \<iframe\> dedicated to a Soundcloud playlist of some of my music.
 */
export default function SoundcloudEmbed({ embedURL }: SoundcloudProps): ReactElement {
    return (
        <iframe
            id="soundcloud-iframe"
            width="100%"
            height="370"
            allow="autoplay"
            src={embedURL}>
        </iframe>
    );
}
