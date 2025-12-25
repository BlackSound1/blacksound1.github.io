import { ReactElement } from "react";

interface TagProps {
    lang: string;
    key: string;
}

const techColorMap: Record<string, string> = {
    Python: "#3572a5",
    Makefile: "#e17732",
    Kubernetes: "#316ce6",
    Docker: "#2560ff",
    Go: "#00add8",
    Java: "#f44b3e",
    Bash: "#89e051",
    CSS: "#663399",
    HTML: "#e34c26",
    JS: "#c3b017",
    TS: "#3178c6",
    Cpp: "#f34b7d",
    Redis: "#ff4438",
    Terminal: "#0fcb0e",
}


/**
 * Given a technology string, returns the corresponding color string from techColorMap.
 * If the technology string is not found in techColorMap, returns "black"
 * @param {string} technology - the technology string to look up in techColorMap
 * @returns {string} the color string corresponding to the technology string, or "black" if not found
 */
const _fetchColor = (technology: string) : string => {
    const color: string | undefined = techColorMap[technology];
    return typeof color === "undefined" ? "black" : color;
}

/**
 * A \<span\> dedicated to a single technology tag.
 * @param lang The language tag 
 * @returns {ReactElement} A \<span\> dedicated to a single technology tag.
 */
export default function Tag({ lang }: TagProps): ReactElement {
    return (
        <span
            className="bg-[#eee] rounded-2xl px-2 py-1 font-semibold font-mono"
            style={{color: _fetchColor(lang)}}
        >
            {lang}
        </span>
    );
}
