import React from "react";
import { Element } from "react-scroll";

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

      <div className="pt-20">
        {/* HERO */}
        <Element name="hero">
          <Hero />
        </Element>

        {/* ABOUT */}
        <Element name="about">
          <About />
        </Element>

        {/* FEATURES */}
        <Element name="how">
          <AIFeatures />
        </Element>

        {/* STATS / VIDEO */}
        <Element name="team">
          <BackgroundVideo />
        </Element>

        {/* TESTIMONIALS */}
        <Element name="testimonials">
          <Testimonials />
        </Element>

        {/* FOOTER / CONTACT */}
        <Element name="contact">
          <Footer />
        </Element>

      </div>
    </div>
  );
}