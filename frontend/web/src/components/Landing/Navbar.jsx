import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-black text-white px-8 py-5">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">PharmaLink</h1>

      {/* Nav Links */}
      <div className="hidden md:flex gap-12 text-sm">
        <span className="cursor-pointer hover:text-gray-300">Product</span>
        <span className="cursor-pointer hover:text-gray-300">Our data</span>
        <span className="cursor-pointer hover:text-gray-300">Resources</span>
        <span className="cursor-pointer hover:text-gray-300">Pricing</span>
        <span className="cursor-pointer hover:text-gray-300">Enterprise</span>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-sm px-2 py-1 hover:text-gray-300"
        >
          Sign in
        </Link>

        <Link
          to="/register"
          className="border px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition"
        >
          Sign up
        </Link>
      </div>

    </div>
  );
}