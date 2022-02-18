import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Fragment>
          <li>
            <Link to="/">OptomCalc</Link>
          </li>
          <li>
            <Link to="/cylindrical_transposition">
              Cylindrical Transposition
            </Link>
          </li>
        </Fragment>
      </ul>
    </nav>
  );
};

export default Navbar;
