import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate(); // ✅ inside component

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">

      {/* 🔥 Top bar with logout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#111827]">
          Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-[#22C55E] text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
          <p className="text-sm text-[#6B7280]">Total revenue</p>
          <h3 className="text-2xl font-bold text-[#111827]">$567,899</h3>
          <span className="text-[#22C55E] text-sm">+2.5%</span>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
          <p className="text-sm text-[#6B7280]">Total orders</p>
          <h3 className="text-2xl font-bold text-[#111827]">$3,465</h3>
          <span className="text-[#22C55E] text-sm">+0.8%</span>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
          <p className="text-sm text-[#6B7280]">Total sales</p>
          <h3 className="text-2xl font-bold text-[#111827]">1,136</h3>
          <span className="text-[#EF4444] text-sm">-0.2%</span>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
          <p className="text-sm text-[#6B7280]">Total returns</p>
          <h3 className="text-2xl font-bold text-[#111827]">1,789</h3>
          <span className="text-[#22C55E] text-sm">+1.2%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 h-[350px]">
        <h3 className="text-lg font-semibold text-[#111827] mb-4">
          Product Sales
        </h3>

        <div className="h-[250px] flex items-center justify-center text-[#6B7280]">
          Chart goes here
        </div>
      </div>

    </div>
  );
}