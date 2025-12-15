import ServicePageHeader from "../components/services/ServicePageHeader";
import CallToAction from "../components/homepage/CallToAction";
import { ShieldCheck, Leaf, HardHat, Ruler } from "lucide-react";

export default function SafetyQualityPage() {
  return (
    <>
      <ServicePageHeader
        category="Our Standards"
        title="Safety & Quality Policy"
        description="We don't just build; we adhere to the strictest standards of safety (HSE), quality control, and environmental responsibility."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          {/* 1. The Quality Promise */}
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Zero Compromise on Quality
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Our "Design-to-Delivery" model ensures that every stage, from soil
              testing to final finishing, meets rigourous ISO benchmarks.
            </p>
          </div>

          {/* 2. Four Pillars of Compliance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Health & Safety */}
            <div className="flex gap-6 p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30">
              <div className="flex-none">
                <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                  <HardHat className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Health & Safety (HSE)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  We maintain a "Zero Accident" policy across all sites. Our
                  workforce is trained in rigorous safety protocols, ensuring
                  protection for both people and property.
                </p>
              </div>
            </div>

            {/* Environmental Responsibility */}
            <div className="flex gap-6 p-6 rounded-2xl bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/30">
              <div className="flex-none">
                <div className="h-12 w-12 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-600/20">
                  <Leaf className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Green Norms Adherence
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Committed to sustainability, we strictly follow Green Norms
                  for waste management, dust control, and eco-friendly material
                  sourcing.
                </p>
              </div>
            </div>

            {/* RERA & Legal */}
            <div className="flex gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="flex-none">
                <div className="h-12 w-12 rounded-xl bg-gray-700 flex items-center justify-center text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  RERA & Govt. Compliance
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Total transparency in all dealings. We are fully RERA
                  Compliant and proficient in securing all necessary government
                  approvals.
                </p>
              </div>
            </div>

            {/* Precision Engineering */}
            <div className="flex gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="flex-none">
                <div className="h-12 w-12 rounded-xl bg-gray-700 flex items-center justify-center text-white">
                  <Ruler className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  ISO Certified Processes
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Our quality management systems are ISO certified, guaranteeing
                  consistency from EPC contracts to luxury fit-outs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
