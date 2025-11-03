// src/components/homepage/CallToAction.tsx

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    // REF: Added `bg-gray-50`, prefixed `bg-gray-900`
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div
          // REF: Added light mode gradient/shadow
          // REF: Prefixed all original dark mode styles
          className="relative overflow-hidden rounded-2xl 
                        bg-gradient-to-br from-blue-600 to-blue-500
                        p-12 shadow-2xl shadow-blue-500/20
                        dark:from-blue-700 dark:to-gray-950
                        dark:shadow-blue-700/20
                        dark:border dark:border-blue-600/30"
        >
          {/* Background decorative glow */}
          <div
            // REF: Changed glow to white for light mode, kept blue for dark
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 
                          bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)] 
                          dark:bg-[radial-gradient(circle,rgba(59,130,246,0.3),transparent_70%)] 
                          animate-pulse"
          />
          <div
            // REF: Changed glow to white for light mode, kept blue for dark
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 
                          bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] 
                          dark:bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)] 
                          animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2
              // REF: Kept `text-white` as bg is blue in both modes
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Have a Project in Mind?
            </h2>
            <p
              // REF: Adjusted text for light blue bg
              className="mt-6 max-w-2xl text-lg text-blue-50 leading-8
                         dark:text-blue-100/90"
            >
              From large-scale government tenders and EPC contracts to bespoke
              luxury interiors, our team has the expertise to bring your vision
              to life. Let's build the future together.
            </p>
            <Link
              to="/contact"
              // REF: This button is light-themed and works perfectly on
              // the blue backgrounds in both modes. No changes needed.
              className="group mt-10 inline-flex items-center justify-center rounded-lg
                         bg-white px-8 py-4 text-base font-semibold
                         text-blue-700 shadow-lg shadow-white/10
                         transition-all duration-300 
                         hover:bg-gray-200 hover:shadow-xl hover:shadow-white/20 
                         hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform duration-300 
                                   group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
