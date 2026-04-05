import React from "react";

export default function Navbar() {
  return (
    <div className="flex text-white justify-between bg-black items-center px-8 py-5">
      
      {/* Logo */}
      <h1 className="text-xl font-bold ">PharmaLink</h1>

      {/* Nav Links */}
      <div className="hidden md:flex gap-12 text-sm">
        <span className="cursor-pointer hover:text-gray-300">Product</span>
        <span className="cursor-pointer hover:text-gray-300">Our data</span>
        <span className="cursor-pointer hover:text-gray-300">Resources</span>
        <span className="cursor-pointer hover:text-gray-300">Pricing</span>
        <span className="cursor-pointer hover:text-gray-300">Enterprise</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="text-sm hover:text-gray-300">Sign in</button>
        <button className="border px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
          Sign up
        </button>
      </div>
    </div>
  );
}