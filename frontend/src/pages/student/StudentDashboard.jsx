import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const StudentDashboard = () => {
  const [, , removecookie] = useCookies();
  const navigate = useNavigate();

  const logout = () => {
    removecookie("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex-1">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Student Dashboard
        </h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Enrolled Courses</p>
            <h2 className="text-3xl font-bold">6</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Completed Courses</p>
            <h2 className="text-3xl font-bold">3</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">In Progress</p>
            <h2 className="text-3xl font-bold">2</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Certificates</p>
            <h2 className="text-3xl font-bold">3</h2>
          </div>
        </div>

        {/* My Courses Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">
              My Courses
            </h3>
          </div>

          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Course Name</th>
                <th className="px-4 py-3 text-left">Instructor</th>
                <th className="px-4 py-3 text-left">Progress</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">React Basics</td>
                <td className="px-4 py-3">John Doe</td>
                <td className="px-4 py-3">100%</td>
                <td className="px-4 py-3 text-green-600">
                  Completed
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3">Node.js Fundamentals</td>
                <td className="px-4 py-3">Jane Smith</td>
                <td className="px-4 py-3">65%</td>
                <td className="px-4 py-3 text-yellow-600">
                  In Progress
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3">Advanced JavaScript</td>
                <td className="px-4 py-3">Alex Brown</td>
                <td className="px-4 py-3">20%</td>
                <td className="px-4 py-3 text-blue-600">
                  Started
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
