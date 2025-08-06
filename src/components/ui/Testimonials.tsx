// src/components/ui/Testimonials.tsx
export default function Testimonials() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-16 py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">What our users say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Ananya Sharma",
            text: "ADmyBRAND AI Suite completely transformed how we manage marketing. It's fast, smart, and scalable.",
          },
          {
            name: "Rahul Verma",
            text: "We saved hundreds of hours with its automation. This is the future of advertising.",
          },
          {
            name: "Meena Kapoor",
            text: "Intuitive UI, responsive support, and AI tools that really work. Highly recommended.",
          },
        ].map((testimonial, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition text-left"
          >
            <p className="text-lg mb-4">“{testimonial.text}”</p>
            <p className="font-semibold text-gray-800 dark:text-gray-100">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
