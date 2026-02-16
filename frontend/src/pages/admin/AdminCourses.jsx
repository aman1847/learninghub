import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminCoursess = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/Admincourse");
      setCourses(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow flex-1">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Courses</h2>
        <button
          onClick={getCourses}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Get courses
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              {/* <th className="px-4 py-3 text-left">Instructor ID</th> */}
              <th className="px-4 py-3 text-left">Instructor Name</th>
              <th className="px-4 py-3 text-left">Course Name</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No courses found
                </td>
              </tr>
            ) : (
              courses.map((course, index) => (
                <tr key={course._id} className="border-t">
                  <td className="px-4 py-3">{index + 1}</td>
                  {/* <td className="px-4 py-3">{course.instructorid}</td> */}
                     <td className="px-4 py-3">{course.instructorname}</td>
                  <td className="px-4 py-3 font-medium">
                    {course.coursename}
                  </td>
                  <td className="px-4 py-3">{course.category}</td>
                  <td className="px-4 py-3">{course.description}</td>
                  <td className="px-4 py-3">₹{course.price}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCoursess;
