// src/components/about/LeadershipTeam.tsx

// import React from "react";

// Team member data - you would replace this
const team = [
  {
    name: "Prakash Sharma",
    role: "Founder & CEO",
    imageUrl: "https://picsum.photos/800/600?5",
    bio: 'Prakash drives the company\'s "nation-building" vision with 30+ years of industry experience.',
  },
  {
    name: "Anita Desai",
    role: "Chief Engineer (Infrastructure)",
    imageUrl: "https://picsum.photos/800/600?6",
    bio: "Anita leads our most complex projects, specializing in bridge and tunnel engineering.",
  },
  {
    name: "Rohan Gupta",
    role: "Head of Real Estate",
    imageUrl: "https://picsum.photos/800/600?7",
    bio: "Rohan oversees all residential and commercial developments, focusing on sustainable design.",
  },
];

export default function LeadershipTeam() {
  return (
    // REF: Added `bg-white`, prefixed `bg-gray-900` with `dark:`
    <section className="bg-white py-20 md:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            // REF: Added `text-gray-900`, prefixed `text-white` with `dark:`
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            Meet Our Leadership
          </h2>
          <p
            // REF: Added `text-gray-600`, prefixed `text-gray-400` with `dark:`
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400"
          >
            Our team's expertise and dedication are the cornerstones of our
            success.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-none grid-cols-1 gap-8 
                     lg:grid-cols-3"
        >
          {team.map((person) => (
            <li
              key={person.name}
              // REF: Added `bg-gray-50` and `border-gray-200`
              // REF: Prefixed `bg-gray-950` and `border-gray-800` with `dark:`
              className="flex flex-col rounded-2xl 
                         bg-gray-50 p-8
                         border border-gray-200
                         dark:bg-gray-950 dark:border-gray-800"
            >
              <img
                className="mx-auto h-48 w-48 rounded-full object-cover"
                src={person.imageUrl}
                alt={person.name}
              />
              <h3
                // REF: Added `text-gray-900`, prefixed `text-white` with `dark:`
                className="mt-6 text-xl font-semibold leading-7 tracking-tight 
                           text-gray-900 text-center dark:text-white"
              >
                {person.name}
              </h3>
              <p
                // REF: Changed `text-blue-400` to `text-blue-600` for light mode
                className="text-sm leading-6 text-blue-600 dark:text-blue-400 text-center"
              >
                {person.role}
              </p>
              <p
                // REF: Added `text-gray-700`, prefixed `text-gray-400` with `dark:`
                className="mt-4 text-sm text-gray-700 leading-relaxed text-center flex-grow dark:text-gray-400"
              >
                {person.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
