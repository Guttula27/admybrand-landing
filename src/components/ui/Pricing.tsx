'use client';

export default function Pricing() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Simple & Transparent Pricing
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Pricing Card */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4">Plan {i + 1}</h3>
            <p className="text-4xl font-bold mb-4">${(i + 1) * 29}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Includes great features for growing businesses.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
