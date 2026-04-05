import React from "react";
import { motion } from "framer-motion";

export default function WatchDemo() {
  return (
    <div className="relative py-10 px-4 md:px-24 md:py-22  bg-indigo-600 flex justify-center items-center overflow-hidden">
      
      <video
        src="/video.mp4"   // put your video in public folder
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

    </div>
  );
}