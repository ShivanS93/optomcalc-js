import React from "react";
import { Link } from "react-router-dom";

const Hamburger: React.FC = () => {
  return (
    <label htmlFor="drawer">
      <svg
        xmlns="https://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </label>
  );
};

const Header: React.FC = () => {
  return (
    /* <div className="py-4 px-6 border bg-blue-800 text-white flex justify-center"> */
    <div className="py-4 border bg-blue-800 text-white flex">
      <div className="lg:hidden">
        <Hamburger />
      </div>
      <Link to="/">OptomCalc</Link>
    </div>
  );
};

export default Header;
