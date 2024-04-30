import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../Store/authSlice";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  return (
    <nav className=" bg-transparent p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className=" text-gray-600 font-bold text-3xl mb-4 lg:mb-0 hover:text-indigo-600 hover:cursor-pointer">
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
            className=" text-gray-600 px-4 py-2  hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/Budget"
            className=" text-gray-600 px-4 py-2  hover:text-indigo-600"
          >
            Add Budget
          </Link>
          <Link
            to="/Expenses"
            className=" text-gray-600 px-4 py-2 hover:text-indigo-600"
          >
            Add Expenses
          </Link>
          <Link
            to="/Progress"
            className=" text-gray-600 px-4 py-2  hover:text-indigo-600"
          >
            Progress
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className=" text-gray-600 px-4 py-2  hover:text-indigo-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/Login"
              className=" text-gray-600 px-4 py-2  hover:text-indigo-600"
            >
              Login
            </Link>
          )}
          <Link
            to="/News"
            className=" text-gray-600 px-4 py-2  hover:text-indigo-600"
          >
            News
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
