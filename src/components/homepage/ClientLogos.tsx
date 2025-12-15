import { Building2, Landmark, Briefcase, ShieldCheck } from "lucide-react";

const clients = [
  { name: "National Highways Authority", type: "Government", icon: Landmark },
  { name: "Public Works Dept (PWD)", type: "Government", icon: Building2 },
  { name: "Metro Rail Corp.", type: "Infrastructure", icon: Briefcase },
  { name: "City Municipal Corp.", type: "Urban Dev", icon: Landmark },
  { name: "Major Tech Giants", type: "Private Sector", icon: Building2 },
  { name: "Defense Housing", type: "Government", icon: ShieldCheck },
];

export default function ClientLogos() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8">
          Trusted by Government Bodies & Industry Leaders
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center gap-3 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
                <client.icon className="h-8 w-8 text-blue-600 dark:text-blue-500" />
              </div>
              <span className="text-xs font-bold text-gray-900 dark:text-white max-w-[100px] leading-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
