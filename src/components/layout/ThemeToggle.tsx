// src/components/layout/ThemeToggle.tsx

// import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // REF: Added light mode defaults (bg-white, text-gray-500, etc.)
      // REF: Prefixed original dark mode styles with `dark:`
      className="rounded-lg p-2.5 text-gray-500
                 hover:bg-gray-100 hover:text-gray-900
                 transition-all duration-300 bg-white ring-1 ring-gray-200
                 dark:bg-gray-900 dark:ring-gray-700 dark:hover:bg-gray-800
                 dark:text-gray-400 dark:hover:text-white"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
