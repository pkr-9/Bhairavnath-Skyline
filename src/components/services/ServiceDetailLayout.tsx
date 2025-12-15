// src/components/services/ServiceDetailLayout.tsx
import React, { useState } from "react";
import { serviceDetails } from "../../data/serviceDetails";
import ServicePageHeader from "./ServicePageHeader";
import CallToAction from "../homepage/CallToAction";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  serviceId: string;
  headerTitle: string;
  headerDesc: string;
  headerImage: string;
  children?: React.ReactNode; // For keeping the specific "Content" components we already built
}

export default function ServiceDetailLayout({
  serviceId,
  headerTitle,
  headerDesc,
  headerImage,
  children,
}: Props) {
  const data = serviceDetails[serviceId];
  const [activeTab, setActiveTab] = useState<"overview" | "process" | "specs">(
    "overview"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) return null;

  return (
    <>
      <ServicePageHeader
        category="Our Services"
        title={headerTitle}
        description={headerDesc}
        backgroundImage={headerImage}
      />

      {/* 1. Stats Bar - High Level Impact */}
      <section className="bg-blue-600 py-10 dark:bg-blue-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-white">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="text-sm text-blue-100 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Main Content Area with Tabs */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === "overview"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              Overview & Features
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === "process"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              Our Process
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === "specs"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              Technical Specs
            </button>
          </div>

          {/* TAB CONTENT: Overview */}
          {activeTab === "overview" && (
            <div className="animate-fade-in-up">
              {/* Render the specific content passed as children (the existing content components) */}
              <div className="mb-16">{children}</div>

              {/* Enhanced Features Grid */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Key Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-gray-50 border border-gray-100 dark:bg-gray-900 dark:border-gray-800 hover:shadow-lg transition-all"
                  >
                    <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 dark:bg-blue-900/30 dark:text-blue-400">
                      <feat.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: Process */}
          {activeTab === "process" && (
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <div className="space-y-8">
                {data.processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {/* Vertical Line */}
                    {idx !== data.processSteps.length - 1 && (
                      <div className="absolute left-[27px] top-12 bottom-[-32px] w-0.5 bg-gray-200 dark:bg-gray-800" />
                    )}

                    <div className="flex-none">
                      <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white dark:border-gray-950">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: Tech Specs */}
          {activeTab === "specs" && (
            <div className="animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.techSpecs.map((group, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-2xl p-6 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  >
                    <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      {group.category}
                    </h4>
                    <ul className="space-y-3">
                      {group.specs.map((spec, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Common Questions
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-900 dark:text-white"
                >
                  {faq.question}
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-gray-700 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
