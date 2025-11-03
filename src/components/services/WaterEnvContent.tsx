// src/components/services/WaterEnvContent.tsx

// import React from "react";
import { Shield, Waves, Filter } from "lucide-react";

// 1. Define the sub-services
const subServices = [
  {
    icon: Waves,
    title: "Canals & Waterways",
    description:
      "Engineering vital waterways for both large-scale **irrigation** and efficient **cargo navigation**.",
  },
  {
    icon: Filter,
    title: "Sewage/Water Plants",
    description:
      "Developing critical urban infrastructure, including **STPs, WTPs, and smart pipelines** for clean water.",
  },
  {
    icon: Shield,
    title: "Flood Control",
    description:
      "Protecting communities by constructing robust **dams and retention walls** for effective flood management.",
  },
];

// 2. Main Content Component
export default function WaterEnvContent() {
  return (
    // REF: Added `bg-white`, prefixed `dark:bg-gray-950`
    <section className="bg-white py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column: Title */}
          <div className="lg:col-span-1">
            <h2
              // REF: Added `text-gray-900`, prefixed `text-white`
              className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white"
            >
              Focus on Lifeline Projects
            </h2>
            <p
              // REF: Added `text-gray-600`, prefixed `text-gray-400`
              className="mt-4 text-gray-600 dark:text-gray-400"
            >
              Our work in this sector is dedicated to building and maintaining
              "Lifeline Projects" that manage our most critical resource: water.
              We ensure cities are quenched and farms are nurtured.
            </p>
          </div>

          {/* Right Column: Sub-services Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {subServices.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="flex-none pt-1">
                    <service.icon
                      // REF: Updated icon color
                      className="h-6 w-6 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      // REF: Added `text-gray-900`, prefixed `text-white`
                      className="text-lg font-bold text-gray-900 dark:text-white"
                    >
                      {service.title}
                    </h3>
                    <p
                      // REF: Added `text-gray-600`, prefixed `text-gray-400`
                      className="mt-2 text-sm text-gray-600 leading-relaxed dark:text-gray-400"
                      // This ensures the citations are rendered correctly
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
