import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: for hamburger icons

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-4 m-auto shadow-2xl bg-amber-50 container-fluid">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://www.transparentpng.com/thumb/user/female-user-transparent-profile--YRxKR2.png"
            alt="Logo"
            className="w-10 h-10 mr-3"
          />
          <span className="text-xl font-bold">
            <Link to="/" className="hover:text-amber-600">
              My Website
            </Link>
          </span>
        </div>

        {/* Hamburger Menu Icon (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-amber-600 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation (Hidden on mobile, shown on md+) */}
        <ul className="hidden space-x-6 text-lg font-medium md:flex">
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

        {/* Login Button (Hidden on mobile, shown on md+) */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="px-4 py-2 text-white rounded-md bg-amber-500 hover:bg-amber-600"
          >
            Login Here
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="p-4 space-y-3 text-center shadow-md md:hidden bg-amber-100">
          <Link
            to="/"
            className="block hover:text-amber-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="block hover:text-amber-600"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="block hover:text-amber-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="inline-block px-4 py-2 mt-2 text-white rounded-md bg-amber-500 hover:bg-amber-600"
            onClick={() => setMenuOpen(false)}
          >
            Login Here
          </Link>
        </div>
      )}

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
