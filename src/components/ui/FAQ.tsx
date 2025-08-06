// src/components/ui/FAQ.tsx
'use client';

const faqs = [
  {
    question: 'How does the AI suite work?',
    answer: 'It analyzes your campaigns and gives smart suggestions in real-time.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! The Starter plan is completely free with no credit card required.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4 dark:border-gray-700">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
