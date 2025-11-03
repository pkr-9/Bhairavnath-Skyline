// src/components/services/InfrastructureContent.tsx

// import React from "react";
import { GitMerge, Funnel as Tunnel, Factory } from "lucide-react";

// 1. Define the sub-services
const subServices = [
  {
    icon: GitMerge,
    title: "Roads & Highways",
    description:
      "We specialize in the **Design, Build, Operate (BOT/PPP)** models for national highways and expressways, creating vital transport arteries.",
  },
  {
    icon: GitMerge, // Using this as a metaphor for a bridge
    title: "Bridges & Flyovers",
    description:
      "Our expertise covers complex structures, including **Cable-stayed, suspension, and metro rail bridges** that connect cities.",
  },
  {
    icon: Tunnel,
    title: "Tunnels & Underpasses",
    description:
      "Utilizing advanced **Boring and trenchless technology**, we construct underground tunnels and underpasses with minimal surface disruption.",
  },
  {
    icon: Factory,
    title: "Industrial Zones",
    description:
      "We develop large-scale industrial parks, **factories, warehouses, and Special Economic Zones (SEZs)** that power economic growth.",
  },
];

// 2. Main Content Component
export default function InfrastructureContent() {
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
              Our Capabilities
            </h2>
            <p
              // REF: Added `text-gray-600`, prefixed `text-gray-400`
              className="mt-4 text-gray-600 dark:text-gray-400"
            >
              We manage every aspect of heavy construction, from initial
              geological surveys to the final coat of paint, ensuring projects
              are delivered on time and to specification.
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
                      // This ensures the bold tags in your description are rendered
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
