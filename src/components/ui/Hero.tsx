// src/components/ui/Hero.tsx
export default function Hero() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-16 py-20 text-center flex flex-col items-center gap-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Transform your workflow with <span className="text-primary">AI-powered</span> tools
      </h1>
      <p className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        The ADmyBRAND AI Suite helps you automate marketing, streamline analytics, and scale like never before.
      </p>
      <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-600 transition">
        Get Started
      </button>
    </section>
  );
}
