// Navbar.js
import React, {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-transparent p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className=" text-gray-600 font-bold text-3xl mb-4 lg:mb-0 hover:text-cyan-400 hover:cursor-pointer">
          Expense Tracker
        </div>
        <div className="lg:hidden">
          <button
            className=" text-gray-600 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`lg:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex items-center text-xl`}
        >
          <Link
            to="/"
            className=" text-gray-600 px-4 py-2  hover:text-cyan-400"
          >
            Home
          </Link>
          <Link
            to="/Budget"
            className=" text-gray-600 px-4 py-2  hover:text-cyan-400"
          >
            Add Budget
          </Link>
          <Link
            to="/Expenses"
            className=" text-gray-600 px-4 py-2 hover:text-cyan-400"
          >
            Add Expences
          </Link>
          <Link
            to="/Progress"
            className=" text-gray-600 px-4 py-2  hover:text-cyan-400"
          >
           Progress
          </Link>
          <Link
            to="/Login"
            className=" text-gray-600 px-4 py-2  hover:text-cyan-400"
          >
            Login
          </Link>
          <Link
            to="/News"
            className=" text-gray-600 px-4 py-2  hover:text-cyan-400"
          >
            News
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
