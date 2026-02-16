import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const StudentSidebar = () => {
  const [cookie, setcookie, removecookie] = useCookies(["user"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookie.user.role !== "STUDENT") {
      navigate("/")
    }
  }, [])
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 text-xl font-bold text-white border-b border-gray-700">
        Student Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarLink to="/student" label="Dashboard" />
        <SidebarLink to="/student/courses" label="My Courses" />
        <SidebarLink to="/student/progress" label="Progress" />
        <SidebarLink to="/student/certificates" label="Certificates" />
        <SidebarLink to="/student/profile" label="Profile" />
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

const SidebarLink = ({ to, label }) => (
  <NavLink
    to={to}
    end={to === "/student"}
    className={({ isActive }) =>
      `block px-4 py-2 rounded-lg transition ${isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-800"
      }`
    }
  >
    {label}
  </NavLink>
);

export default StudentSidebar;
