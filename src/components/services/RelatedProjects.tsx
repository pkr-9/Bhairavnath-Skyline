import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projectsData } from "../../data/projects";

export default function RelatedProjects({ category }: { category: string }) {
  // Filter projects by the current service category, take max 3
  const related = projectsData
    .filter((p) => p.category === category)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-white py-20 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured {category} Projects
          </h2>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-500"
          >
            View Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative h-64 overflow-hidden rounded-xl mb-4">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
                {project.location}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
