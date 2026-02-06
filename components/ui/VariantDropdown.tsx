'use client';

import { ReactElement, useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";

import { THEME_VARIANTS, useTheme } from "@/context/ThemeContext";
import { capitalize } from "@/lib/utils";


export default function VariantDropdown(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [themeOnly, setThemeOnly] = useState('default');
  const [variantOnly, setVariantOnly] = useState('default');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Use the ref to determine if the active element is in the dropdown. If not, close it.
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
    setVariantOnly(theme.split('-')[1]);
  }, [theme]);

  return (
    <div className="mt-1 flex justify-left">
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
          className="dropdown-button inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50"
          onClick={toggleDropdown}
        >
          {capitalize(variantOnly)}
          {isOpen ? <FaCaretDown className="ml-2 mt-0.5" /> : <FaCaretRight className="ml-2 mt-0.5" />}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute w-full z-10 right-0 mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              {THEME_VARIANTS[themeOnly].map((variant) => (
                <button
                  key={variant}
                  type="button"
                  className="dropdown-option block text-left px-4 py-2 text-sm w-full text-black hover:bg-gray-100"
                  onClick={() => ((selectedVariant: string) => {
                    setTheme(`${themeOnly}-${selectedVariant}`);
                    setIsOpen(false);
                  })(variant)}
                >
                  {capitalize(variant)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
