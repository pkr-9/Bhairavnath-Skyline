// src/components/careers/OpenPositions.tsx

// import React from "react";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

// This data will eventually come from your backend API
const jobOpenings = [
  {
    title: "Senior Project Manager (Infrastructure)",
    location: "Pune, India",
    type: "Full-Time",
    link: "#apply-form",
  },
  {
    title: "Interior Designer (Luxury Fit-Outs)",
    location: "Mumbai, India",
    type: "Full-Time",
    link: "#apply-form",
  },
  {
    title: "Civil Engineer (Water & Environmental)",
    location: "Remote / Site-based",
    type: "Contract",
    link: "#apply-form",
  },
  {
    title: "Contracts Manager (Govt. Tenders)",
    location: "Pune, India",
    type: "Full-Time",
    link: "#apply-form",
  },
];

export default function OpenPositions() {
  return (
    // REF: Added `bg-gray-50`, prefixed `bg-gray-950` with `dark:`
    <section className="bg-gray-50 py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            Current Openings
          </h2>
          <p
            // REF: Added `text-gray-600`, prefixed `text-gray-400`
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400"
          >
            We are always looking for talented individuals to join our team.
            Explore our open roles below.
          </p>
        </div>

        {/* Job List */}
        <div className="mt-16 max-w-3xl mx-auto space-y-6">
          {jobOpenings.map((job) => (
            <a
              key={job.title}
              href={job.link}
              // REF: Updated card styles for light/dark
              className="group block rounded-2xl bg-white p-6 
                         border border-gray-200 transition-all duration-300
                         hover:border-blue-600/50 hover:bg-gray-50
                         dark:bg-gray-900 dark:border-gray-800 
                         dark:hover:bg-gray-800/50"
            >
              <div className="flex justify-between items-center">
                <h3
                  // REF: Added `text-gray-900`, prefixed `text-white`
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {job.title}
                </h3>
                <ArrowRight
                  // REF: Updated arrow color
                  className="h-5 w-5 text-gray-400 transition-all 
                                 duration-300 group-hover:text-blue-400
                                 group-hover:translate-x-1
                                 dark:text-gray-600"
                />
              </div>
              <div
                // REF: Added `text-gray-600`, prefixed `text-gray-400`
                className="flex items-center gap-6 mt-3 text-sm text-gray-600 dark:text-gray-400"
              >
                <span className="flex items-center gap-2">
                  <MapPin
                    // REF: Updated icon color
                    className="h-4 w-4 text-gray-400 dark:text-gray-500"
                  />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase
                    // REF: Updated icon color
                    className="h-4 w-4 text-gray-400 dark:text-gray-500"
                  />
                  {job.type}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
