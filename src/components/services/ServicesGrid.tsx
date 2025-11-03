// src/components/services/ServicesGrid.tsx

// import React from "react";
import { Link } from "react-router-dom";
import {
  Construction,
  Building2,
  Droplet,
  Paintbrush,
  RadioTower,
  ArrowRight,
} from "lucide-react";

// 1. Define your 5 service categories
const serviceList = [
  {
    icon: Construction,
    title: "Core Infrastructure & Heavy Construction",
    description:
      "Roads, highways, cable-stayed bridges, tunnels, and industrial zones.",
    link: "/services/infrastructure",
  },
  {
    icon: Building2,
    title: "Building Construction & Real Estate",
    description:
      "Residential towers, IT parks, commercial hubs, and mixed-use complexes.",
    link: "/services/real-estate",
  },
  {
    icon: Droplet,
    title: "Water & Environmental Infrastructure",
    description:
      "Lifeline projects including WTPs, STPs, canals, and flood control dams.",
    link: "/services/water",
  },
  {
    icon: Paintbrush,
    title: "Premium Interior & Fit-Outs",
    description:
      "Turnkey luxury interiors, from Italian marble to bespoke modular kitchens.",
    link: "/services/interiors",
  },
  {
    icon: RadioTower,
    title: "Advertising & Urban Tech",
    description:
      "Smart city solutions, digital billboards, and modern public amenities.",
    link: "/services/urban-tech",
  },
];

// 2. Main ServicesGrid Component
export default function ServicesGrid() {
  return (
    // REF: Added `bg-white`, prefixed `dark:bg-gray-950`
    <section className="bg-white py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Responsive Grid: 1 col, 2 col, then 3 col */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              // REF: Refactored card for light/dark modes
              className="group relative flex flex-col rounded-2xl bg-white p-8 
                         border border-gray-200 transition-all duration-300
                         hover:border-blue-500/50 hover:shadow-2xl 
                         hover:shadow-blue-500/10 hover:-translate-y-1
                         dark:bg-gray-900 dark:border-gray-800
                         dark:hover:border-blue-600/50 
                         dark:hover:shadow-blue-600/10"
            >
              <div
                // REF: Refactored icon wrapper for light/dark
                className="flex h-12 w-12 items-center justify-center 
                              rounded-lg bg-gray-100 text-blue-600
                              transition-all duration-300
                              group-hover:bg-blue-600 group-hover:text-white
                              dark:bg-gray-800 dark:text-blue-400"
              >
                <service.icon className="h-6 w-6" strokeWidth={2} />
              </div>

              <div className="mt-6 flex-grow">
                <h3
                  // REF: Added `text-gray-900`, prefixed `text-white`
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {service.title}
                </h3>
                <p
                  // REF: Added `text-gray-600`, prefixed `text-gray-400`
                  className="mt-3 text-sm text-gray-600 leading-relaxed dark:text-gray-400"
                >
                  {service.description}
                </p>
              </div>

              <div className="mt-6">
                <span
                  // REF: Updated "Learn More" text colors
                  className="flex items-center text-sm font-medium text-blue-600
                                 transition-all duration-300 group-hover:text-blue-500 group-hover:gap-2
                                 dark:text-blue-500 dark:group-hover:text-blue-400"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
