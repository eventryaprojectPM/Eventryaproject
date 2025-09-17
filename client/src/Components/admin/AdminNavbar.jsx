import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30">
      <Link to="/">
        <img src="/logo.jpg" alt="" className="w-10 h-10 object-cover rounded-full border-2 border-white shadow-md" />
      </Link>
    </div>
  );
};

export default AdminNavbar;
