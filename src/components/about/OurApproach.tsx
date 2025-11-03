// src/components/about/OurApproach.tsx

import React from "react";
import { Gavel, Network, ShieldCheck } from "lucide-react";

// REF: Refactored InfoItem for light/dark mode
interface InfoItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <li className="flex gap-4">
    <div className="flex-none pt-1">
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

export default function OurApproach() {
  return (
    // REF: Changed `bg-gray-950` to `bg-gray-50` for light mode
    <section className="bg-gray-50 py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Left Column: Text */}
          <div className="max-w-xl">
            <h2
              // REF: Updated text color
              className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500"
            >
              Our Methodology
            </h2>
            <p
              // REF: Added `text-gray-900`, prefixed `text-white`
              className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
            >
              Design-to-Delivery Excellence
            </p>
            <p
              // REF: Added `text-gray-600`, prefixed `text-gray-400`
              className="mt-6 text-lg text-gray-600 leading-8 dark:text-gray-400"
            >
              We specialize in navigating the complexities of modern
              construction. Our expertise in large-scale contracts and
              regulatory landscapes ensures your project is a success.
            </p>
          </div>

          {/* Right Column: List */}
          <ul role="list" className="space-y-8">
            <InfoItem
              icon={ShieldCheck}
              title="EPC Contracts"
              description="Full ownership from Engineering, Procurement, and 
                           Construction (EPC) for seamless project delivery."
            />
            <InfoItem
              icon={Network}
              title="JVs & Public-Private Partnerships"
              description="Experienced in forming Joint Ventures (JVs) and PPPs 
                           to deliver critical public infrastructure."
            />
            <InfoItem
              icon={Gavel}
              title="Government Tenders & Approvals"
              description="Proficient in managing complex government tenders 
                           and securing all necessary approvals."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
