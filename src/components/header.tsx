import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center">
      <Link to="/">OptomTools</Link>
    </div>
  );
};

export default Header;
