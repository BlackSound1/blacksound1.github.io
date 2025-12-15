import { ReactElement } from "react";

interface TagProps {
    lang: string;
    key: string;
}

const techColorMap: Record<string, string> = {
    Python: "#3572a5",
    Makefile: "#427819",
    Kubernetes: "#316ce6",
    Docker: "#2560ff",
    Go: "#00add8",
    Java: "#f44b3e",
    Bash: "#89e051",
    CSS: "#663399",
    HTML: "#e34c26",
    JS: "#f1e05a",
    TS: "#3178c6",
    Cpp: "#f34b7d",
}


const _fetchColor = (technology: string) : string => {
    const color : string | undefined = techColorMap[technology];
    if (typeof color === "undefined") {
        return "black";
    }
    return color;
}

export default function Tag({lang, key}: TagProps): ReactElement {
    return (
        <span
            className="tag bg-surface0 rounded px-2 py-1 font-semibold"
            style={{color: _fetchColor(lang)}}
        >
            {lang}
        </span>
    );
}
