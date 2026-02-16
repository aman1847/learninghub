import { useState } from "react";
import axios from "axios"; 
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [cookie,setcookie,removecookie]=useCookies();
    const navigate=useNavigate();
  const Submit = async (e) => {
    e.preventDefault()
    if (!password && !email) {
      alert("Please type the login details");
      return;
    }
    if (!password) {
      alert("Please type the password");
      return;
    }
    if (!email) {
      alert("Please type the email");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/login", {

        email,
        password,
        role
      });

      console.log(res.data.userdata);
      alert(res.data.msg);
      console.log(res.data)
      if(res.data.msg=="valid")
      {
       setcookie("user",res.data.userdata,{maxAge:84000})
       navigate(`/${res.data.userdata.role.toLowerCase()}`);


      }


      // clear form

      setEmail("");
      setPassword("");

    } catch (error) {
      console.log(error.message);
      alert("ttt",error.msg);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your LMS account
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={Submit}>
        {/* Register As */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Register As
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select role</option>
              <option value="STUDENT">STUDENT</option>
              <option value="INSTRUCTOR">INSTRUCTOR</option>
            </select>
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?
          <a href="#" className="text-blue-600 font-semibold ml-1 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
