'use client';

import { ReactElement, useEffect, useState } from "react";
import { Card, CardContent } from "./card";


const themeVariantMap = new Map<string, string[]>();
themeVariantMap.set("default", ["default"]);
themeVariantMap.set("catpuccin", ["latte", "mocha", "frappe", "macchiato"])

export default function ThemeSection(): ReactElement {

    const [theme, setTheme] = useState("default");
    const [variants, setVariants] = useState(['default']);
    const [variant, setVariant] = useState('default');

    useEffect(() => {
        const v = themeVariantMap.get(theme);
        if (typeof v === 'undefined') {
            setVariants(['default']);
        } else {
            setVariants(v);
        }
    }, [theme])

    const themes = themeVariantMap.keys();

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
                                <select name="theme" id="theme">
                                    <option disabled value="message">CHOOSE A THEME</option>
                                    {themes.map((t) => {
                                        return <option 
                                                    key={t}
                                                    value={t} 
                                                    onClick={() => { setTheme(t); console.log(theme) }}
                                               >{t}</option>
                                    })}
                                </select>
                            </span>
                            <span>
                                <select name="variant" id="variant">
                                    <option disabled value="message">CHOOSE A VARIANT</option>
                                    {variants.map((v) => {
                                        return <option 
                                                    key={v}
                                                    value={v}
                                                    onClick={() => { setVariant(v); console.log(v) }}
                                               >{v}</option>
                                    })}
                                </select>
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}