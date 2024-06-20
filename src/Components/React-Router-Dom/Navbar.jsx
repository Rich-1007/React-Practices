import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-400 h-20 flex flex-row justify-around text-white items-center">
        <div className="flex font-bold text-4xl">
          <span>YourLogo</span>
        </div>
        <div className="flex flex-row gap-6 text-xl">
          <span className="hover:text-orange-400 duration-300 cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-orange-700" : "text-white"}`
              }
              to="/"
            >
              Home
            </NavLink>
          </span>
          <span className="hover:text-orange-400 duration-300 cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-700" : "text-white"
              }
              to="/about"
            >
              about
            </NavLink>
          </span>

          <span className="hover:text-orange-400 duration-300 cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-orange-700" : "text-white"}`
              }
              to="/contact"
            >
              Contact - Us
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
