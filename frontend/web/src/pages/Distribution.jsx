import React from "react";

const distributors = [
  {
    name: "Shivam Traders",
    location: "Gopalapuram, Vizag",
    orders: 128,
    revenue: "₹2,45,000",
    status: "Active",
  },
  {
    name: "Venkatesh Pharma",
    location: "Marripalem, Vizag",
    orders: 86,
    revenue: "₹1,32,000",
    status: "Active",
  },
  {
    name: "Sai Medical Agencies",
    location: "RTC Complex, Vizag",
    orders: 42,
    revenue: "₹78,000",
    status: "Inactive",
  },
];

export default function Distribution() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Market Distribution</h1>
          <p className="text-[#6B7280] text-sm">
            Overview of distributors and their performance
          </p>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          + Add Distributor
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Total Distributors</h3>
          <p className="text-2xl font-semibold mt-2">58</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Total Orders</h3>
          <p className="text-2xl font-semibold mt-2">1,248</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Total Revenue</h3>
          <p className="text-2xl font-semibold mt-2">₹18,75,000</p>
        </div>
      </div>

      {/* Distribution Table */}
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F1F5F9] text-[#6B7280] uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Distributor</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-6 py-4 text-left">Orders</th>
              <th className="px-6 py-4 text-left">Revenue</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {distributors.map((dist, index) => (
              <tr
                key={index}
                className="border-t border-[#E5E7EB] hover:bg-[#F9FAFB] transition"
              >
                <td className="px-6 py-4 font-medium">{dist.name}</td>
                <td className="px-6 py-4 text-[#6B7280]">
                  {dist.location}
                </td>
                <td className="px-6 py-4">{dist.orders}</td>
                <td className="px-6 py-4">{dist.revenue}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      dist.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {dist.status}
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