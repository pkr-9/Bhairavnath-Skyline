// src/components/about/OurCertifications.tsx

// import React from "react";
import { Award, ShieldCheck, Home, Leaf } from "lucide-react";

const certifications = [
  { name: "ISO Certified", icon: Award },
  { name: "RERA Compliant", icon: ShieldCheck },
  { name: "PMAY Approved", icon: Home },
  { name: "Green Norms Adherent", icon: Leaf },
];

export default function OurCertifications() {
  return (
    // REF: Changed `bg-gray-950` to `bg-white` for light mode
    <section className="bg-white py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            Our Commitment to Quality
          </h2>
          <p
            // REF: Added `text-gray-600`, prefixed `text-gray-400`
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400"
          >
            We adhere to the highest industry standards for quality, safety, and
            environmental responsibility.
          </p>
        </div>
        <div
          className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 
                        md:grid-cols-2 lg:grid-cols-4"
        >
          {certifications.map((cert) => (
            <div
              key={cert.name}
              // REF: Added `bg-gray-50` and `border-gray-200` for light mode
              // REF: Prefixed `bg-gray-900` and `border-gray-800` with `dark:`
              className="flex flex-col items-center justify-center 
                         rounded-2xl bg-gray-50 p-8
                         border border-gray-200
                         dark:bg-gray-900 dark:border-gray-800"
            >
              <cert.icon
                // REF: Updated icon color
                className="h-12 w-12 text-blue-600 dark:text-blue-500"
              />
              <p
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="mt-4 text-lg font-semibold text-gray-900 dark:text-white"
              >
                {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
