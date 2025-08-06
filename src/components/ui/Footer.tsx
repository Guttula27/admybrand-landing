// src/components/ui/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-2">ADmyBRAND AI</h3>
          <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="mailto:support@admybrand.ai" className="hover:text-white">support@admybrand.ai</a></li>
            <li>Phone: <a href="tel:+919876543210" className="hover:text-white">+91 9876543210</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
