import React, { useState } from "react";

const StudentCourses = () => {
  const [courses] = useState([
    {
      name: "React for Beginners",
      category: "Web Development",
      price: 1999,
      status: "Enrolled",
      progress: 80,
    },
    {
      name: "Advanced Node.js",
      category: "Backend",
      price: 2499,
      status: "Not Enrolled",
      progress: 0,
    },
    {
      name: "JavaScript Mastery",
      category: "Frontend",
      price: 1799,
      status: "Completed",
      progress: 100,
    },
  ]);

  return (
    <div className="bg-white rounded-xl shadow flex-1">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Available Courses</h2>
      </div>

      {/* Courses Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              <th className="px-4 py-3 text-left">Course Name</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Progress</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{course.name}</td>
                <td className="px-4 py-3">{course.category}</td>
                <td className="px-4 py-3">₹{course.price}</td>

                <td className="px-4 py-3">
                  {course.progress}%
                </td>

                <td
                  className={`px-4 py-3 font-medium ${
                    course.status === "Completed"
                      ? "text-green-600"
                      : course.status === "Enrolled"
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {course.status}
                </td>

                <td className="px-4 py-3">
                  {course.status === "Not Enrolled" && (
                    <button className="text-blue-600 hover:underline">
                      Enroll
                    </button>
                  )}

                  {course.status === "Enrolled" && (
                    <button className="text-green-600 hover:underline">
                      Continue
                    </button>
                  )}

                  {course.status === "Completed" && (
                    <button className="text-purple-600 hover:underline">
                      View Certificate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentCourses;
