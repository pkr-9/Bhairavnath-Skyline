// src/pages/TendersPage.tsx

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FileText, Download, Building2, Briefcase } from "lucide-react";
import ServicePageHeader from "../components/services/ServicePageHeader";
import CallToAction from "../components/homepage/CallToAction";

// --- Mock Data for Active Tenders ---
const activeTenders = [
  {
    id: "TND-2025-001",
    title: "Supply of High-Grade Cement (OPC 53)",
    location: "Pune, Maharashtra",
    type: "Material Supply",
    closingDate: "2025-12-31",
    status: "Open",
  },
  {
    id: "TND-2025-004",
    title: "Electrical Sub-Contract for IT Park",
    location: "Pune, Giga Space",
    type: "Labor & Installation",
    closingDate: "2025-11-15",
    status: "Open",
  },
  {
    id: "TND-2025-009",
    title: "Earth Movers & Heavy Machinery Rental",
    location: "Mumbai-Pune Expressway",
    type: "Machinery",
    closingDate: "2025-10-30",
    status: "Closing Soon",
  },
];

// --- Sub-Component: Vendor Registration Form ---
const VendorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Vendor Application:", data);
    alert("Vendor Application Submitted!");
  };

  return (
    <div className="rounded-2xl bg-gray-50 p-8 border border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        New Vendor Registration
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* Company Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-900 dark:text-white">
            Company Name
          </label>
          <input
            {...register("companyName", { required: true })}
            type="text"
            className="mt-2 w-full rounded-lg border-0 bg-white p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm">
              Company Name is required
            </span>
          )}
        </div>

        {/* GST Number */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white">
            GST Number
          </label>
          <input
            {...register("gst", { required: true })}
            type="text"
            className="mt-2 w-full rounded-lg border-0 bg-white p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
          />
        </div>

        {/* Contact Person */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white">
            Contact Person
          </label>
          <input
            {...register("contactPerson", { required: true })}
            type="text"
            className="mt-2 w-full rounded-lg border-0 bg-white p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white">
            Email Address
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="mt-2 w-full rounded-lg border-0 bg-white p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white">
            Phone Number
          </label>
          <input
            {...register("phone", { required: true })}
            type="tel"
            className="mt-2 w-full rounded-lg border-0 bg-white p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
          />
        </div>

        {/* Supply Type */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-900 dark:text-white">
            Type of Supply / Service
          </label>
          <select
            {...register("type", { required: true })}
            className="mt-2 w-full rounded-lg border-0 bg-white p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
          >
            <option value="">Select an option...</option>
            <option value="raw-material">
              Raw Material (Cement, Steel, etc.)
            </option>
            <option value="labor">Labor Contractor</option>
            <option value="machinery">Heavy Machinery Rental</option>
            <option value="consultancy">Consultancy / Architecture</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

// --- Main Page Component ---
export default function TendersPage() {
  const [activeTab, setActiveTab] = useState<"tenders" | "register">("tenders");

  return (
    <>
      <ServicePageHeader
        category="Vendor Zone"
        title="Tenders & Procurement"
        description="Partner with Bhairavnath Skyline. Access active tenders or register as a verified vendor for our upcoming projects."
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="bg-white py-20 dark:bg-gray-950 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
              <button
                onClick={() => setActiveTab("tenders")}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === "tenders"
                    ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <FileText className="h-4 w-4" />
                Active Tenders
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-all ${
                  activeTab === "register"
                    ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                Vendor Registration
              </button>
            </div>
          </div>

          {/* CONTENT: Active Tenders */}
          {activeTab === "tenders" && (
            <div className="animate-fade-in-up">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Open Tenders
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Last Updated: {new Date().toLocaleDateString()}
                </span>
              </div>

              {/* Tenders Table */}
              <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Tender Ref
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Description
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Closing Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                    {activeTenders.map((tender) => (
                      <tr
                        key={tender.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {tender.id}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-bold text-gray-900 dark:text-white">
                            {tender.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                            <Building2 className="h-3 w-3" /> {tender.location}
                            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                            {tender.type}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium 
                              ${
                                tender.status === "Closing Soon"
                                  ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                  : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              }`}
                          >
                            {tender.closingDate}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400">
                            <Download className="h-4 w-4" />
                            PDF
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CONTENT: Vendor Registration */}
          {activeTab === "register" && (
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <VendorForm />
            </div>
          )}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
