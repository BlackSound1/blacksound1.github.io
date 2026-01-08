import { ReactElement } from "react";


/**
 * A styled page break element.
 * @returns {ReactElement}: A styled page break element
 */
export default function Break(): ReactElement {
    return (
        <hr className="w-48 mx-auto bg-neutral-100 rounded-sm my-10" />
    );
};
