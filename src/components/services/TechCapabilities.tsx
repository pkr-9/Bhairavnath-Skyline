import { Scan, Database, Wifi, Plane } from "lucide-react";

const techs = [
  {
    title: "BIM Modeling (LOD 500)",
    desc: "We use Building Information Modeling for collision detection and 4D scheduling before breaking ground.",
    icon: Database,
  },
  {
    title: "Drone Surveying",
    desc: "LiDAR-equipped drones for topographical mapping and daily progress monitoring.",
    icon: Plane,
  },
  {
    title: "IoT Sensors",
    desc: "Real-time structural health monitoring (SHM) for bridges and high-rise structures.",
    icon: Wifi,
  },
  {
    title: "3D Laser Scanning",
    desc: "Precision As-Built documentation and quality verification for interiors.",
    icon: Scan,
  },
];

export default function TechCapabilities() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Powered by Technology
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We blend traditional engineering wisdom with cutting-edge digital
            tools to reduce costs and timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all dark:bg-gray-800"
            >
              <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 dark:bg-blue-900/20 dark:text-blue-400">
                <tech.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {tech.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
