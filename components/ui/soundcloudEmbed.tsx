import { ReactElement } from "react";

interface SoundcloudProps {
    embedURL: string;
}

export default function SoundcloudEmbed({embedURL}: SoundcloudProps): ReactElement {
    return (
        <iframe
            width="100%"
            height="370"
            allow="autoplay"
            src={embedURL}>
        </iframe>
    );
}
