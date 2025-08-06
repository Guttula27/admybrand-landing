// src/components/ui/CTA.tsx
'use client';

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to boost your brand?</h2>
      <p className="mb-6">Sign up today and experience the power of AI-driven marketing.</p>
      <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        Get Started
      </a>
    </section>
  );
}
