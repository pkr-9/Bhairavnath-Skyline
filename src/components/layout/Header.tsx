// src/components/layout/Header.tsx

import { ArrowRight, Building2, Construction, Home } from "lucide-react";
import { Link } from "react-router-dom";

// REF: Refactored ServiceIcon for light/dark
const ServiceIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div
    className="p-3 rounded-xl bg-gray-100/80 backdrop-blur-sm 
                  shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] transition-all duration-500
                  group-hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)] group-hover:scale-110
                  group-hover:shadow-lg
                  dark:bg-gray-800/80 dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]
                  dark:group-hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.15)]"
  >
    <Icon
      // REF: Updated icon color
      className="w-6 h-6 text-blue-500 dark:text-blue-400"
      strokeWidth={1.5}
    />
  </div>
);

export default function Header() {
  return (
    // REF: Added `bg-white`, prefixed `dark:bg-gray-950`
    <section className="relative overflow-hidden bg-white py-5 dark:bg-gray-950">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10 opacity-100">
        {/* REF: Light mode background grid/glow */}
        <div
          className="absolute inset-0 block dark:hidden"
          style={{
            backgroundImage: `linear-gradient(hsl(210, 20%, 90%, 0.7) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(210, 20%, 90%, 0.7) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(210_80%_95%_/_1),_transparent_70%)] block dark:hidden" />

        {/* REF: Dark mode background grid/glow (original) */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `linear-gradient(hsl(220, 80%, 60%, 0.05) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(220, 80%, 60%, 0.05) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(220_80%_30%_/_0.3),_transparent_70%)] hidden dark:block" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-1">
              <h1
                // REF: Added `text-gray-900`, prefixed `text-white`
                // REF: Updated gradient colors for light mode
                className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight
                           dark:text-white"
              >
                Engineering India's
                <br />
                <span
                  className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent
                             dark:from-blue-500 dark:to-blue-400"
                >
                  Skyline of Tomorrow
                </span>
              </h1>
              <div
                // REF: Updated gradient and shadow for light mode
                className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full
                             mx-auto lg:mx-0 shadow-[0_0_20px_rgba(59,130,246,0.2)]
                             dark:from-blue-500 dark:to-blue-400
                             dark:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              />
            </div>

            <p
              // REF: Added `text-gray-600`, prefixed `text-gray-400`
              className="text-lg pt-0 md:text-xl text-gray-600 leading-relaxed max-w-2xl 
                         mx-auto lg:mx-0 dark:text-gray-400"
            >
              From nation-building infrastructure and architectural excellence
              to premium interiors and environmental solutions, we deliver
              integrated excellence across India's construction landscape.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-0">
              <Link
                to="/projects"
                // REF: This primary button style works well on both light/dark
                className="group inline-flex items-center justify-center rounded-lg
                         bg-blue-600 px-8 py-4 text-base font-semibold
                         text-white shadow-lg shadow-blue-600/20
                         transition-all duration-300 
                         hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 
                         hover:scale-[1.02] hover:-translate-y-0.5"
              >
                Explore Our Portfolio
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform duration-300 
                                     group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/services/all-services"
                // REF: Refactored secondary button for light/dark
                className="group inline-flex items-center justify-center rounded-lg
                         bg-white px-8 py-4 text-base font-semibold text-blue-600
                         shadow-lg shadow-gray-900/5 ring-1 ring-inset ring-gray-200
                         transition-all duration-300 
                         hover:bg-gray-100 hover:text-blue-500 hover:shadow-xl hover:shadow-gray-900/10 hover:scale-[1.02]
                         dark:bg-gray-900 dark:text-blue-400 dark:shadow-black/20
                         dark:ring-gray-700 dark:hover:bg-gray-800 dark:hover:text-blue-300
                         dark:hover:shadow-black/30"
              >
                Our Services
                <span
                  // REF: Updated text color
                  className="ml-2 text-blue-500 transition-transform duration-300 
                               group-hover:translate-x-1 dark:text-blue-400"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Enhanced 3D Card Stack */}
          <div
            className="w-full h-[500px] flex items-center 
                          justify-center perspective-1000"
          >
            <div className="relative w-full max-w-lg h-80 group cursor-pointer">
              {/* Card 3: Premium Interiors - Bottom Layer */}
              <div
                // REF: Refactored card for light/dark
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-50
                           rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-200/80 p-8
                           backdrop-blur-sm
                           transition-all duration-700 ease-out
                           group-hover:rotate-[-12deg] group-hover:translate-x-16 
                           group-hover:translate-y-6 group-hover:shadow-2xl group-hover:shadow-gray-900/20
                           transform-gpu
                           dark:from-gray-900 dark:to-gray-800
                           dark:border-gray-700/50 dark:shadow-black/20
                           dark:group-hover:shadow-black/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-2 flex-1">
                    <h3
                      // REF: Added `text-gray-900`, prefixed `text-white`
                      className="text-xl font-bold text-gray-900 tracking-tight dark:text-white"
                    >
                      Premium Interiors
                    </h3>
                    <div
                      // REF: Updated underline color
                      className="h-0.5 w-12 bg-gradient-to-r from-blue-500/80 to-transparent rounded-full
                                 dark:from-blue-500/60"
                    />
                  </div>
                  <ServiceIcon icon={Home} />
                </div>
                <p
                  // REF: Added `text-gray-600`, prefixed `text-gray-400`
                  className="text-sm text-gray-600 leading-relaxed dark:text-gray-400"
                >
                  Italian marble installations, modular kitchen systems, and
                  bespoke furniture solutions crafted for luxury residences.
                </p>
              </div>

              {/* Card 2: Real Estate - Middle Layer */}
              <div
                // REF: Refactored card for light/dark
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-50
                           rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-200/80 p-8
                           backdrop-blur-sm
                           transition-all duration-700 ease-out delay-75
                           group-hover:rotate-[-6deg] group-hover:translate-x-8 
                           group-hover:translate-y-3 group-hover:shadow-2xl group-hover:shadow-gray-900/20
                           transform-gpu
                           dark:from-gray-900 dark:to-gray-800
                           dark:border-gray-700/50 dark:shadow-black/20
                           dark:group-hover:shadow-black/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-2 flex-1">
                    <h3
                      // REF: Added `text-gray-900`, prefixed `text-white`
                      className="text-xl font-bold text-gray-900 tracking-tight dark:text-white"
                    >
                      Building & Real Estate
                    </h3>
                    <div
                      // REF: Updated underline color
                      className="h-0.5 w-12 bg-gradient-to-r from-blue-500/80 to-transparent rounded-full
                                 dark:from-blue-500/60"
                    />
                  </div>
                  <ServiceIcon icon={Building2} />
                </div>
                <p
                  // REF: Added `text-gray-600`, prefixed `text-gray-400`
                  className="text-sm text-gray-600 leading-relaxed dark:text-gray-400"
                >
                  Residential towers, commercial complexes, IT parks, and luxury
                  apartment developments across metropolitan India.
                </p>
              </div>

              {/* Card 1: Infrastructure - Top Layer */}
              <div
                // REF: This is an accent card, styles work on both light/dark
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white
                           rounded-2xl shadow-2xl shadow-blue-700/20 p-8
                           backdrop-blur-sm
                           transition-all duration-700 ease-out delay-150
                           group-hover:rotate-0 group-hover:-translate-y-6 
                           group-hover:scale-105 group-hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.3)]
                           transform-gpu
                           before:absolute before:inset-0 before:rounded-2xl 
                           before:bg-gradient-to-br before:from-white/10 before:to-transparent
                           before:opacity-0 before:transition-opacity before:duration-700
                           group-hover:before:opacity-100"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-bold tracking-tight">
                        Core Infrastructure
                      </h3>
                      <div className="h-0.5 w-12 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </div>
                    {/* REF: The ServiceIcon component is now theme-aware */}
                    <ServiceIcon icon={Construction} />
                  </div>
                  <p className="text-sm text-white/95 leading-relaxed">
                    National highways, cable-stayed bridges, underground
                    tunnels, and large-scale infrastructure projects defining
                    India's connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
