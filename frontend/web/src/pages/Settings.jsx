import React, { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-[#6B7280] text-sm">
          Manage your account preferences and system settings
        </p>
      </div>

      {/* Profile Section */}
      <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl mb-6">
        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-white px-4 py-2 rounded-lg border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-white px-4 py-2 rounded-lg border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] outline-none"
          />
          <input
            type="password"
            placeholder="New Password"
            className="bg-white px-4 py-2 rounded-lg border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-white px-4 py-2 rounded-lg border border-[#E5E7EB] text-[#111827] placeholder-[#6B7280] outline-none"
          />
        </div>
      </div>

      {/* Preferences Section */}
      <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-6 rounded-xl mb-6">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>

        <div className="flex items-center justify-between mb-4">
          <span className="text-[#6B7280]">Enable Notifications</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              notifications ? "bg-indigo-600" : "bg-indigo-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                notifications ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#6B7280]">Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              darkMode ? "bg-indigo-600" : "bg-indigo-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
          Save Changes
        </button>
      </div>

    </div>
  );
}