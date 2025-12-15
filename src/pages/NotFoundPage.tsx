import { Link } from "react-router-dom";
import { Construction, Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-gray-50 px-6 text-center dark:bg-gray-950">
      {/* Icon Graphic */}
      <div className="relative mb-8">
        <div className="absolute inset-0 animate-ping rounded-full bg-blue-100 opacity-75 dark:bg-blue-900/20" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <Construction className="h-10 w-10 text-blue-600 dark:text-blue-500" />
        </div>
      </div>

      <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800">
        404
      </h1>

      <div className="relative -mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Under Construction
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-gray-600 dark:text-gray-400">
          The page you are looking for has been moved, deleted, or is currently
          under maintenance.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800"
        >
          Contact Support <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
        </Link>
      </div>
    </section>
  );
}
