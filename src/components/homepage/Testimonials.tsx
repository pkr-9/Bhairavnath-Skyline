import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Bhairavnath Skyline executed the Metro Rail bridge project with remarkable precision. Their ability to manage traffic flow while handling heavy lifting over the navigation channel was impressive.",
    author: "Rajesh Verma",
    role: "Chief Engineer, Metro Rail Corp.",
    location: "Mumbai",
  },
  {
    text: "We hired them for our corporate HQ fit-out. The 'Design-to-Delivery' approach meant we didn't have to worry about vendors. The Italian marble finishing is flawless.",
    author: "Priya Deshmukh",
    role: "CEO, FinTech Solutions",
    location: "Pune",
  },
  {
    text: "Reliable partners for government tenders. They adhere strictly to safety norms and paperwork compliance, which makes the auditing process very smooth for us.",
    author: "Amitabh Singh",
    role: "Superintending Engineer, PWD",
    location: "Nashik",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-600 py-20 dark:bg-blue-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Words from Our Partners
          </h2>
          <p className="mt-4 text-blue-100">
            Building relationships that last as long as our structures.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 dark:bg-gray-900"
            >
              <Quote className="absolute -top-4 left-8 h-8 w-8 bg-blue-500 text-white rounded-full p-1.5" />
              <p className="mt-4 text-gray-600 dark:text-gray-300 italic leading-relaxed">
                "{item.text}"
              </p>
              <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-800">
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {item.author}
                </h4>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.role} • {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
