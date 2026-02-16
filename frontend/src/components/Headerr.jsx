
import React from 'react'
import { Link } from "react-router-dom";
import UserProfile from './UserProfile';
import { useCookies } from 'react-cookie';


const Header = () => {
    const [cookie,setcookie,removecookie]=useCookies();
    return (
        <div>
            {/* Header */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl font-bold text-blue-600">MyLMS</h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-blue-600">
                            Home
                        </Link>

                        <Link to="/courses" className="text-gray-600 hover:text-blue-600">
                            Courses
                        </Link>

                        <Link to="/about" className="text-gray-600 hover:text-blue-600">
                            About
                        </Link>

                        <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                            Contact
                        </Link>
                      </div>
                      {
                        cookie.user?<UserProfile/>:(
                      
                        <div>
                        <Link to="/login">
                            <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50 transition">
                                Login
                            </button>
                        </Link>

                        <Link to="/register">
                            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
                                Register
                            </button>
                        </Link>
                        </div>
                        )
                        }
                       
                    
                     
                    {/* Mobile Button */}
                    <button className="md:hidden text-gray-600 text-2xl">☰</button>
                </div>
            </nav>
        </div>
    )
}

export default Header