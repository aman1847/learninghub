import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const InstructorCourses = () => {
  const [cookie, setcookie, removecookie] = useCookies("user");
  const [showForm, setShowForm] = useState(false);

  const [courses, setCourses] = useState([]);

  const [coursename, setCourseName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // UPDATE STATES
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  /* Add Course */
  const handleAddCourse = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/Addcourse", {
        instructorid: cookie.user._id,
        instructorname: cookie.user.name,
        coursename,
        category,
        description,
        price,
      });

      setCourses([...courses, res.data.course]);
      alert(res.data.msg);

      setCourseName("");
      setCategory("");
      setDescription("");
      setPrice("");
      setShowForm(false);
    } catch (error) {
      console.log(error);
      alert("Failed to add course");
    }
  };

  /* Get Instructor Courses */
  const instcourses = async () => {
    const re = await axios.get(
      `http://localhost:5000/Addcourse/${cookie.user._id}`
    );
    setCourses(re.data);
  };

  /* Delete Course */
  const handleDelete = async (id) => {
    try {
      const re = await axios.delete(
        `http://localhost:5000/Deletecourse/${id}`
      );
      alert(re.data.msg);
      instcourses();
    } catch (err) {
      console.log(err);
    }
  };

  /* Open Edit Form */
  const handleEdit = (course) => {
    setCourseName(course.coursename);
    setCategory(course.category);
    setDescription(course.description);
    setPrice(course.price);

    setEditId(course._id);
    setIsEdit(true);
    setShowForm(true);
  };

  /* Update Course */
  const handleUpdateCourse = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5000/Updatecourse/${editId}`,
        {
          coursename,
          category,
          description,
          price,
        }
      );

      alert(res.data.msg);
      setIsEdit(false);
      setShowForm(false);
      instcourses();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cookie?.user?._id) {
      instcourses();
    }
  }, [cookie]);

  return (
    <div className="bg-white rounded-xl shadow flex-1">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">My Courses</h2>
        <button
          onClick={() => {
            setShowForm(true);
            setIsEdit(false);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Create Course
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="p-4 border-b flex justify-center">
          <form
            onSubmit={isEdit ? handleUpdateCourse : handleAddCourse}
            className="w-full max-w-xl bg-gray-50 p-4 rounded-lg shadow grid gap-3"
          >
            <input
              type="text"
              placeholder="Course Name"
              value={coursename}
              onChange={(e) => setCourseName(e.target.value)}
              className="border rounded-lg px-3 py-2"
              required
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-lg px-3 py-2"
              required
            />

            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-lg px-3 py-2"
              required
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded-lg px-3 py-2"
              required
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button className="bg-green-600 text-white rounded-lg px-4 py-2">
                {isEdit ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              <th className="px-4 py-3 text-left">Course Name</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => (
              <tr key={course._id} className="border-t">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{course.coursename}</td>
                <td className="px-4 py-3">{course.category}</td>
                <td className="px-4 py-3">{course.description}</td>
                <td className="px-4 py-3">₹{course.price}</td>
                <td className="px-4 py-3 space-x-3">
                  <button
                    onClick={() => handleEdit(course)}
                    className="text-green-600 hover:underline"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorCourses;
