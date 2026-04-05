import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function Dashboard() {
  const [drugs, setDrugs] = useState([]);
  const [categories, setCategories] = useState([]);

  // ✅ Fetch Data
  const fetchData = async () => {
    try {
      const drugRes = await api.get("inventory/drugs/");
      const catRes = await api.get("inventory/categories/");

      setDrugs(drugRes.data);
      setCategories(catRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Stats Logic
  const totalDrugs = drugs.length;
  const totalCategories = categories.length;

  const lowStock = drugs.filter((d) => d.quantity < 10).length;

  const expiringSoon = drugs.filter((d) => {
    if (!d.expiry_date) return false;
    const expiry = new Date(d.expiry_date);
    const today = new Date();
    const diff = (expiry - today) / (1000 * 60 * 60 * 24);
    return diff <= 30;
  }).length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* 🧠 Header */}
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* 📊 Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <Card title="Total Drugs" value={totalDrugs} color="bg-indigo-600" />
        <Card title="Categories" value={totalCategories} color="bg-indigo-600" />
        <Card title="Low Stock" value={lowStock} color="bg-indigo-600" />
        <Card title="Expiring Soon" value={expiringSoon} color="bg-indigo-600" />

      </div>


    </div>
  );
}


// 🔥 Reusable Card Component
function Card({ title, value, color }) {
  return (
    <div className={`text-white p-4 rounded-xl shadow ${color}`}>
      <h3 className="text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}