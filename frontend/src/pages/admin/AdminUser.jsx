import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const AdminUser = () => {
  const [cookie] = useCookies(["user"]);

  const [allData, setAllData] = useState([]);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);

  const [filter, setFilter] = useState("all");

  /* GET USERS */
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/adminusers");

      // store separately
      const studentData = res.data.students.map((s) => ({
        ...s,
        role: "student",
      }));

      const instructorData = res.data.instructors.map((i) => ({
        ...i,
        role: "instructor",
      }));

      setStudents(studentData);
      setInstructors(instructorData);
      setAllData([...studentData, ...instructorData]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  /* SELECT DATA BASED ON FILTER */
  let displayData = [];

  if (filter === "student") {
    displayData = students;
  } else if (filter === "instructor") {
    displayData = instructors;
  } else {
    displayData = allData;
  }

  return (
    <div className="bg-white rounded-xl shadow flex-1">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">All Users</h2>

        <div className="flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("student")}
            className={`px-4 py-2 rounded-lg ${
              filter === "student" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setFilter("instructor")}
            className={`px-4 py-2 rounded-lg ${
              filter === "instructor" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Instructor
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
             
            </tr>
          </thead>

          <tbody>
            {displayData.length > 0 ? (
              displayData.map((user, index) => (
                <tr key={user._id} className="border-t">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                   <td className="px-4 py-3">{user.role}</td>
                 
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-3 text-center" colSpan="4">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUser;
