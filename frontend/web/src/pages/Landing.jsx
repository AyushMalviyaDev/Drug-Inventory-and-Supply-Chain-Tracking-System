import React from "react";    
import Hero from "../components/Landing/Hero";
import WatchDemo from "../components/Landing/WatchDemo";
import About from "../components/Landing/About";
import AIFeatures from "../components/Landing/AIFeatures";
import BackgroundVideo from "../components/Landing/BackgroundVideo";
import Stats from "../components/Landing/Stats";
import Testimonials from "../components/Landing/Testimonials";
import Footer from "../components/Landing/Footer";
import Navbar from "../components/Landing/Navbar";
import MovingStrip from "../components/Landing/MovingStrip";

export default function Landing() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      
    </div>
  );
}