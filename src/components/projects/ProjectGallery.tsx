// src/components/projects/ProjectGallery.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Clock,
  CalendarDays,
} from "lucide-react";
import {
  projectsData,
  projectCategories,
  projectStatuses,
  type Project,
  type ProjectStatus,
} from "../../data/projects";

// --- Helper Components ---

// 1. Status Badge Component
const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const styles = {
    completed:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    ongoing:
      "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
    upcoming:
      "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800",
  };

  const icons = {
    completed: CheckCircle2,
    ongoing: Clock,
    upcoming: CalendarDays,
  };

  const Icon = icons[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border ${styles[status]}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {projectStatuses[status]}
    </span>
  );
};

// 2. Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="group relative flex flex-col rounded-2xl overflow-hidden 
               border border-gray-200 bg-white transition-all duration-300
               hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50 hover:-translate-y-1
               dark:bg-gray-900 dark:border-gray-800 dark:hover:shadow-blue-600/10 dark:hover:border-blue-600/50"
  >
    {/* Image Section */}
    <div className="relative h-64 w-full overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-full w-full object-cover transition-all duration-700 
                   group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80" />

      {/* Absolute Badge: Category */}
      <div className="absolute top-4 left-4">
        <span className="inline-block backdrop-blur-md bg-white/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm dark:bg-gray-900/90 dark:text-white">
          {projectCategories[project.category]}
        </span>
      </div>
    </div>

    {/* Content Section */}
    <div className="flex-1 p-6 flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <StatusBadge status={project.status} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
        {project.title}
      </h3>

      <div className="flex items-center text-gray-500 text-sm mb-6 dark:text-gray-400">
        <MapPin className="h-4 w-4 mr-1.5 text-blue-500" />
        {project.location}
      </div>

      <div className="mt-auto flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all duration-300">
        View Case Study
        <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </div>
  </Link>
);

// --- Main Component ---

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeStatus, setActiveStatus] = useState("all");

  // Filters Configuration
  const categoryFilters = [
    { id: "all", name: "All Industries" },
    ...Object.entries(projectCategories).map(([id, name]) => ({ id, name })),
  ];

  const statusFilters = [
    { id: "all", name: "Any Status" },
    ...Object.entries(projectStatuses).map(([id, name]) => ({ id, name })),
  ];

  // Logic: Filter by Category AND Status
  const filteredProjects = projectsData.filter((p) => {
    const matchCategory =
      activeCategory === "all" || p.category === activeCategory;
    const matchStatus = activeStatus === "all" || p.status === activeStatus;
    return matchCategory && matchStatus;
  });

  return (
    <section className="bg-white py-20 md:py-28 dark:bg-gray-950" id="gallery">
      <div className="container mx-auto px-6">
        {/* Controls Container */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* 1. Category Tabs (Pill shape) */}
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border
                  ${
                    activeCategory === filter.id
                      ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900"
                      : "bg-transparent text-gray-600 border-gray-200 hover:border-gray-400 dark:text-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
                  }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* 2. Status Toggles (Simple text toggles) */}
          <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            {statusFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveStatus(filter.id)}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all duration-300
                  ${
                    activeStatus === filter.id
                      ? "bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-3xl bg-gray-50 border border-dashed border-gray-200 py-24 text-center dark:bg-gray-900/50 dark:border-gray-800">
            <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
              <CalendarDays className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              No Projects Found
            </h3>
            <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400">
              We couldn't find any projects matching the selected criteria. Try
              adjusting your filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setActiveStatus("all");
              }}
              className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
