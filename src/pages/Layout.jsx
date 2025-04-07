import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import React from "react";

const Layout = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 m-auto transition-transform duration-300 transform shadow-2xl container-fluid bg-amber-50">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://www.transparentpng.com/thumb/user/female-user-transparent-profile--YRxKR2.png"
            alt="Logo"
            className="w-10 h-10 mr-3"
          />
          <span className="text-xl font-bold">
            {" "}
            <Link to="/" className="hover:text-amber-600">
              My Website
            </Link>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-amber-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-amber-600">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-amber-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="px-4 py-2 text-white transition rounded-md cursor-pointer bg-amber-500 hover:bg-amber-600"
          >
            Login Here
          </Link>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
