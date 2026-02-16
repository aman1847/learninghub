import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function LandingPage() {
  const { id } = useParams();

  const [coursename, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [instructorname, setInstructorName] = useState("");
  const [instructorid, setInstructorId] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [cookie,setcookie,removecookie]=useCookies(["user"]);

  const fetchCourse = async () => {


    try {
      const response = await axios.get(
        `http://localhost:5000/course/${id}`

      )
      console.log(response.data);
      // Setting individual states
      setCourseName(response.data.coursename);
      setDescription(response.data.description);
      setCategory(response.data.category);
      setInstructorName(response.data.instructorname);
      setPrice(response.data.price);
      setInstructorId(response.data.instructorid);

    } catch (error) {
      console.log("Error fetching course:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading Course Details...</p>
      </div>
    );
  }

  console.log(cookie)

  const enrollment = async () => {

    if (!cookie.user) {
      return alert("Login to enroll")
    }
    if (cookie.user.role !== "STUDENT") {
      return alert("Instructor can't Enroll")
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/course/enrollment",
        {
          studentid:cookie.user._id,
          studentname: cookie.user.name,
          role:cookie.user.role,
          instructorid,
          instructorname,
          courseid: id,
          coursename,
          coursecategory: category,
          price
        }
      );

      console.log(res.data);
      alert(res.data.msg)
    } catch (err) {
      console.error(err);
    }
  };




  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="h-64 bg-blue-200 flex items-center justify-center text-blue-700 text-2xl font-bold">
          {coursename}
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">
            {coursename}
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-700">
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Instructor:</span> {instructorname}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ₹ {price}
            </p>
          </div>
          <button
            onClick={enrollment}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-lg font-semibold"
          >
            Enroll Now
          </button>

        </div>
      </div>
    </div>
  );
}
