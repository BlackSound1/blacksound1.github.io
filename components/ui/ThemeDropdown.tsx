'use client';

import { ReactElement, useRef, useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";

import { THEME_VARIANTS, useTheme } from "@/context/ThemeContext";


const allThemes = Array.from(Object.keys(THEME_VARIANTS));

export default function ThemeDropdown(): ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, setVariant } = useTheme();
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (selectedTheme: string) => {
        setTheme(selectedTheme);
        setVariant(THEME_VARIANTS[selectedTheme][0]);
        setIsOpen(false);
    };

    // Handle blur event. Check if the active element is not inside the dropdown, and if so, close the dropdown.
    const handleBlur = () => {
        setTimeout(() => {
            if (!dropdownRef.current?.contains(document.activeElement)) {
                setIsOpen(false);
            }
        }, 0);
    };

    return (
        <div className="flex justify-left">
            <div
                className="relative inline-block text-left"
                ref={dropdownRef}
                onBlur={handleBlur}
            >
                <button 
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50"
                    onClick={toggleDropdown}
                >
                    {theme}

                    {isOpen ? (
                        <FaCaretDown className="ml-2" />
                    ): (
                        <FaCaretRight className="ml-2" />
                    )}
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {allThemes.map((theme) => (
                                <button
                                    key={theme}
                                    type="button"
                                    className="block text-left rounded-md px-4 py-2 text-sm w-full text-black hover:bg-gray-100"
                                    onClick={() => handleSelect(theme)}
                                >
                                    {theme}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
