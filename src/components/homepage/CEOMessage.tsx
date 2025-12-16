import { Quote } from "lucide-react";

export default function CEOMessage() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="relative w-full lg:w-1/2">
            <div className="absolute top-4 left-4 h-full w-full rounded-2xl border-2 border-blue-600/30" />
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
              alt="CEO"
              className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <Quote className="h-12 w-12 text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
              "We don't just pour concrete; we pour our heart into building the
              nation."
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
              <p>
                Since 1995, Bhairavnath Skyline has operated with a simple
                philosophy:
                <strong> Speed, Quality, and Integrity.</strong> Whether it's a
                rural road connecting farmers to markets or a high-rise IT park,
                our commitment to engineering excellence remains unchanged.
              </p>
              <p>
                As we step into a new era of infrastructure with smart cities
                and sustainable tech, we promise to keep innovation at our core
                while staying true to our values.
              </p>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                Prakash Sharma
              </div>
              <div className="text-blue-600 font-medium">
                Founder & Chairman
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
