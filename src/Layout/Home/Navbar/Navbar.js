import React from "react";
import Pdf from "react-to-pdf";
import { Link } from "react-router-dom";

const ref = React.createRef();

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/projects">Projects</Link>
              </li>

              <li>
                <Link to="/about">About me</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Md. Kawsar
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="absolute mb-[1500px]" ref={ref}>
          <img src="https://i.ibb.co/x1pC3j6/Resume.png" alt="" />
        </div>
        <div className="navbar-end">
          <Pdf targetRef={ref} filename="Kawsar-resume.pdf">
            {({ toPdf }) => (
              <Link to="/" className="btn" onClick={toPdf}>
                Get Resume
              </Link>
            )}
          </Pdf>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
