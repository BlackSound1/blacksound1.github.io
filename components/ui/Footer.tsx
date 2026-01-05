import { ReactElement } from "react";

import CommitTracker from "./CommitTracker";
import StatusIndicator from "./status-indicator";
import ViewCounter from "./ViewCounter";

/**
 * Define and display a global footer.
 * @returns The Footer.
 */
export default function Footer(): ReactElement {
    return (
        <div className="relative m-auto mx-10 mb-10">
            <footer className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors text-muted-foreground font-semibold border-surface0/20 flex h-auto flex-col items-center justify-center gap-y-3 rounded-xl shadow-lg border p-5 text-sm md:flex-row md:justify-between md:gap-y-0">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start">
                <span className="whitespace-nowrap">&copy;2026 BlackSound1</span>
                <span className="text-surface0 hidden md:inline">-</span>
                <div>
                    <StatusIndicator state="active" label="All Systems Go!" labelClassName="text-muted-foreground" />
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-end">
                <ViewCounter />
                <span className="text-surface0 hidden md:inline">-</span>
                <CommitTracker />
            </div>
            </footer>
        </div>
    );
};
