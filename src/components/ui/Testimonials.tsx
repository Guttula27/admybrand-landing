// src/components/ui/Testimonials.tsx
'use client';

const testimonials = [
  {
    name: 'Anjali Mehta',
    quote: 'ADmyBRAND helped us grow 3x in 2 months with automated campaigns!',
  },
  {
    name: 'Ravi Sharma',
    quote: 'The AI recommendations saved us hours every week.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
        <div className="space-y-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 border rounded-lg dark:border-gray-700">
              <p className="italic text-lg">“{t.quote}”</p>
              <p className="mt-4 font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
