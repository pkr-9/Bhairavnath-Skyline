// src/components/about/AboutHeader.tsx

// import React from "react";

export default function AboutHeader() {
  return (
    // REF: Added `bg-white` for light mode, prefixed `bg-gray-900` with `dark:`
    <section className="bg-white py-20 md:py-32 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2
          // REF: Changed blue-500 to blue-600 for better contrast on light bg
          className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500"
        >
          Our Mission
        </h2>
        <h1
          // REF: Added `text-gray-900` for light mode, prefixed `text-white` with `dark:`
          className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
        >
          We Don't Just Build Structures,
          <br />
          {/* REF: Changed blue-500 to blue-600 for light mode */}
          We{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Deliver Dreams
          </span>
          .
        </h1>
        <p
          // REF: Changed `text-gray-400` to `text-gray-600` for light mode
          className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-8 dark:text-gray-400"
        >
          Bhairavnath Skyline is built on a foundation of excellence,
          sustainability, and a "nation-building" philosophy. From massive
          infrastructure to luxury residences, our commitment is to deliver
          quality from foundation to rooftop.
        </p>
      </div>
    </section>
  );
}
