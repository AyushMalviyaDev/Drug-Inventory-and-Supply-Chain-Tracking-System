import React, { useEffect, useState } from "react";
import { api } from "../api";

function StatCard({ title, value, sub, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">

      {/* Top Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <span className="text-xl">{icon}</span>
      </div>

      {/* Value */}
      <h2 className="text-3xl font-bold text-black mt-2">
        {value}
      </h2>

      {/* Sub text */}
      <p className="text-xs text-gray-500 mt-1">
        {sub}
      </p>
    </div>
  );
}

export default function Dashboard() {
  const [drugs, setDrugs] = useState([]);
  const [categories, setCategories] = useState([]);

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

      {/* Header */}
      <h1 className="text-2xl font-bold text-black mb-6">
        Dashboard Overview
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-5">

        <StatCard
          title="Total Drugs"
          value={totalDrugs}
          sub="In inventory"
          icon="📦"
        />

        <StatCard
          title="Categories"
          value={totalCategories}
          sub="Active types"
          icon="📁"
        />

        <StatCard
          title="Low Stock"
          value={lowStock}
          sub="Need refill"
          icon="⚠️"
        />

        <StatCard
          title="Expiring Soon"
          value={expiringSoon}
          sub="Within 30 days"
          icon="⏳"
        />

      </div>
    </div>
  );
}