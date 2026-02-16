import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  /* FETCH ALL COURSES */
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/Admincourse");
        setCourses(res.data);   // this matches your backend
      } catch (error) {
        console.log("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  /* SEARCH FILTER */
  const filteredCourses = courses.filter((course) =>
    course.coursename?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-bold">All Courses</h2>

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading Courses...</p>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <div className="h-40 bg-blue-200 flex items-center justify-center text-blue-700 font-semibold">
                  Course Image
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {course.coursename}
                  </h3>

                  <p className="text-gray-600 text-sm mb-1">
                    Category: {course.category}
                  </p>

                  <p className="text-gray-600 text-sm mb-2">
                    Instructor: {course.instructorname}
                  </p>

                  <p className="text-gray-800 font-semibold mb-4">
                    ₹ {course.price}
                  </p>

                  <Link
                    to={`/buycourse/${course._id}`}
                    className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block text-center"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No Courses Found</p>
        )}
      </div>
    </div>
  );
}
