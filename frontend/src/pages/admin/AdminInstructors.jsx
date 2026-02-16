import React from "react";

const AdminInstructors = () => {
  return (
    <div className="bg-white rounded-xl shadow flex-1">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Instructors</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Instructor
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
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <InstructorRow
              sno="1"
              name="Rahul Sharma"
              email="rahul@gmail.com"
              course="React"
              status="Active"
            />
            <InstructorRow
              sno="2"
              name="Neha Verma"
              email="neha@gmail.com"
              course="Node.js"
              status="Inactive"
            />
            <InstructorRow
              sno="3"
              name="Amit Patel"
              email="amit@gmail.com"
              course="Python"
              status="Active"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* Table Row Component */
const InstructorRow = ({ sno, name, email, course, status }) => {
  return (
    <tr className="border-t">
      <td className="px-4 py-3">{sno}</td>
      <td className="px-4 py-3 font-medium">{name}</td>
      <td className="px-4 py-3">{email}</td>
      <td className="px-4 py-3">{course}</td>
      <td
        className={`px-4 py-3 font-semibold ${
          status === "Active" ? "text-green-600" : "text-red-500"
        }`}
      >
        {status}
      </td>
      <td className="px-4 py-3 space-x-2">
        <button className="text-blue-600 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </td>
    </tr>
  );
};

export default AdminInstructors;
