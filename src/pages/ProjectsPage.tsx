// src/pages/ProjectsPage.tsx

// import React from "react";
import ProjectGallery from "../components/projects/ProjectGallery";
import CallToAction from "../components/homepage/CallToAction";

// We can create a simple header component for this page
// REF: Refactored ProjectsHeader for light/dark mode
const ProjectsHeader = () => (
  // REF: Added `bg-white`, prefixed `dark:bg-gray-900`
  <section className="bg-white py-20 md:py-32 dark:bg-gray-900">
    <div className="container mx-auto px-6 text-center">
      <h1
        // REF: Added `text-gray-900`, prefixed `dark:text-white`
        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
      >
        Our Portfolio
      </h1>
      <p
        // REF: Added `text-gray-600`, prefixed `dark:text-gray-400`
        className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-8 dark:text-gray-400"
      >
        Explore our portfolio of completed projects. See our commitment to
        excellence and innovation in action, from nation-building infrastructure
        to luxury real estate.
      </p>
    </div>
  </section>
);

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <ProjectGallery />
      <CallToAction />
    </>
  );
}
