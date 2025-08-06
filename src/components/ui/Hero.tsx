import FadeInWhenVisible from "@/components/FadeInWhenVisible"; // Import this

export default function Hero() {
  return (
    <FadeInWhenVisible>
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
        {/* ... existing Hero content ... */}
      </section>
    </FadeInWhenVisible>
  );
}
