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
      className={`h-screen bg-white text-gray-900 border-r border-gray-200
      flex flex-col justify-between
      transition-all duration-300 ease-in-out
      ${isCollapsed ? "w-20" : "w-72"}`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between p-5">
          {!isCollapsed && (
            <Link to="/dashboard">
              <div className="text-xl font-semibold tracking-tight">
                <span className="text-gray-900">Pharma</span>
                <span className="text-indigo-600">Link</span>
              </div>
            </Link>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-500 hover:text-gray-900"
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
                       ? "bg-indigo-50 text-indigo-600"
                       : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                   }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={20}
                      className={`transition ${
                        isActive
                          ? "text-indigo-600"
                          : "text-gray-500 group-hover:text-indigo-600"
                      }`}
                    />

                    {!isCollapsed && (
                      <span className="text-sm font-medium">
                        {item.name}
                      </span>
                    )}

                    {isCollapsed && (
                      <span className="absolute left-16 bg-white text-gray-900 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap border border-gray-200 shadow-lg">
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
      <div className="mb-6 px-3 space-y-2">
        {[
          { name: "Contact & Help", icon: HelpCircle, onClick: () => alert("Open Help/Contact page") },
          {
            name: "Logout",
            icon: LogOut,
            onClick: () => {
              localStorage.clear();
              window.location.href = "/login";
            },
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={item.onClick}
              className="group relative flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer
                         text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition w-full text-left"
            >
              <Icon
                size={20}
                className="text-gray-500 group-hover:text-indigo-600 transition"
              />

              {!isCollapsed && (
                <span className="text-sm font-medium">
                  {item.name}
                </span>
              )}

              {isCollapsed && (
                <span className="absolute left-16 bg-white text-gray-900 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap border border-gray-200 shadow-lg">
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