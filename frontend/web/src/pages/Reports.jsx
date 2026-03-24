import React from "react";

const reports = [
  {
    id: "#21376",
    customer: "Shivam Kumar",
    revenue: "₹4,500",
    date: "12 Mar 2026",
    status: "Completed",
  },
  {
    id: "#21378",
    customer: "Vivek Kumar",
    revenue: "₹2,800",
    date: "11 Mar 2026",
    status: "Completed",
  },
  {
    id: "#21380",
    customer: "Raju Kumar",
    revenue: "₹1,200",
    date: "10 Mar 2026",
    status: "Cancelled",
  },
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="text-[#6B7280] text-sm">
            Sales and revenue analytics overview
          </p>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          Export Report
        </button>
      </div>

      {/* Date Filter */}
      <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E5E7EB] mb-6 flex flex-wrap gap-4 items-center">
        <input
          type="date"
          className="bg-[#FFFFFF] text-[#6B7280] px-3 py-2 rounded-lg border border-[#E5E7EB]"
        />
        <input
          type="date"
          className="bg-[#FFFFFF] text-[#6B7280] px-3 py-2 rounded-lg border border-[#E5E7EB]"
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">
          Filter
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Total Revenue</h3>
          <p className="text-2xl font-semibold mt-2">₹2,45,000</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Total Orders</h3>
          <p className="text-2xl font-semibold mt-2">248</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl">
          <h3 className="text-[#6B7280] text-sm">Cancelled Orders</h3>
          <p className="text-2xl font-semibold mt-2">12</p>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F1F5F9] text-[#6B7280] uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Order ID</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Revenue</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report, index) => (
              <tr
                key={index}
                className="border-t border-[#E5E7EB] hover:bg-[#F9FAFB] transition"
              >
                <td className="px-6 py-4">{report.id}</td>
                <td className="px-6 py-4 font-medium">{report.customer}</td>
                <td className="px-6 py-4">{report.revenue}</td>
                <td className="px-6 py-4 text-[#6B7280]">
                  {report.date}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      report.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {report.status}
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