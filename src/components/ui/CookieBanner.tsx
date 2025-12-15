// src/components/ui/CookieBanner.tsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl animate-fade-in-up">
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-gray-900 p-4 shadow-2xl dark:bg-white md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-white dark:text-gray-900">
            We use cookies to enhance your browsing experience and analyze site
            traffic.
          </p>
          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
            By clicking "Accept", you consent to our use of cookies. Read our{" "}
            <Link
              to="/privacy"
              className="underline hover:text-white dark:hover:text-black"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-500"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
