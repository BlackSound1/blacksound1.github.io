'use client';

import { THEME_VARIANTS, useTheme } from "@/context/ThemeContext";
import { ReactElement, useRef, useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";

export default function VariantDropdown(): ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, variant, setVariant} = useTheme();
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (selectedVariant: string) => {
        setVariant(selectedVariant);
        setIsOpen(false);
    }

    // Use the ref to determine if the active element is in the dropdown. If not, close it.
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
                // Associates this div with the ref object.
                // "After React creates the DOM node and puts it on the screen,
                // React will set the current property of your ref object to that DOM node."
                ref={dropdownRef}
                onBlur={handleBlur}
            >
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50"
                    onClick={toggleDropdown}
                >
                    {variant}

                    {isOpen ? (
                        <FaCaretDown className="ml-2" />
                    ): (
                        <FaCaretRight className="ml-2" />
                    )}
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {THEME_VARIANTS[theme].map((theme) => (
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
