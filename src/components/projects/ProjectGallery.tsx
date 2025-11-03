// src/components/projects/ProjectGallery.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projectsData, projectCategories } from "../../data/projects";

// 1. Create a reusable Project Card component
// allow category to be a plain string because project data may come from external sources
interface Project {
  slug: string;
  imageUrl: string;
  title: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

// REF: Refactored ProjectCard for light/dark mode
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Link
    to={`/projects/${project.slug}`}
    // REF: Added light mode border/shadows, prefixed dark mode styles
    className="group relative flex flex-col rounded-2xl overflow-hidden 
               border border-gray-200 transition-all duration-300
               hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50
               dark:border-gray-800 dark:hover:shadow-blue-600/10 dark:hover:border-blue-600/50"
  >
    <div className="relative h-64 w-full overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-full w-full object-cover transition-all duration-500 
                   group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div
      // REF: Added light mode bg/border, prefixed dark mode styles
      className="flex-1 p-6 bg-white -mt-10 z-10 
                   rounded-t-2xl border-t border-gray-200
                   transition-all duration-300 group-hover:bg-gray-50
                   dark:bg-gray-900 dark:border-t dark:border-gray-800
                   dark:group-hover:bg-gray-800/50"
    >
      <span
        // REF: Updated text color
        className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400"
      >
        {projectCategories[
          project.category as keyof typeof projectCategories
        ] ?? project.category}
      </span>
      {/* FIX: Moved title to its own H3 for correct styling and semantics */}
      <h3
        // REF: Added `text-gray-900`, prefixed `text-white`
        className="mt-2 text-xl font-bold text-gray-900 dark:text-white"
      >
        {project.title}
      </h3>
    </div>
    <div
      // REF: These styles work well on both light/dark
      className="absolute top-6 right-6 z-20 flex h-10 w-10 
                    items-center justify-center rounded-full
                    bg-white/10 backdrop-blur-sm text-white
                    opacity-0 transition-all duration-300
                    group-hover:opacity-100 group-hover:bg-white/20"
    >
      <ArrowRight className="h-5 w-5" />
    </div>
  </Link>
);

// 2. Create the main filterable gallery component
export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Create an array of all categories + an "All" option
  const filters = [
    { id: "all", name: "All Projects" },
    ...Object.entries(projectCategories).map(([id, name]) => ({ id, name })),
  ];

  // Filter the projects based on the active state
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    // REF: Added `bg-white`, prefixed `dark:bg-gray-950`
    <section className="bg-white py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              // REF: Refactored inactive button state for light/dark
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300
                          ${
                            activeFilter === filter.id
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* No Projects Found Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center col-span-full">
            <h3
              // REF: Added `text-gray-900`, prefixed `text-white`
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              No Projects Found
            </h3>
            <p
              // REF: Added `text-gray-600`, prefixed `text-gray-400`
              className="mt-2 text-gray-600 dark:text-gray-400"
            >
              There are no projects in this category yet. Please check back
              later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
