// src/components/ui/Pricing.tsx
'use client';

import React from 'react';

const plans = [
  {
    title: 'Basic',
    price: '$19/mo',
    features: ['1 Project', 'Email Support', 'Basic Analytics'],
  },
  {
    title: 'Pro',
    price: '$49/mo',
    features: ['10 Projects', 'Priority Support', 'Advanced Analytics'],
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Projects', 'Dedicated Manager', 'Custom Analytics'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 backdrop-blur-sm bg-white/60 dark:bg-white/5 shadow-lg transition-all hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-700 dark:text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-80">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
