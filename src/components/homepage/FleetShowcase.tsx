import { Truck, Hammer, Anchor, Settings } from "lucide-react";

const fleet = [
  {
    name: "Heavy Excavators",
    count: "40+",
    icon: Hammer,
    desc: "CAT & Komatsu 20T-50T units",
  },
  {
    name: "Concrete Pavers",
    count: "12",
    icon: Truck,
    desc: "Wirtgen Slipform Pavers",
  },
  {
    name: "Tower Cranes",
    count: "15",
    icon: Anchor,
    desc: "Potain High-Rise Cranes",
  },
  {
    name: "Batching Plants",
    count: "08",
    icon: Settings,
    desc: "Schwing Stetter (60 CP)",
  },
];

export default function FleetShowcase() {
  return (
    <section className="bg-white py-20 text-black border-y border-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold">Our Machinery Fleet</h2>
            <p className="mt-2 text-gray-700 max-w-md">
              Owned assets ensuring zero-delay execution.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
            Download Equipment List
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-4xl font-bold mb-1">{item.count}</div>
              <h3 className="text-lg font-semibold text-gray-600">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
