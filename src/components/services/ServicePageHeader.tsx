// src/components/services/ServicePageHeader.tsx

// import React from "react";

interface ServicePageHeaderProps {
  category: string;
  title: string;
  description: string;
  backgroundImage: string; // We'll use this for a nice visual
}

export default function ServicePageHeader({
  category,
  title,
  description,
  backgroundImage,
}: ServicePageHeaderProps) {
  return (
    <section className="relative bg-gray-900 py-32 md:py-48">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            {category}
          </h2>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-8 text-lg text-gray-300 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
}
