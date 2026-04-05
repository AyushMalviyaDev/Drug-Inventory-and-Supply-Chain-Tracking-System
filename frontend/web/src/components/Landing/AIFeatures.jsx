import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Card = ({ children, className }) => (
  <motion.div
    variants={fadeUp}
    className={`rounded-xl p-6 bg-[#0f0f0f] text-white shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

export default function AIFeatures() {
  return (
    <div className="bg-black px-6 md:px-20 py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 auto-rows-[220px]"
      >
        {/* CARD 1 */}
        <Card className="col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Predict future medicine demand using intelligent models.
            </h2>
            <p className="text-sm text-gray-400 mb-4">Learn more →</p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "AI Overviews",
              "AI Mode",
              "ChatGPT",
              "Perplexity",
              "Gemini",
              "Copilot",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-white/10 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </Card>

        {/* CARD 2 */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-700 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Accelerate content production and strengthen topical coverage.
            </h2>
            <p className="text-sm text-gray-300">Learn more →</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="w-16 h-16 bg-gray-600 rounded-md" />
            <div className="w-14 h-14 rounded-full border-4 border-green-500 flex items-center justify-center text-sm font-bold">
              94
            </div>
          </div>
        </Card>

        {/* CARD 3 */}
        <Card className="flex flex-col justify-between">
          <h2 className="text-lg font-semibold">
            Optimize for global markets with AI-powered localization.
          </h2>

          <div className="mt-6">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
              🌍 173+
            </span>
          </div>
        </Card>

        {/* CARD 4 */}
        <Card className="flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-4">
            Detect AI-written content and maintain editorial integrity.
          </h2>

          {/* Fake Chart */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 via-yellow-400 to-red-400" />
            <div className="text-xs text-gray-400 space-y-1">
              <p>🟡 OpenAI</p>
              <p>🟢 DeepSeek</p>
              <p>⚫ Human</p>
            </div>
          </div>
        </Card>

        {/* CARD 5 */}
        <Card className="flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Deploy technical SEO fixes directly to your website—no devs needed.
            </h2>
            <p className="text-sm text-gray-400">Learn more →</p>
          </div>

          <div className="mt-6">
            <button className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition">
              ✨ Patch meta-tags
            </button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}