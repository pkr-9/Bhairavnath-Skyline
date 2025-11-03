// src/components/homepage/FeaturedProjects.tsx

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Reusable Project Card Component
type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const ProjectCard = ({
  category,
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) => (
  <Link
    to={link}
    // REF: Added light mode border/shadows, prefixed dark mode styles
    className="group relative flex flex-col rounded-2xl overflow-hidden 
               border border-gray-200 transition-all duration-300
               hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50
               dark:border-gray-800 dark:hover:shadow-blue-600/10 dark:hover:border-blue-600/50"
  >
    {/* Image */}
    <div className="relative h-64 w-full overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover transition-all duration-500 
                   group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>

    {/* Content */}
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
        {category}
      </span>
      <h3
        // REF: Added `text-gray-900`, prefixed `text-white`
        className="mt-2 text-xl font-bold text-gray-900 dark:text-white"
      >
        {title}
      </h3>
      <p
        // REF: Added `text-gray-600`, prefixed `text-gray-400`
        className="mt-3 text-sm text-gray-600 leading-relaxed dark:text-gray-400"
      >
        {description}
      </p>
    </div>

    {/* Arrow Icon on Hover */}
    <div
      // REF: These styles (white-ish icon on blur) work well on images in both modes
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

// Main FeaturedProjects Component
export default function FeaturedProjects() {
  return (
    // REF: Added `bg-gray-50`, prefixed `dark:bg-gray-950`
    <section className="bg-gray-50 py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <h2
              // REF: Updated text color
              className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500"
            >
              Our Portfolio
            </h2>
            <p
              // REF: Added `text-gray-900`, prefixed `text-white`
              className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
            >
              Featured Projects
            </p>
          </div>
          <Link
            to="/projects"
            // REF: Added light mode button styles, prefixed dark mode styles
            className="group inline-flex items-center justify-center rounded-lg
                       bg-white px-6 py-3 text-base font-semibold text-blue-600
                       shadow-lg shadow-black/5 ring-1 ring-inset ring-gray-200
                       transition-all duration-300 
                       hover:bg-gray-100 hover:text-blue-500 hover:ring-gray-300
                       dark:bg-gray-900 dark:text-blue-400 dark:shadow-black/20
                       dark:ring-gray-700 dark:hover:bg-gray-800 
                       dark:hover:text-blue-300 dark:hover:ring-gray-600"
          >
            View All Projects
            <ArrowRight
              className="ml-2 h-4 w-4 transition-transform duration-300 
                                   group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Projects Grid */}
        <div
          className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 
                        md:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          <ProjectCard
            category="Mega Projects"
            title="Cable-Stayed Bridge"
            description="A landmark metro rail bridge, showcasing our expertise in 
                         complex urban infrastructure and nation-building."
            imageUrl="https://picsum.photos/800/600"
            link="/projects/cable-bridge"
          />

          <ProjectCard
            category="Real Estate"
            title="Luxury Residential Tower"
            description="Developing high-end living spaces with luxury apartments, 
                         offering premium amenities and modern ecosystems."
            imageUrl="https://picsum.photos/800/600?2"
            link="/projects/luxury-tower"
          />

          <ProjectCard
            category="Industrial Zones"
            title="Special Economic Zone (SEZ)"
            description="Constructing large-scale industrial parks and SEZs, complete 
                         with factories and warehouse infrastructure."
            imageUrl="https://picsum.photos/800/600?3"
            link="/projects/sez-development"
          />
        </div>
      </div>
    </section>
  );
}
