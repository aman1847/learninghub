import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const InstructorSidebar = () => {
  const [cookie, setcookie, removecookie] = useCookies(["user"]);
  const navigate = useNavigate();

  
  const logout = () => {
    removecookie("user")
    navigate("/");

  }

     useEffect(()=>{
          if(cookie.user.role!=="INSTRUCTOR"){
            navigate("/")
          }
        },[])

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 text-xl font-bold text-white border-b border-gray-700">
        Instructor Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarLink to="/instructor" label="Dashboard" />
        <SidebarLink to="/instructor/courses" label="My Courses" />
        <SidebarLink to="/instructor/students" label="Students" />
        <SidebarLink to="/instructor/earnings" label="Earnings" />
        <SidebarLink to="/instructor/profile" label="Profile" />
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t border-gray-700">
        <button onClick={logout} className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
          Logout
        </button>
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, label }) => (
  <NavLink
    to={to}
    end={to === "/instructor"}
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

export default InstructorSidebar;
