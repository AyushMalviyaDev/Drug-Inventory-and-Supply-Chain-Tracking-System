import { useNavigate } from "react-router-dom";
import { Search, Bell, Settings } from "lucide-react";
import { Calendar } from 'lucide-react';
import Credit from "../components/Credit";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">

      {/* 🔥 Top Header (like image) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>

        {/* Right Controls */}
        <div className="flex flex-wrap items-center gap-3">

          {/* Search */}
          <div className="flex items-center bg-white border border-gray-200 px-3 py-2 rounded-xl">
            <Search size={16} className="text-indigo-600 mr-2" />
            <input
              placeholder="Search..."
              className="outline-none text-sm bg-transparent"
            />
          </div>

          <Calendar className="text-black cursor-pointer" size={18} />

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Bell className="text-black cursor-pointer" size={18} />
            <Settings className="text-black cursor-pointer" size={18} />
          </div>
         

      
        </div>
      </div>

      {/* Stats Cards */}

{/* Stats Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

  {[
    ["Total revenue", "$567,899", "+2.5%", "text-green-500"],
    ["Total orders", "$3,465", "+0.8%", "text-green-500"],
    ["Total sales", "1,136", "-0.2%", "text-red-500"],
    ["Total returns", "1,789", "+1.2%", "text-green-500"],
  ].map((item, i) => (

    i === 0 ? (<div className="flex justify-center ">
    <Credit />
  </div>
    ) : (
      <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
        <p className="text-sm text-gray-500">{item[0]}</p>
        <h3 className="text-2xl font-bold text-gray-900">{item[1]}</h3>
        <span className={`${item[3]} text-sm`}>{item[2]}</span>
      </div>
    )

  ))}
</div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1,2,3,4,5,6].map((chart) => (
          <div key={chart} className="bg-indigo-100 border border-gray-200 rounded-2xl p-5 h-[250px]">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Chart {chart}
            </h3>
            <div className="h-full flex items-center justify-center text-gray-400 text-sm">
              Chart goes here
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Updates */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Updates
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <p>• New order placed by John</p>
            <p>• Inventory updated for Item #123</p>
            <p>• Payment received from client</p>
            <p>• Stock alert: Low quantity</p>
          </div>
        </div>

        {/* Active Customers */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Active Customers
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <p>• John Doe</p>
            <p>• Sarah Smith</p>
            <p>• Alex Johnson</p>
            <p>• Emily Davis</p>
          </div>
        </div>

      </div>

    </div>
  );
}