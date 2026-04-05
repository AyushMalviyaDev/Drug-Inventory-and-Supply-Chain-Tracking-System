import { motion } from "framer-motion";

export default function DrugCard({ drug, onDelete }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white shadow-md rounded-xl p-4"
    >
      <h2 className="text-lg font-semibold">{drug.name}</h2>
      <p className="text-sm text-gray-500">{drug.category?.name}</p>

      <div className="flex justify-between mt-4">
        <span className="text-indigo-600 font-bold">₹{drug.price}</span>

        <button
          onClick={() => onDelete(drug._id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}