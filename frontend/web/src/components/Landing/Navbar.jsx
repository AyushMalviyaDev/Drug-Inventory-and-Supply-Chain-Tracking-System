import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-black text-white px-8 py-5 fixed w-full top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">PharmaLink</h1>

      {/* Nav Links */}
      <div className="hidden md:flex gap-12 text-sm">
        <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-300">
          About
        </ScrollLink>

        <ScrollLink to="how" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-300">
          How it works
        </ScrollLink>

        <ScrollLink to="team" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-300">
          Team
        </ScrollLink>

        <ScrollLink to="testimonials" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-300">
          Testimonials
        </ScrollLink>

        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-gray-300">
          Contact
        </ScrollLink>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-sm hover:text-gray-300">
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