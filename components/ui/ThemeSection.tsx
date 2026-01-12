'use client';

import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Card, CardContent } from "./card";

const THEME_VARIANTS: Record<string, string[]> = {
    default: ['default'],
    catpuccin: ["latte", "mocha", "frappe", "macchiato"],
}

export default function ThemeSection(): ReactElement {

    const [theme, setTheme] = useState("default");
    const [variants, setVariants] = useState(['default']);
    const [variant, setVariant] = useState('default');

    useEffect(() => {
        let v = THEME_VARIANTS[theme];
        if (typeof v === 'undefined') {
            v = ['default'];
        }

        setVariants(v);

        const chosenVariant = v[0] ?? 'default';

        setVariant(chosenVariant);
        localStorage.setItem('variants', JSON.stringify(v));
        localStorage.setItem('theme', theme);
    }, [theme])

    useEffect(() => {
        localStorage.setItem('variant', variant);
    }, [variant])

    const themes = Array.from(Object.keys(THEME_VARIANTS));

    return (
        <section id="theme-section" className="px-4">
            <div className="mb-8">
                <h3 className="text-left gap-3 text-xl font-semibold md:text-2xl font-mono hover:text-accent">
                    Theme Selector
                </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors shadow-lg hover:shadow-xl">
                    <CardContent>
                        <div className="grid grid-cols-2">
                            <span>
                                <select 
                                    name="theme"
                                    id="theme"
                                    value={theme}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)}
                                >
                                    <option disabled value="message">CHOOSE A THEME</option>
                                    {themes.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </span>
                            <span>
                                <select
                                    name="variant"
                                    id="variant"
                                    value={variant}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setVariant(e.target.value)}
                                >
                                    <option disabled value="message">CHOOSE A VARIANT</option>
                                    {variants.map((v) => (
                                        <option key={v} value={v}>{v}</option>
                                    ))}
                                </select>
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
