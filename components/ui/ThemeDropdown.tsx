'use client';

import { ReactElement, useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";

import { capitalize } from "@/lib/utils";
import { THEME_VARIANTS, useTheme } from "@/context/ThemeContext";


const allThemes = Array.from(Object.keys(THEME_VARIANTS));

export default function ThemeDropdown(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [themeOnly, setThemeOnly] = useState('default');
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // When a theme is selected, find its 0th variant and set the theme based on that
  const handleSelect = (selectedTheme: string) => {
    const defaultVariant = THEME_VARIANTS[selectedTheme][0];
    setTheme(`${selectedTheme}-${defaultVariant}`);
    setIsOpen(false);
  };

  // On blur, check if the active element is not inside the dropdown, and if so, close the dropdown.
  const handleBlur = () => {
    setTimeout(() => {
      if (!dropdownRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 0);
  };

  // Update the theme and variant as distinct names whenever the theme-variant name changes
  useEffect(() => {
    setThemeOnly(theme.split('-')[0]);
  }, [theme]);

  return (
    <div className="mt-1 flex justify-left">
      <div className="relative inline-block text-left" ref={dropdownRef} onBlur={handleBlur}>
        <button
          type="button"
          className="dropdown-button inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50"
          onClick={toggleDropdown}
        >
          {capitalize(themeOnly)}
          {isOpen ? <FaCaretDown className="ml-2 mt-0.5" /> : <FaCaretRight className="ml-2 mt-0.5" />}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute w-full right-0 mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              {allThemes.map((theme) => (
                <button
                  key={theme}
                  type="button"
                  className="dropdown-option block text-left px-4 py-2 text-sm w-full text-black hover:bg-gray-100"
                  onClick={() => handleSelect(theme)}
                >
                  {capitalize(theme)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
