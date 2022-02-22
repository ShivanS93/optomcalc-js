import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Fragment>
          <li>
            <Link to="/cylindrical_transposition">
              Cylindrical Transposition
            </Link>
          </li>
          <li>
            <Link to="/minimum_blank_size">Minimum Blank Size</Link>
          </li>
        </Fragment>
      </ul>
    </nav>
  );
};

export default Navbar;
