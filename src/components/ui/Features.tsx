'use client';

import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Powerful Features to Scale Your Business
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <FadeInWhenVisible key={i} delay={i * 0.1}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}
