import { motion } from "framer-motion";

export default function MovingStrip() {
  return (
    <div className="overflow-hidden bg-white py-8">
      <motion.div
        className="flex gap-10 text-black text-lg font-semibold whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        {/* Repeat content twice for smooth loop */}
        <div className="flex gap-10">
          <span>💊 Paracetamol</span>
          <span>💉 Insulin</span>
          <span>🧪 Antibiotics</span>
          <span>🏥 Pharma Supplies</span>
        </div>

        <div className="flex gap-10">
          <span>💊 Paracetamol</span>
          <span>💉 Insulin</span>
          <span>🧪 Antibiotics</span>
          <span>🏥 Pharma Supplies</span>
        </div>
      </motion.div>
    </div>
  );
}