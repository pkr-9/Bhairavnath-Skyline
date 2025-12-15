import { useState, useEffect, useRef } from "react";

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { id: 1, value: 30, suffix: "+", label: "Years of Excellence" },
  { id: 2, value: 50, suffix: "+", label: "Projects Completed" },
  { id: 3, value: 100, suffix: "%", label: "On-Time Delivery" },
  { id: 4, value: 2500, suffix: "+", label: "Workforce Strength" },
];

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-blue-600 py-16 dark:bg-blue-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <CounterItem key={stat.id} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterItem({
  stat,
  isVisible,
}: {
  stat: StatItem;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000; // 2 seconds animation
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {count}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-blue-100 uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}
