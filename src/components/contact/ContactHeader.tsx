// src/components/contact/ContactHeader.tsx

// import React from "react";

export default function ContactHeader() {
  return (
    // REF: Added `bg-white`, prefixed `bg-gray-900` with `dark:`
    <section className="bg-white py-20 md:py-32 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2
          // REF: Updated text color
          className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500"
        >
          Get in Touch
        </h2>
        <h1
          // REF: Added `text-gray-900`, prefixed `text-white`
          className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
        >
          Let's Build Together
        </h1>
        <p
          // REF: Added `text-gray-600`, prefixed `text-gray-400`
          className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-8 dark:text-gray-400"
        >
          Have a project inquiry, a tender submission, or a general question?
          Our team is ready to help you.
        </p>
      </div>
    </section>
  );
}
