'use client';

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Features from "@/components/ui/Features";
import CTA from "@/components/ui/CTA";
import Pricing from "@/components/ui/Pricing";
import Testimonials from "@/components/ui/Testimonials";
import FAQ from "@/components/ui/FAQ";
import Footer from "@/components/ui/Footer";
import ThemeToggle from "@/components/ui/ThemeToggle";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />

      <FadeInWhenVisible delay={0.1}>
        <Hero />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <Features />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3}>
        <CTA />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <Pricing />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.5}>
        <Testimonials />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.6}>
        <FAQ />
      </FadeInWhenVisible>

      <Footer />

      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </main>
  );
}
