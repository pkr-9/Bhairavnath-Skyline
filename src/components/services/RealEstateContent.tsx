// src/components/services/RealEstateContent.tsx

// import React from "react";
import { Building, Briefcase, LayoutGrid, Store } from "lucide-react";

// 1. Define the sub-services
const subServices = [
  {
    icon: Building,
    title: "Residential Towers",
    description:
      "We specialize in developing both high-end **luxury apartments** and inclusive **affordable housing** projects.",
  },
  {
    icon: Briefcase,
    title: "Commercial Hubs",
    description:
      "Constructing state-of-the-art **IT parks** and flexible **co-working spaces** designed for modern business.",
  },
  {
    icon: LayoutGrid,
    title: "Mixed-Use Complexes",
    description:
      'Creating integrated **"live-work-play" ecosystems** that combine residential, commercial, and recreational facilities.',
  },
  {
    icon: Store,
    title: "Comprehensive Developments",
    description:
      "Our diverse portfolio also includes private **Homes**, corporate **Offices**, retail **Malls**, and large-scale **Townships**.",
  },
];

// 2. Main Content Component
export default function RealEstateContent() {
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
              Building Environments
            </h2>
            <p
              // REF: Added `text-gray-600`, prefixed `text-gray-400`
              className="mt-4 text-gray-600 dark:text-gray-400"
            >
              We go beyond simple construction to build environments. Our focus
              is on creating spaces that are not only functional and aesthetic
              but also sustainable and community-oriented.
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
