// src/components/ui/Features.tsx
export default function Features() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-16 py-20 bg-light dark:bg-dark">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Powerful Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature Card Examples */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">AI Copy Generator</h3>
          <p className="text-gray-600 dark:text-gray-300">Write ads, blogs, and captions in seconds.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Marketing Automation</h3>
          <p className="text-gray-600 dark:text-gray-300">Automate multi-channel campaigns effortlessly.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">Track performance with beautiful dashboards.</p>
        </div>
      </div>
    </section>
  );
}
