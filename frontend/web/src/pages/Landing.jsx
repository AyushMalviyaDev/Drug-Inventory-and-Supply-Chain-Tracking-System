import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-200 bg-white">
        <h1 className="text-lg font-semibold">MyBrand</h1>

        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-600 hover:text-black"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold max-w-2xl leading-tight"
        >
          Manage your inventory smarter
        </motion.h1>

        <p className="mt-6 text-gray-500 max-w-xl">
          A simple and powerful system to track, manage and optimize drug supply
          across hospitals in real-time.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm hover:bg-indigo-700 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border border-gray-300 px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition"
          >
            Login
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-10 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Real-time Tracking",
            "Smart Inventory Alerts",
            "Secure & Reliable"
          ].map((feature, i) => (
            <div key={i}>
              <h3 className="font-medium mb-2">{feature}</h3>
              <p className="text-gray-500 text-sm">
                Designed to improve efficiency and reduce shortages in supply chains.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 border-t border-gray-200">
        <h2 className="text-3xl font-semibold">
          Start managing better today
        </h2>
        <p className="text-gray-500 mt-4">
          No complexity. Just results.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm hover:bg-indigo-700 transition"
        >
          Create Account
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6">
        © {new Date().getFullYear()} MyBrand
      </footer>
    </div>
  );
}