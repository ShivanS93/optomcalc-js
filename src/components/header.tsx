import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Link to="/">OptomCalc</Link>
    </div>
  );
};

export default Header;
