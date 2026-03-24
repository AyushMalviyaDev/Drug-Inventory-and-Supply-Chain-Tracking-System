import React from "react";

const orders = [
  {
    id: "#21376",
    customer: "Shivam Kumar",
    category: "Distributor",
    invoice: "#21376",
    location: "Gopalapuram, Vizag",
    status: "Completed",
  },
  {
    id: "#21378",
    customer: "Vivek Kumar",
    category: "Retailer",
    invoice: "#21378",
    location: "Marripalem, Vizag",
    status: "Completed",
  },
  {
    id: "#21380",
    customer: "Raju Kumar",
    category: "Distributor",
    invoice: "#21380",
    location: "RTC Complex, Vizag",
    status: "Cancelled",
  },
];

export default function Orders() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Orders</h1>
          <p className="text-[#6B7280] text-sm">
            Manage and track all customer orders
          </p>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          + Add Order
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button className="bg-white px-4 py-2 rounded-lg text-sm border border-[#E5E7EB]">
          All Orders
        </button>

        <button className="text-[#6B7280] hover:text-[#111827] text-sm">
          Upcoming Orders
        </button>

        <button className="text-[#6B7280] hover:text-[#111827] text-sm">
          Reports
        </button>

        <button className="text-[#6B7280] hover:text-[#111827] text-sm">
          Analysis
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] mb-6 flex flex-wrap gap-4 items-center justify-between">

        <input
          type="text"
          placeholder="Search by order or customer name..."
          className="bg-white text-[#111827] placeholder-[#9CA3AF] px-4 py-2 rounded-lg w-full md:w-1/3 outline-none border border-[#E5E7EB]"
        />

        <div className="flex gap-3">
          <input
            type="date"
            className="bg-white text-[#6B7280] px-3 py-2 rounded-lg border border-[#E5E7EB]"
          />

          <select className="bg-white text-[#6B7280] px-3 py-2 rounded-lg border border-[#E5E7EB]">
            <option>Category</option>
            <option>Distributor</option>
            <option>Retailer</option>
          </select>
        </div>

      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-[#F8FAFC] text-[#6B7280] uppercase text-xs border-b border-[#E5E7EB]">
            <tr>
              <th className="px-6 py-4 text-left">Order ID</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Invoice</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-t border-[#E5E7EB] hover:bg-[#F9FAFB] transition"
              >
                <td className="px-6 py-4">{order.id}</td>

                <td className="px-6 py-4">{order.customer}</td>

                <td className="px-6 py-4 text-[#6B7280]">
                  {order.category}
                </td>

                <td className="px-6 py-4">{order.invoice}</td>

                <td className="px-6 py-4 text-[#6B7280]">
                  {order.location}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.status}
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