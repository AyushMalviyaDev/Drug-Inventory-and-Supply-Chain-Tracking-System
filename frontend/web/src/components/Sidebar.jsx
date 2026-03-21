import { useState } from "react";
import { NavLink, Link } from "react-router-dom";


import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Package,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Orders", icon: FileText, path: "/orders" },
    { name: "Market Distribution", icon: BarChart3, path: "/distribution" },
    { name: "Inventory", icon: Package, path: "/inventory" },
    { name: "Reports & Analytics", icon: BarChart3, path: "/reports" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div
      className={`h-screen bg-[#FFFFFF] text-[#111827] border-r border-[#E5E7EB]
      flex flex-col justify-between
      transition-all duration-300 ease-in-out
      ${isCollapsed ? "w-20" : "w-72"}`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between p-5">
          {!isCollapsed && (
            <Link to="/dashboard">
            <div className="text-xl font-bold tracking-tight">
      <span className="text-[#111827]">Pharma</span>
      <span className="text-[#22C55E]">Link</span>
    </div>
            </Link>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-[#F8FAFC] transition text-[#6B7280] hover:text-[#111827]"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-4 px-4 py-3 rounded-xl
                   transition-all duration-200
                   ${
                     isActive
                       ? "bg-[#F0FDF4] text-[#111827]  border-[#E5E7EB]"
                       : "text-[#6B7280] hover:bg-[#F8FAFC] hover:text-[#111827]"
                   }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={20}
                      className={`transition ${
                        isActive
                          ? "text-[#22C55E]"
                          : "text-[#6B7280] group-hover:text-[#22C55E]"
                      }`}
                    />

                    {!isCollapsed && (
                      <span className="text-sm font-medium">
                        {item.name}
                      </span>
                    )}

                    {isCollapsed && (
                      <span className="absolute left-16 bg-white text-[#111827] text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap border border-[#E5E7EB] shadow-lg">
                        {item.name}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
     {/* Bottom Section */}
<div className="mb-6 px-3 space-y-2">
  {[
    { name: "Contact & Help", icon: HelpCircle, onClick: () => alert("Open Help/Contact page") },
    { name: "Logout", icon: LogOut, onClick: () => {
        localStorage.clear();          // clear tokens
        window.location.href = "/login"; // redirect to login
      }
    },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.name}
        onClick={item.onClick}
        className="group relative flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer
                   text-[#6B7280] hover:bg-[#F8FAFC] hover:text-[#111827] transition w-full text-left"
      >
        <Icon
          size={20}
          className="text-[#6B7280] group-hover:text-[#22C55E] transition"
        />

        {!isCollapsed && (
          <span className="text-sm font-medium">
            {item.name}
          </span>
        )}

        {isCollapsed && (
          <span className="absolute left-16 bg-white text-[#111827] text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap border border-[#E5E7EB] shadow-lg">
            {item.name}
          </span>
        )}
      </button>
    
          );
        })}
      </div>
    </div>
  );
}