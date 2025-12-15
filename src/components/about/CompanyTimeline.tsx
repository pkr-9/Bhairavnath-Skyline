// src/components/about/CompanyTimeline.tsx

import React, { useEffect, useRef, useState } from "react";
import { Flag, Building2, Award, Globe, TrendingUp } from "lucide-react";

// 1. Define Milestone Data
const milestones = [
  {
    year: "1995",
    title: "The Foundation",
    description:
      "Bhairavnath Skyline was founded with a single vision: to deliver quality residential construction in Pune. We started with small-scale housing projects.",
    icon: Flag,
  },
  {
    year: "2005",
    title: "First Government Tender",
    description:
      "A major milestone: we secured our first government contract for road infrastructure, marking our entry into the public sector.",
    icon: Building2,
  },
  {
    year: "2012",
    title: "ISO Certification & Expansion",
    description:
      "Achieved ISO 9001:2015 certification, validating our commitment to quality. Expanded operations to include industrial zones and warehousing.",
    icon: Award,
  },
  {
    year: "2018",
    title: "Entering Mega Projects",
    description:
      "Awarded the contract for a major cable-stayed bridge, cementing our reputation in complex heavy engineering.",
    icon: TrendingUp,
  },
  {
    year: "2024",
    title: "Pan-India Presence",
    description:
      "With projects across Maharashtra, Goa, and Karnataka, we have evolved into a multi-state infrastructure conglomerate.",
    icon: Globe,
  },
];

interface TimelineItemProps {
  data: (typeof milestones)[0];
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  // Scroll Animation Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of item is visible
    );

    if (itemRef.current) observer.observe(itemRef.current);

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`relative mb-12 flex w-full items-center justify-between md:mb-24 ${
        isEven ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* 1. Empty Space (for desktop layout balance) */}
      <div className="hidden w-5/12 md:block" />

      {/* 2. Central Node/Dot */}
      <div className="absolute left-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 shadow-lg ring-4 ring-white dark:ring-gray-900 md:left-1/2">
        <data.icon className="h-5 w-5 text-white" />
      </div>

      {/* 3. Content Card */}
      <div
        className={`w-full pl-12 md:w-5/12 md:pl-0 ${
          // Animation classes
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-out`}
      >
        <div className="rounded-2xl bg-gray-50 p-6 border border-gray-200 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-black/20">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            {data.year}
          </span>
          <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
            {data.title}
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed dark:text-gray-400">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function CompanyTimeline() {
  return (
    <section className="bg-white py-20 md:py-32 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500">
            Our History
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Building a Legacy Since 1995
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From humble beginnings to shaping national infrastructure, walk
            through our journey of growth and excellence.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Center Line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 md:left-1/2" />

          {/* Render Timeline Items */}
          {milestones.map((milestone, index) => (
            <TimelineItem key={index} data={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
