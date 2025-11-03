// src/context/ThemeContext.tsx

import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Define the shape of the context data
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// 2. Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Helper function to get the initial theme
const getInitialTheme = () => {
  // Check for a saved theme in localStorage
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    // If no saved theme, check system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return systemPrefersDark ? "dark" : "light";
  }

  // Default for server-side rendering or build
  return "light";
};

// 4. Define the provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // 5. FIX: Initialize state using the helper function
  const [theme, setTheme] = useState(getInitialTheme);

  // 6. FIX: This effect now *only* applies the class and saves to localStorage
  useEffect(() => {
    const root = window.document.documentElement;

    // Apply/remove the 'dark' class to the <html> element
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save the user's choice
    localStorage.setItem("theme", theme);
  }, [theme]); // This runs whenever 'theme' changes

  // 7. This function is correct
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 8. Custom hook to easily use the theme context (correct)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
