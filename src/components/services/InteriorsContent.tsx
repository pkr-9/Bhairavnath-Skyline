// src/components/services/InteriorsContent.tsx

// import React from "react";
import {
  Palette, // For Hard Finishes
  PaintRoller, // For Soft Finishes
  Smartphone, // For Smart Solutions
  CookingPot, // For Bespoke Furniture
} from "lucide-react";

// Define the categories
const categories = [
  {
    icon: Palette,
    title: "Hard Finishes",
    imageUrl: "https://source.unsplash.com/random/800x600?marble-texture",
    items: [
      "Italian marble, anti-skid vitrified",
      "Gypsum, acoustic, & LED-integrated False Ceilings",
      "Plastering & Waterproofing",
    ],
  },
  {
    icon: PaintRoller,
    title: "Soft Finishes",
    imageUrl: "https://source.unsplash.com/random/800x600?wooden-floor",
    items: [
      "Wooden Flooring (Herringbone, chevron patterns)",
      "3D, metallic, & eco-friendly Wallpaper",
      "Texture painting & murals",
    ],
  },
  {
    icon: Smartphone,
    title: "Glass & Smart Solutions",
    imageUrl: "https://source.unsplash.com/random/800x600?smart-home",
    items: [
      "Toughened Glass (Sliding doors, shower cubicles)",
      "Privacy & solar control Window Films",
      "Motorized & blackout Blinds/Curtains",
    ],
  },
  {
    icon: CookingPot,
    title: "Bespoke Furniture",
    imageUrl: "https://source.unsplash.com/random/800x600?modern-kitchen",
    items: [
      "Modular Kitchens (Smart storage, quartz tops)",
      "Office Carpentry & Ergonomic workstations",
    ],
  },
];

export default function InteriorsContent() {
  return (
    // REF: Added `bg-white`, prefixed `dark:bg-gray-950`
    <section className="bg-white py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Aesthetic Mastery
          </h2>
          <p
            // REF: Added `text-gray-600`, prefixed `text-gray-400`
            className="mt-4 text-lg text-gray-600 leading-8 dark:text-gray-400"
          >
            From foundations to finishes, our turnkey interior solutions
            transform empty shells into iconic, ready-to-use spaces.
          </p>
        </div>

        {/* Visual Grid */}
        <div
          className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 
                     md:grid-cols-2 lg:max-w-none"
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              // REF: Added `border-gray-200`, prefixed `border-gray-800`
              className="relative flex flex-col justify-end rounded-2xl 
                         border border-gray-200 overflow-hidden p-8
                         min-h-[450px]
                         dark:border-gray-800"
            >
              {/* Background Image */}
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="absolute inset-0 h-full w-full object-cover 
                           transition-all duration-500 group-hover:scale-105"
              />
              {/* REF: Overlay works on both modes */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                {/* REF: Icon color works on dark overlay */}
                <cat.icon className="h-10 w-10 text-blue-400" />
                {/* REF: Text color works on dark overlay */}
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      // REF: Text color works on dark overlay
                      className="flex text-sm text-gray-300"
                      dangerouslySetInnerHTML={{ __html: `✓ ${item}` }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
