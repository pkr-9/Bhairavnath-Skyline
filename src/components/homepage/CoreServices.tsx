// src/components/homepage/CoreServices.tsx

import { Link } from "react-router-dom";
import {
  Building2, // For Real Estate
  Construction, // For Infrastructure
  Droplet, // For Water
  Paintbrush, // For Interiors
  ArrowRight,
} from "lucide-react";
import React from "react";

// Interface for our Service Card props
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

// Reusable Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
}) => (
  <Link
    to={link}
    // REF: Added light mode card styles (bg-white, border-gray-200, hover shadows)
    // REF: Prefixed original dark mode styles with `dark:`
    className="group relative flex flex-col rounded-2xl bg-white p-8 
               border border-gray-200 transition-all duration-300
               hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1
               dark:bg-gray-950 dark:border-gray-800
               dark:hover:border-blue-600/50 dark:hover:shadow-blue-600/10"
  >
    {/* Icon */}
    <div
      // REF: This blue accent bg works on both light/dark, no changes needed.
      className="absolute -top-5 left-8 flex h-14 w-14 items-center justify-center 
                    rounded-full bg-blue-600 text-white
                    shadow-lg shadow-blue-600/20 transition-all duration-300
                    group-hover:scale-110 group-hover:bg-blue-500"
    >
      <Icon className="h-6 w-6" strokeWidth={2} />
    </div>

    {/* Content */}
    <div className="mt-10">
      <h3
        // REF: Added light mode text colors, prefixed dark mode colors
        className="text-xl font-bold text-gray-900 transition-colors duration-300 
                   group-hover:text-blue-500
                   dark:text-white dark:group-hover:text-blue-400"
      >
        {title}
      </h3>
      <p
        // REF: Added light mode text (`text-gray-600`), prefixed dark (`dark:text-gray-400`)
        className="mt-3 text-sm text-gray-600 leading-relaxed dark:text-gray-400"
      >
        {description}
      </p>
    </div>

    {/* Read More */}
    <div className="mt-6 flex-grow flex items-end">
      <span
        // REF: Adjusted "Learn More" text colors for light/dark
        className="flex items-center text-sm font-medium text-blue-600
                       transition-all duration-300 group-hover:text-blue-500 group-hover:gap-2
                       dark:text-blue-500 dark:group-hover:text-blue-400"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </span>
    </div>
  </Link>
);

// Main CoreServices Component
export default function CoreServices() {
  return (
    // REF: Added `bg-white`, prefixed `dark:bg-gray-900`
    <section className="bg-white py-20 md:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            // REF: Updated text color
            className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500"
          >
            What We Do
          </h2>
          <p
            // REF: Added `text-gray-900`, prefixed `dark:text-white`
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            Our Core Expertise
          </p>
          <p
            // REF: Added `text-gray-600`, prefixed `dark:text-gray-400`
            className="mt-6 text-lg text-gray-600 leading-8 dark:text-gray-400"
          >
            We are a full-service construction and infrastructure firm,
            specializing in large-scale projects that define landscapes and
            build communities.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 
                        md:grid-cols-2 lg:max-w-none lg:grid-cols-4"
        >
          <ServiceCard
            icon={Construction}
            title="Core Infrastructure"
            description="Engineering nation-building projects like roads, highways, 
                         cable-stayed bridges, and tunnels."
            link="/services/infrastructure"
          />

          <ServiceCard
            icon={Building2}
            title="Building & Real Estate"
            description="Developing residential towers, IT parks, and 
                         commercial hubs that form live-work-play ecosystems."
            link="/services/real-estate"
          />

          <ServiceCard
            icon={Droplet}
            title="Water & Environmental"
            description="Focused on lifeline projects such as water treatment plants (WTPs), 
                         canals, and flood control dams."
            link="/services/water"
          />

          <ServiceCard
            icon={Paintbrush}
            title="Premium Interiors"
            description="Delivering turnkey luxury with Italian marble, 
                         modular kitchens, and bespoke aesthetic mastery."
            link="/services/interiors"
          />
        </div>
      </div>
    </section>
  );
}
