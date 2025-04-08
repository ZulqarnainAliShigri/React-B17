import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">About TravelEase</h3>
            <p className="mb-4 text-gray-400">
              We are a premier travel agency dedicated to creating unforgettable
              experiences for our clients around the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-500" />
                <span className="text-gray-400">
                  123 Travel Street, Suite 100
                  <br />
                  Double Road Rwp.
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-amber-500" />
                <span className="text-gray-400">+92 349 7001241</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-amber-500" />
                <span className="text-gray-400">info@travelease.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest travel deals and
              inspiration.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button className="px-4 py-2 text-white transition-colors duration-300 rounded-r-lg cursor-pointer bg-amber-500 hover:bg-amber-600">
                <FaEnvelope />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-gray-400 md:mb-0">
              © {new Date().getFullYear()} TravelEase. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
