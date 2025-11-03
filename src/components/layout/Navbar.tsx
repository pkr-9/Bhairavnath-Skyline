// src/components/layout/Navbar.tsx

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// REF: Refactored StyledNavLink for light/dark mode
const StyledNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
        isActive
          ? "text-white bg-blue-600 shadow-[0_2px_8px_-2px_rgba(59,130,246,0.2)]"
          : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRow2Open, setIsRow2Open] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // We use the functional form of setState to read the latest state
      setIsScrolled((prevIsScrolled) => {
        // 1. If we are NOT currently in the scrolled state
        if (!prevIsScrolled) {
          // We trigger the scrolled state ONLY if we scroll PAST 10px
          return scrollY > 10;
        }

        // 2. If we ARE currently in the scrolled state
        if (prevIsScrolled) {
          // We only go back to the "not scrolled" state if we scroll
          // ALL THE WAY back up (e.g., less than 5px)
          return scrollY > 5;
        }

        return prevIsScrolled;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showRow2 = !isScrolled || isRow2Open;

  return (
    <header className="sticky top-0 z-50">
      {/* Main Navigation */}
      <div
        // REF: Added light mode styles, prefixed dark styles.
        // REF: Updated shadow for light mode.
        className={`bg-white border-b border-gray-200 
                    dark:bg-gray-950 dark:border-gray-800 
                    transition-all duration-300 ${
                      isScrolled
                        ? "shadow-lg shadow-gray-900/10 dark:shadow-black/20"
                        : ""
                    }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-12">
              {/* Logo with elegant styling */}
              <NavLink
                to="/"
                className="group flex items-center gap-2 text-2xl font-bold tracking-tight transition-all duration-300"
              >
                <span
                  // REF: Added `text-gray-900`, prefixed `text-white`
                  className="text-gray-900 dark:text-white"
                >
                  Bhairavnath
                </span>
                <span
                  // REF: Updated text color
                  className="text-blue-600 dark:text-blue-500"
                >
                  Skyline
                </span>
                <div
                  // REF: Updated underline color
                  className="h-px w-0 group-hover:w-full bg-blue-600 dark:bg-blue-500
                             transition-all duration-500 absolute bottom-0 left-0"
                />
              </NavLink>

              {/* Primary Links */}
              <nav className="hidden lg:flex items-center gap-2">
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/about">About Us</StyledNavLink>
                <StyledNavLink to="/careers">Careers</StyledNavLink>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {/* Elegant Search Bar (Commented out) */}
              {/* ... */}

              {/* Services Toggle */}
              {isScrolled && (
                <button
                  onClick={() => setIsRow2Open(!isRow2Open)}
                  // REF: Refactored toggle button for light/dark
                  className="rounded-lg p-2.5 text-gray-500
                             hover:bg-gray-100 hover:text-gray-900
                             bg-white ring-1 ring-gray-200
                             transition-all duration-300 
                             dark:text-gray-400 dark:hover:bg-gray-800
                             dark:hover:text-white dark:bg-gray-900 
                             dark:ring-gray-700"
                  aria-expanded={isRow2Open}
                  aria-label="Toggle services menu"
                >
                  {isRow2Open ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              )}

              <ThemeToggle />
              {/* Premium CTA Button */}
              <a
                href="/contact"
                // REF: This primary button works well on both themes
                className="hidden sm:inline-flex items-center justify-center rounded-lg
                         bg-blue-600 px-6 py-2.5 text-sm font-semibold
                         text-white shadow-lg shadow-blue-600/20
                         transition-all duration-300
                         hover:bg-blue-500 hover:shadow-blue-500/30 hover:scale-[1.02]
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:ring-offset-2 focus:ring-offset-white
                         dark:focus:ring-offset-gray-950"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories Navigation */}
      <div
        // REF: Refactored Row 2 for light/dark
        className={`transition-all duration-500 ease-in-out overflow-hidden 
                    bg-gray-50 dark:bg-gray-900 ${
                      showRow2 ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                    } ${
          isScrolled
            ? "shadow-xl shadow-gray-900/10 border-b border-gray-200 dark:shadow-black/30 dark:border-b dark:border-gray-800"
            : "border-t border-gray-200 dark:border-t dark:border-gray-800"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex h-12 items-center overflow-x-auto">
            <div className="flex items-center gap-2">
              <StyledNavLink to="/services/infrastructure">
                Core Infrastructure
              </StyledNavLink>
              <StyledNavLink to="/services/real-estate">
                Building & Real Estate
              </StyledNavLink>
              <StyledNavLink to="/services/water">
                Water & Environmental
              </StyledNavLink>
              <StyledNavLink to="/services/interiors">
                Premium Interiors
              </StyledNavLink>
              <StyledNavLink to="/services/urban-tech">
                Urban Technology
              </StyledNavLink>
              <StyledNavLink to="/services/all-services">
                <span className="flex items-center gap-1.5">
                  All Services
                  {/* REF: Updated arrow color */}
                  <span className="text-blue-600 dark:text-blue-500">→</span>
                </span>
              </StyledNavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
