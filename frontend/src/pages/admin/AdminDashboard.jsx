import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex-1">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Users</p>
            <h2 className="text-3xl font-bold">120</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Courses</p>
            <h2 className="text-3xl font-bold">35</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Teachers</p>
            <h2 className="text-3xl font-bold">12</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Students</p>
            <h2 className="text-3xl font-bold">250</h2>
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Recent Users</h3>
          </div>

          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Aman Mishra</td>
                <td className="px-4 py-3">Student</td>
                <td className="px-4 py-3 text-green-600">Active</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Rahul Sharma</td>
                <td className="px-4 py-3">Teacher</td>
                <td className="px-4 py-3 text-green-600">Active</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Neha Verma</td>
                <td className="px-4 py-3">Student</td>
                <td className="px-4 py-3 text-red-500">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

