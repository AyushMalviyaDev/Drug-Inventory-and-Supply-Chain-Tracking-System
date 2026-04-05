import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function Inventory() {
  const [categories, setCategories] = useState([]);
  const [drugs, setDrugs] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [drugName, setDrugName] = useState("");
  const [editingDrug, setEditingDrug] = useState(null);

  // ✅ Fetch Categories
  const fetchCategories = async () => {
    const res = await api.get("inventory/categories/");
    setCategories(res.data);
  };

  // ✅ Fetch Drugs
  const fetchDrugs = async () => {
    const res = await api.get("inventory/drugs/");
    setDrugs(res.data);
  };

  useEffect(() => {
    fetchCategories();
    fetchDrugs();
  }, []);

 const [form, setForm] = useState({
  name: "",
  manufacturer: "",
  batch_number: "",
  quantity: "",
  price: "",
  expiry_date: "",
  manufacture_date: "",
  category: "",
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
  try {
    await api.post("inventory/drugs/", form);
    alert("Drug Added ✅");

    setForm({
      name: "",
      manufacturer: "",
      batch_number: "",
      quantity: "",
      price: "",
      expiry_date: "",
      manufacture_date: "",
      category: "",
    });

    fetchDrugs();
  } catch (err) {
    console.error(err);
    alert("Error adding drug ❌");
  }
};

  // ✅ Delete Drug
  const deleteDrug = async (id) => {
    await api.delete(`inventory/drugs/${id}/`);
    fetchDrugs();
  };

  // ✅ Update Drug
  const updateDrug = async () => {
    await api.put(`inventory/drugs/${editingDrug.id}/`, editingDrug);
    setEditingDrug(null);
    fetchDrugs();
  };

  // ✅ Search + Filter Logic
  const filteredDrugs = drugs.filter((drug) => {
    const matchesSearch = drug.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = selectedCategory
      ? drug.category === Number(selectedCategory)
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Pharma Inventory</h1>

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search drugs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* ➕ Add Drug */}
     <div className="bg-white p-6 rounded-xl shadow mb-6">

  <h2 className="text-lg font-semibold mb-4">Add Drug</h2>

  <div className="grid md:grid-cols-4 gap-3">

    <input name="name" value={form.name} onChange={handleChange} placeholder="Drug Name" className="border p-2 rounded" />

    <input name="manufacturer" value={form.manufacturer} onChange={handleChange} placeholder="Manufacturer" className="border p-2 rounded" />

    <input name="batch_number" value={form.batch_number} onChange={handleChange} placeholder="Batch No" className="border p-2 rounded" />

    <input name="quantity" type="number" value={form.quantity} onChange={handleChange} placeholder="Quantity" className="border p-2 rounded" />

    <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" />

    <input name="manufacture_date" type="date" value={form.manufacture_date} onChange={handleChange} className="border p-2 rounded" />

    <input name="expiry_date" type="date" value={form.expiry_date} onChange={handleChange} className="border p-2 rounded" />

    <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded">
      <option value="">Category</option>
      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>

  </div>

  <button
    onClick={handleSubmit}
    className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
  >
    Add Drug
  </button>

</div>

      {/* 💊 Drugs Grid */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
  <table className="w-full text-sm text-left">

    {/* Header */}
    <thead className="bg-gray-100 text-gray-600">
      <tr>
        <th className="p-3">#</th>
        <th className="p-3">Drug Name</th>
        <th className="p-3">ID</th>
        <th className="p-3">Category</th>
        <th className="p-3">Quantity</th>
        <th className="p-3">Expiry</th>
        <th className="p-3">Actions</th>
      </tr>
    </thead>

    {/* Body */}
    <tbody>
      {filteredDrugs.map((drug, index) => (
        <tr key={drug.id} className="border-t hover:bg-gray-50">

          <td className="p-3">{index + 1}</td>

          <td className="p-3 font-medium">{drug.name}</td>

          <td className="p-3">#{drug.id}</td>

          <td className="p-3">
            {categories.find((c) => c.id === drug.category)?.name}
          </td>

          <td className="p-3">
            {drug.quantity || "—"}
          </td>

          <td className="p-3">
            <span className="text-gray-600">
              {drug.expiry_date || "N/A"}
            </span>
          </td>

          <td className="p-3 flex gap-2">
            <button
              onClick={() => setEditingDrug(drug)}
              className="text-blue-500"
            >
              Edit
            </button>

            <button
              onClick={() => deleteDrug(drug.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </td>

        </tr>
      ))}
    </tbody>

  </table>
</div>

      {/* ✏️ Edit Modal */}
      {editingDrug && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="font-bold mb-4">Edit Drug</h2>

            <input
              value={editingDrug.name}
              onChange={(e) =>
                setEditingDrug({
                  ...editingDrug,
                  name: e.target.value,
                })
              }
              className="border p-2 w-full mb-3"
            />

            <button
              onClick={updateDrug}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={() => setEditingDrug(null)}
              className="ml-2 text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}