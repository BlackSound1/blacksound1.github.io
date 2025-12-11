import { ReactElement } from "react";

type TagProps = {
    lang: string;
    key: string;
}

export default function Tag({lang, key}: TagProps): ReactElement {
    return <span 
                className="tag bg-surface rounded px-2 py-1 font-semibold"
                style={{color: "blue"}}
            >{lang}</span>;
}
