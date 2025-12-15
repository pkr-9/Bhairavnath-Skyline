// src/context/ThemeContext.tsx

import React, { createContext, useContext, useState, useEffect } from "react";

// We removed 'toggleTheme' since there is no button anymore
interface ThemeContextType {
  theme: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // 1. Target the root element
    const root = window.document.documentElement;

    // 2. Define the media query for dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // 3. Helper to update DOM
    const applyTheme = (isDark: boolean) => {
      const newTheme = isDark ? "dark" : "light";
      setTheme(newTheme);

      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    // 4. Apply immediately on mount
    applyTheme(mediaQuery.matches);

    // 5. Listen for system changes (real-time update)
    const handleChange = (e: MediaQueryListEvent) => {
      applyTheme(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
