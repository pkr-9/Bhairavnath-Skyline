// src/pages/ProjectDetailPage.tsx

import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import CallToAction from "../components/homepage/CallToAction";
import { ArrowLeft, Download, Clock, Building } from "lucide-react";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-40 text-center bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/projects" className="mt-8 text-blue-600 hover:underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-gray-900">
        <img
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 pb-20">
          <div className="container mx-auto">
            <Link
              to="/projects"
              className="mb-6 inline-flex items-center text-sm font-semibold text-white/80 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:max-w-3xl">
              {project.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-4">
              {/* Dynamic Status Badge */}
              <span className="inline-flex items-center rounded-full bg-blue-600/90 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                {project.category.replace("-", " ").toUpperCase()}
              </span>
              <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm border border-white/20">
                {project.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* LEFT COLUMN: Narrative (8 cols) */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Project Overview
              </h2>
              {/* Using prose for rich text formatting of the case study */}
              <div
                className="prose prose-lg mt-6 max-w-none text-gray-600 dark:prose-invert dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: project.caseStudy }}
              />

              {/* Image Gallery Placeholder (You can expand this later) */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                <img
                  src="https://picsum.photos/600/400?random=1"
                  alt="Detail 1"
                  className="rounded-xl object-cover h-64 w-full"
                />
                <img
                  src="https://picsum.photos/600/400?random=2"
                  alt="Detail 2"
                  className="rounded-xl object-cover h-64 w-full"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Technical Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                  Technical Specifications
                </h3>

                <div className="space-y-6">
                  {/* Map over project details */}
                  {project.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex flex-col border-b border-gray-200 pb-4 last:border-0 last:pb-0 dark:border-gray-800"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {detail.label}
                      </span>
                      <span className="mt-1 text-base font-medium text-gray-900 dark:text-white">
                        {detail.value}
                      </span>
                    </div>
                  ))}

                  {/* Static "Fake" Data for visual density (since we don't have it in DB yet) */}
                  <div className="flex flex-col border-b border-gray-200 pb-4 dark:border-gray-800">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Safe Man-Hours
                    </span>
                    <span className="mt-1 flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white">
                      <Clock className="h-4 w-4 text-green-600" /> 500,000+ LTI
                      Free
                    </span>
                  </div>

                  <div className="flex flex-col border-b border-gray-200 pb-4 dark:border-gray-800">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Contract Type
                    </span>
                    <span className="mt-1 flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white">
                      <Building className="h-4 w-4 text-blue-600" /> EPC /
                      Turnkey
                    </span>
                  </div>
                </div>

                {/* Download Brochure Button */}
                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20">
                  <Download className="h-4 w-4" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
