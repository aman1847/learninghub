import { useState, useRef, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function UserProfile() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [cookie, setcookie, removecookie] = useCookies();
  const navigate = useNavigate();


  useEffect(() => {

    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const logout = () => {
    removecookie("user")
    navigate("/");


  }

  // useEffect(()=>{
  //   console.log("ccc",cookie.user)
  // },[])
  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* TOP PROFILE ICON */}
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border border-gray-300"
      >
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border z-50">

          {/* USER INFO */}
          <div className="flex flex-col items-center px-4 py-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 font-semibold text-gray-800">
              {cookie.user.name} ({cookie.user.role})
            </p>
            <p className="text-sm text-gray-500">
              {cookie.user.email}

            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t"></div>

          {/* MENU OPTIONS */}
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to={`/${cookie.user.role.toLowerCase()}/profile`}>

                Profile
              </Link>

            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to={`/${cookie.user.role.toLowerCase()}`}>

                Dashboard
              </Link>

            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600" onClick={logout}>

              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
