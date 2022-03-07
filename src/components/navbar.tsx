import { Fragment } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      className={`border-l-2 px-4 py-2 ${
        match
          ? "border-blue-800 font-semibold text-blue-800"
          : "border-slate-100 hover: hover:border-blue-800 hover:text-blue-800"
      }`}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <CustomLink to="/cylindrical_transposition">
            Cylindrical Transposition
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/minimum_blank_size">Minimum Blank Size</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
