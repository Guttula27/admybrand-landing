// src/components/ui/FAQ.tsx
export default function FAQ() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-16 py-20 text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {[
          {
            q: "Is there a free trial?",
            a: "Yes! You can try all features free for 14 days. No credit card required.",
          },
          {
            q: "Can I cancel anytime?",
            a: "Absolutely. You’re free to cancel or switch plans at any time.",
          },
          {
            q: "Does it support teams?",
            a: "Yes, the Enterprise plan supports multiple users and team collaboration.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
