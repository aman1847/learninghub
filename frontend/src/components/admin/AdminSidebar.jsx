import React from "react";

const AdminSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-4 text-2xl font-bold text-white border-b border-gray-700">
        LMS Admin
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarItem label="Dashboard" />
        <SidebarItem label="Users" />
        <SidebarItem label="Courses" />
        <SidebarItem label="Teachers" />
        <SidebarItem label="Students" />
        <SidebarItem label="Categories" />
        <SidebarItem label="Enrollments" />
        <SidebarItem label="Payments" />
        <SidebarItem label="Reports" />
        <SidebarItem label="Settings" />
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t border-gray-700">
        <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
          Logout
        </button>
      </div>
    </aside>
  );
};

/* Sidebar Item Component */
const SidebarItem = ({ label }) => {
  return (
    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800 transition">
      {label}
    </button>
  );
};

export default AdminSidebar;
