// src/pages/ProjectDetailPage.tsx

// import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import CallToAction from "../components/homepage/CallToAction";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetailPage() {
  // 1. Get the 'slug' from the URL
  const { slug } = useParams();

  // 2. Find the correct project from our data
  const project = projectsData.find((p) => p.slug === slug);

  // 3. Handle project not found
  if (!project) {
    return (
      // REF: Added light mode bg/text colors
      <div
        className="container mx-auto px-6 py-40 text-center
                   bg-white text-gray-900
                   dark:bg-gray-950 dark:text-white"
      >
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p
          // REF: Added light mode text color
          className="mt-4 text-gray-600 dark:text-gray-400"
        >
          We couldn't find the project you were looking for.
        </p>
        <Link
          to="/projects"
          // REF: This primary button style works well on both themes
          className="group mt-8 inline-flex items-center justify-center rounded-lg
                     bg-blue-600 px-6 py-3 text-base font-semibold text-white
                     hover:bg-blue-500"
        >
          <ArrowLeft
            className="mr-2 h-4 w-4 transition-transform duration-300 
                       group-hover:-translate-x-1"
          />
          Back to All Projects
        </Link>
      </div>
    );
  }

  // 4. Render the project details
  return (
    <>
      {/* Project Hero */}
      {/* REF: This component uses an image with a dark overlay,
           so its light text works on both themes. No changes needed. */}
      <section className="relative bg-gray-900 py-32 md:py-48">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Content */}
      {/* REF: Added `bg-white`, prefixed `dark:bg-gray-950` */}
      <section className="bg-white py-20 md:py-28 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left Column: Details Table */}
            <div className="lg:col-span-1">
              <div
                // REF: Refactored card for light/dark
                className="rounded-2xl bg-gray-50 border border-gray-200 p-6
                           dark:bg-gray-900 dark:border-gray-800"
              >
                <h3
                  // REF: Added `text-gray-900`, prefixed `text-white`
                  className="text-xl font-bold text-gray-900 mb-4 dark:text-white"
                >
                  Project Details
                </h3>
                <ul className="space-y-3">
                  {project.details.map((detail) => (
                    <li key={detail.label} className="flex justify-between">
                      <span
                        // REF: Added `text-gray-600`, prefixed `text-gray-400`
                        className="text-sm font-medium text-gray-600 dark:text-gray-400"
                      >
                        {detail.label}:
                      </span>
                      <span
                        // REF: Added `text-gray-900`, prefixed `text-white`
                        className="text-sm text-gray-900 text-right dark:text-white"
                      >
                        {detail.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Case Study */}
            <div className="lg:col-span-2">
              <h2
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white"
              >
                Case Study
              </h2>
              <div
                // REF: Refactored prose styles for light/dark
                className="prose mt-6 text-gray-600 max-w-none 
                           prose-p:leading-relaxed prose-strong:text-gray-900
                           dark:prose-invert dark:text-gray-400 dark:prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: project.caseStudy }}
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
