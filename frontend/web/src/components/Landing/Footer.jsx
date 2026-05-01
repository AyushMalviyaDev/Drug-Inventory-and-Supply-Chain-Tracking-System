import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              PharmaLink
            </h2>
            <p className="mt-4 text-sm text-gray-600 max-w-sm leading-relaxed">
              A smart pharmaceutical platform helping hospitals and pharmacies
              manage inventory, reduce expiry losses, and optimize supply chains
              with real-time insights.
            </p>

            {/* Mini tag */}
            <div className="mt-4">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                Built for Healthcare 🚑
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer transition">Features</li>
              <li className="hover:text-black cursor-pointer transition">Pricing</li>
              <li className="hover:text-black cursor-pointer transition">Dashboard</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer transition">About</li>
              <li className="hover:text-black cursor-pointer transition">Team</li>
              <li className="hover:text-black cursor-pointer transition">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PharmaLink — All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-600">
            <span className="hover:text-black cursor-pointer transition">Twitter</span>
            <span className="hover:text-black cursor-pointer transition">LinkedIn</span>
            <span className="hover:text-black cursor-pointer transition">GitHub</span>
          </div>

        </div>
      </div>
    </footer>
  );
}