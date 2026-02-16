import React from "react";
import { useCookies } from "react-cookie";

const InstructorProfile = () => {
      const [cookie,setcookie,removecookie]=useCookies(["user"]);
  return (
    <div className="max-w-md bg-white rounded-xl shadow p-6 flex-1">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="mt-4 text-xl font-semibold text-gray-800">
       {cookie.user.name}
        </h2>
        <p className="text-sm text-gray-500"> {cookie.user.role}</p>
      </div>

      {/* Profile Details */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">User ID</span>
          <span className="font-medium text-gray-800">{cookie.user._id}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Role</span>
          <span className="font-medium text-gray-800">{cookie.user.role}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Name</span>
          <span className="font-medium text-gray-800">{cookie.user.name}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Email</span>
          <span className="font-medium text-gray-800">
            {cookie.user.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
