import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const InstructorDashboard = () => {
  const [cookie, setcookie, removecookie] = useCookies();
    const navigate = useNavigate();
    const logout = () => {
      removecookie("user")
      navigate("/");
    }
      
  return (
    <div className="min-h-screen bg-gray-100 flex-1 ">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Instructor Dashboard
        </h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">My Courses</p>
            <h2 className="text-3xl font-bold">8</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Students</p>
            <h2 className="text-3xl font-bold">180</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Active Courses</p>
            <h2 className="text-3xl font-bold">5</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Pending Reviews</p>
            <h2 className="text-3xl font-bold">14</h2>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">
              Recent Student Activity
            </h3>
          </div>

          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Student Name</th>
                <th className="px-4 py-3 text-left">Course</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Aman Mishra</td>
                <td className="px-4 py-3">React Basics</td>
                <td className="px-4 py-3 text-green-600">
                  Enrolled
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3">Rahul Sharma</td>
                <td className="px-4 py-3">JavaScript Advanced</td>
                <td className="px-4 py-3 text-green-600">
                  Completed
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3">Neha Verma</td>
                <td className="px-4 py-3">Node.js Fundamentals</td>
                <td className="px-4 py-3 text-yellow-600">
                  In Progress
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;
