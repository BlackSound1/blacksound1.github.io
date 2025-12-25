'use client';

import { ReactElement, useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";


/**
 * A color picker section for styling the site.
 * @returns {ReactElement} A color picker section for styling the site.
 */
export default function ColorPickerSection(): ReactElement {
    const [accent, setAccent] = useState<string>("#eb575a");

    useEffect(() => {
    // Overwrite the --accent color throughout app
    if (typeof document !== "undefined") {
        document.documentElement.style.setProperty("--accent", accent);
    }
    }, [accent]);

    return (
        <section className="px-4">
            <div className="mb-8">
                <h3 className="text-left gap-3 text-xl font-semibold md:text-2xl font-mono hover:text-accent">Color Picker</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors">
                    <CardHeader>
                        <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors">Use this color picker to change the accent color of the site</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <input 
                            className="h-full w-full rounded-md border border-surface1 p-0"
                            type="color"
                            aria-label="Choose highlight color"
                            value={accent}
                            onChange={e => setAccent(e.target.value)}
                        />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
