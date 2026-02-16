import React from "react";

const AdminStudents = () => {
  return (
    <div className="bg-white rounded-xl shadow flex-1">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Students</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Student
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Enrolled Courses</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <StudentRow
              sno="1"
              name="Aman Mishra"
              email="aman@gmail.com"
              courses="3"
              status="Active"
            />
            <StudentRow
              sno="2"
              name="Neha Verma"
              email="neha@gmail.com"
              courses="1"
              status="Inactive"
            />
            <StudentRow
              sno="3"
              name="Rahul Sharma"
              email="rahul@gmail.com"
              courses="2"
              status="Active"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* Table Row Component */
const StudentRow = ({ sno, name, email, courses, status }) => {
  return (
    <tr className="border-t">
      <td className="px-4 py-3">{sno}</td>
      <td className="px-4 py-3 font-medium">{name}</td>
      <td className="px-4 py-3">{email}</td>
      <td className="px-4 py-3 text-center">{courses}</td>
      <td
        className={`px-4 py-3 font-semibold ${
          status === "Active" ? "text-green-600" : "text-red-500"
        }`}
      >
        {status}
      </td>
      <td className="px-4 py-3 space-x-2">
        <button className="text-blue-600 hover:underline">View</button>
        <button className="text-green-600 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </td>
    </tr>
  );
};

export default AdminStudents;
