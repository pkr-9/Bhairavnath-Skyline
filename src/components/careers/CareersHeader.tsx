// src/components/careers/CareersHeader.tsx

// import React from "react";
import { Award, Users, Construction } from "lucide-react";

const benefits = [
  {
    icon: Construction,
    title: "Build the Nation",
    description:
      'Work on "nation-building" projects [cite: 3] like mega-bridges and SEZs [cite: 10, 6] that have a lasting impact.',
  },
  {
    icon: Award,
    title: "Pursue Excellence",
    description:
      "We are committed to the highest standards, adhering to ISO, RERA, and Green Norms [cite: 74] in all we do.",
  },
  {
    icon: Users,
    title: "Grow Your Career",
    description:
      "Join a team of experts and grow your skills in EPC Contracts[cite: 69], project management, and sustainable design.",
  },
];

export default function CareersHeader() {
  return (
    // REF: Added `bg-white`, prefixed `bg-gray-900` with `dark:`
    <section className="bg-white py-20 md:py-32 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Top Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            // REF: Updated text color
            className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500"
          >
            Join Our Team
          </h2>
          <h1
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 
                       sm:text-6xl dark:text-white"
          >
            Why Work at Bhairavnath Skyline?
          </h1>
          <p
            // REF: Added `text-gray-600`, prefixed `text-gray-400`
            className="mt-8 text-lg text-gray-600 leading-8 dark:text-gray-400"
          >
            We aren't just a construction company; we are a team of engineers,
            designers, and visionaries dedicated to building a better future for
            India.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 
                        md:grid-cols-3 lg:max-w-none"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              // REF: Added `bg-gray-50` and `border-gray-200` for light mode
              // REF: Prefixed `bg-gray-950` and `border-gray-800` with `dark:`
              className="flex flex-col rounded-2xl bg-gray-50 p-8 
                         border border-gray-200
                         dark:bg-gray-950 dark:border-gray-800"
            >
              <benefit.icon
                // REF: Updated icon color
                className="h-10 w-10 text-blue-600 dark:text-blue-400"
              />
              <h3
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="mt-6 text-xl font-bold text-gray-900 dark:text-white"
              >
                {benefit.title}
              </h3>
              <p
                // REF: Added `text-gray-700`, prefixed `text-gray-400`
                className="mt-3 text-sm text-gray-700 leading-relaxed dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: benefit.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
