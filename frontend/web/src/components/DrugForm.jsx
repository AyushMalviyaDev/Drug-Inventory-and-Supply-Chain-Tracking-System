import React, { useEffect, useState } from "react";
import { addDrug, getCategories } from "../api/drugApi";

export default function DrugForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDrug(form);
    refresh();
    setForm({ name: "", price: "", category: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md"
    >
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Drug Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded"
        />

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
        Add Drug
      </button>
    </form>
  );
}