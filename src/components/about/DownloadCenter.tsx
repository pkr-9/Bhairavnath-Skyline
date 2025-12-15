import { FileText, Download, ShieldCheck, Building2 } from "lucide-react";

const resources = [
  {
    title: "Corporate Profile 2025",
    description:
      "Overview of Bhairavnath Skyline's vision, mission, and key projects.",
    size: "4.2 MB",
    icon: Building2,
  },
  {
    title: "Safety (HSE) Manual",
    description:
      "Detailed breakdown of our safety protocols and Zero-Accident policy.",
    size: "2.8 MB",
    icon: ShieldCheck,
  },
  {
    title: "ISO 9001:2015 Certificate",
    description:
      "Official certification document for our Quality Management Systems.",
    size: "1.1 MB",
    icon: FileText,
  },
  {
    title: "Vendor Registration Guide",
    description:
      "Instructions and requirements for new suppliers and sub-contractors.",
    size: "1.5 MB",
    icon: FileText,
  },
];

export default function DownloadCenter() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Resource Center
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Download our latest brochures, certifications, and compliance
            documents.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((res) => (
            <div
              key={res.title}
              className="group flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue-500/50 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-blue-400/50"
            >
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <res.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {res.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {res.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                <span className="text-xs font-medium text-gray-400">
                  PDF • {res.size}
                </span>
                <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                  Download <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
