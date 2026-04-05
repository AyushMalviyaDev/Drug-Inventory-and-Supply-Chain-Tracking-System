import React from "react";
import { motion } from "framer-motion";

export default function BackgroundVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video2.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-16 flex flex-col justify-between h-full">
        
       

        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Lead with pharma <br />
            further, faster, and deeper
          </h1>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            PharmaLink helps hospitals track drugs, monitor stock levels, and prevent
  expiry losses with real-time insights and intelligent alerts.  </p>

          <button className="text-blue-400 font-medium hover:underline">
            Explore PharmaLink →
          </button>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10"
        >
          {[
  { title: "10K+", desc: "Drugs managed across systems" },
  { title: "500+", desc: "Hospitals & pharmacies connected" },
  { title: "99.9%", desc: "Inventory accuracy rate" },
  { title: "30%", desc: "Reduction in expired stock waste" },
].map((item, i) => (
            <div key={i}>
              <h2 className="text-yellow-400 text-3xl font-bold">
                {item.title}
              </h2>
              <p className="text-sm mt-1">{item.desc}</p>
              {item.sub && (
                <p className="text-xs text-gray-400">{item.sub}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}