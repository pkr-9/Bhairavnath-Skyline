// src/components/ui/FAQAccordion.tsx

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are your residential projects RERA registered?",
    answer:
      "Yes, all our residential and commercial projects are fully RERA compliant. You can find the specific RERA registration number on each project's detail page.",
  },
  {
    question: "Do you undertake small private construction contracts?",
    answer:
      "Our primary focus is on large-scale infrastructure, commercial hubs, and townships. However, for bespoke luxury interiors, we do accept private commissions.",
  },
  {
    question: "How can I apply for a vendor partnership?",
    answer:
      "You can apply through our 'Tenders & Vendors' page. Please have your GST number and company portfolio ready for upload.",
  },
  {
    question: "What safety standards do you follow?",
    answer:
      "We strictly adhere to ISO 45001:2018 for Occupational Health & Safety and maintain a Zero-Accident policy across all sites.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
