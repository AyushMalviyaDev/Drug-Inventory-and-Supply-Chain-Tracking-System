import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo + About */}
          <div>
            <h2 className="text-xl font-bold text-indigo-600">
              PharmaLink
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Smart hospital inventory management system for tracking drugs,
              stock, and expiry in real-time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-black mb-3">Product</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">Features</li>
              <li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
              <li className="hover:text-indigo-600 cursor-pointer">Dashboard</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">About</li>
              <li className="hover:text-indigo-600 cursor-pointer">Careers</li>
              <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PharmaLink. All rights reserved.
          </p>

          {/* Social Icons (simple text version) */}
          <div className="flex gap-4 mt-4 md:mt-0 text-gray-600">
            <span className="hover:text-indigo-600 cursor-pointer">Twitter</span>
            <span className="hover:text-indigo-600 cursor-pointer">LinkedIn</span>
            <span className="hover:text-indigo-600 cursor-pointer">GitHub</span>
          </div>

        </div>
      </div>
    </footer>
  );
}