// src/components/homepage/TrustAndCompliance.tsx

import { Award, ShieldCheck, Gavel, Network } from "lucide-react";
import React from "react";

// Reusable list item for this section
type InfoItemProps = {
  icon:
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | React.ForwardRefExoticComponent<
        React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
      >;
  title: string;
  description: React.ReactNode;
};

// REF: Refactored InfoItem for light/dark mode
const InfoItem = ({ icon: Icon, title, description }: InfoItemProps) => (
  <li className="flex gap-6">
    <div
      // REF: Added light mode styles, prefixed dark mode styles
      className="flex h-12 w-12 flex-none items-center justify-center rounded-lg 
                    bg-gray-100 ring-1 ring-gray-200
                    dark:bg-gray-800 dark:ring-gray-700"
    >
      <Icon
        // REF: Updated icon color
        className="h-6 w-6 text-blue-600 dark:text-blue-400"
        aria-hidden="true"
      />
    </div>
    <div className="flex-1">
      <h3
        // REF: Added `text-gray-900`, prefixed `text-white`
        className="text-lg font-bold text-gray-900 dark:text-white"
      >
        {title}
      </h3>
      <p
        // REF: Added `text-gray-600`, prefixed `text-gray-400`
        className="mt-2 text-sm text-gray-600 leading-relaxed dark:text-gray-400"
      >
        {description}
      </p>
    </div>
  </li>
);

export default function TrustAndCompliance() {
  return (
    // REF: Added `bg-white`, prefixed `dark:bg-gray-900`
    <section className="bg-white py-20 md:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Column 1: Execution Excellence */}
          <div>
            <h2
              // REF: Updated text color
              className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500"
            >
              Reliable Delivery
            </h2>
            <p
              // REF: Added `text-gray-900`, prefixed `text-white`
              className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
            >
              Execution & Excellence
            </p>
            <p
              // REF: Added `text-gray-600`, prefixed `text-gray-400`
              className="mt-6 text-lg text-gray-600 leading-8 dark:text-gray-400"
            >
              We don't just build; we navigate complex partnerships and
              regulations to ensure every project is delivered to the highest
              standard, fully compliant.
            </p>
            <ul role="list" className="mt-10 space-y-8">
              <InfoItem
                icon={Gavel}
                title="Government Approvals"
                description="Our team is proficient in managing all necessary 
                             government approvals and clearances, ensuring a smooth 
                             project lifecycle."
              />
              <InfoItem
                icon={Network}
                title="JVs & PPPs"
                description="We have extensive experience in Joint Ventures and 
                             Public-Private Partnerships (JVs/PPPs) to deliver 
                             large-scale public infrastructure."
              />
              <InfoItem
                icon={ShieldCheck}
                title="EPC Contracts"
                description="Specializing in end-to-end Design-to-Delivery 
                             (EPC Contracts), we take full ownership of 
                             your project's success."
              />
            </ul>
          </div>

          {/* Column 2: Image & Certifications */}
          <div className="flex flex-col items-start">
            {/* You can replace this image with one of your team or a certificate collage */}
            <img
              src="https://picsum.photos/800/600?4"
              alt="Compliance"
              // REF: Added `border-gray-200`, prefixed `border-gray-800`
              className="w-full rounded-2xl object-cover shadow-xl shadow-black/10 
                         border border-gray-200
                         dark:shadow-black/30 dark:border-gray-800"
            />
            <div className="mt-10">
              <h3
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Our Certifications & Compliance
              </h3>
              <p
                // REF: Added `text-gray-600`, prefixed `text-gray-400`
                className="mt-4 text-gray-600 dark:text-gray-400"
              >
                We adhere to the highest industry standards, ensuring every
                project meets rigorous benchmarks for quality, safety, and
                environmental responsibility.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "ISO Certified",
                  "RERA Compliant",
                  "PMAY Approved",
                  "Green Norms",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Award
                      // REF: Updated icon color
                      className="h-5 w-5 flex-none text-blue-600 dark:text-blue-500"
                    />
                    <span
                      // REF: Added `text-gray-700`, prefixed `text-gray-300`
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
