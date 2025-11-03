// src/components/services/ServicesHeader.tsx

// import React from "react";

export default function ServicesHeader() {
  return (
    // REF: Added `bg-white`, prefixed `dark:bg-gray-900`
    <section className="bg-white py-20 md:py-32 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h1
          // REF: Added `text-gray-900`, prefixed `dark:text-white`
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
        >
          What We Do
        </h1>
        <p
          // REF: Added `text-gray-600`, prefixed `dark:text-gray-400`
          className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-8 dark:text-gray-400"
        >
          We provide a complete spectrum of services in construction,
          infrastructure, and real estate. From initial design and government
          approvals to final turnkey delivery, we are your partners in building
          the future.
        </p>
      </div>
    </section>
  );
}
