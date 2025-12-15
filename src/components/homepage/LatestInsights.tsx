import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Sustainable Concrete in India",
    date: "Dec 10, 2024",
    excerpt:
      "How green cement and recycled aggregates are reshaping the carbon footprint of massive infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800&auto=format&fit=crop",
    category: "Sustainability",
  },
  {
    id: 2,
    title: "Understanding RERA Compliance for New Homebuyers",
    date: "Nov 22, 2024",
    excerpt:
      "A simplified guide to what the Real Estate Regulatory Authority Act means for your investment security.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    category: "Real Estate",
  },
  {
    id: 3,
    title: "Bhairavnath Skyline Wins 'Excellence in Safety' Award",
    date: "Oct 05, 2024",
    excerpt:
      "We are proud to be recognized by the National Safety Council for achieving 2 Million Safe Man-hours.",
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop",
    category: "Company News",
  },
];

export default function LatestInsights() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-end justify-between gap-4 md:flex-row mb-12">
          <div className="w-full md:w-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Latest Insights
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Industry trends, company updates, and expert opinions.
            </p>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            View All News{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl dark:bg-gray-900"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-900 backdrop-blur-md">
                  {article.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </div>
                <h3 className="mt-3 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {article.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-gray-600 flex-1 dark:text-gray-400">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center font-semibold text-blue-600 text-sm dark:text-blue-400">
                  Read Article
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
