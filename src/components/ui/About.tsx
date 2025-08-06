import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            About Our SaaS
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            We help startups and businesses launch fast with a clean, scalable, and secure infrastructure. 
            Our tools are built for simplicity, performance, and growth. Join hundreds of teams accelerating their workflows with us.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Lightning-fast setup</li>
            <li>✅ Enterprise-grade security</li>
            <li>✅ Designed for teams of any size</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/about.png" // 💡 Replace this with your actual image path
            alt="About us"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
