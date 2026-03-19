import React from "react";

const inventory = [
  {
    product: "Paracetamol 500mg",
    category: "Tablet",
    stock: 520,
    price: "₹35",
    status: "In Stock",
  },
  {
    product: "Cough Syrup",
    category: "Syrup",
    stock: 48,
    price: "₹120",
    status: "Low Stock",
  },
  {
    product: "Vitamin D Capsules",
    category: "Capsule",
    stock: 0,
    price: "₹250",
    status: "Out of Stock",
  },
];

export default function Inventory() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Inventory</h1>
          <p className="text-[#6B7280] text-sm">
            Manage product stock and availability
          </p>
        </div>

        <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          + Add Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Total Products</h3>
          <p className="text-2xl font-semibold mt-2">124</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Low Stock Items</h3>
          <p className="text-2xl font-semibold mt-2">18</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Out of Stock</h3>
          <p className="text-2xl font-semibold mt-2">6</p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E5E7EB] mb-6 flex flex-wrap gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search product..."
          className="bg-[#F8FAFC] text-[#111827] placeholder-[#6B7280] px-4 py-2 rounded-lg w-full md:w-1/3 outline-none border border-[#E5E7EB]"
        />

        <select className="bg-[#F8FAFC] text-[#6B7280] px-3 py-2 rounded-lg border border-[#E5E7EB]">
          <option>All Categories</option>
          <option>Tablet</option>
          <option>Syrup</option>
          <option>Capsule</option>
        </select>
      </div>

      {/* Inventory Table */}
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F1F5F9] text-[#6B7280] uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Stock</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item, index) => (
              <tr
                key={index}
                className="border-t border-[#E5E7EB] hover:bg-[#F9FAFB] transition"
              >
                <td className="px-6 py-4 font-medium">{item.product}</td>
                <td className="px-6 py-4 text-[#6B7280]">
                  {item.category}
                </td>
                <td className="px-6 py-4">{item.stock}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "In Stock"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Low Stock"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}