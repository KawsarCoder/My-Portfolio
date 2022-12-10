import React from "react";
import Pdf from "react-to-pdf";
import { Link } from "react-router-dom";

const ref = React.createRef();

const Navbar = () => {
  const clickBtn = () => {
    window.open("https://form.jotform.com/223434704837458");
  };
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
                <Link to="/">Projects</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/" className="justify-between">
                  About Me
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link to="/">Education</Link>
                  </li>
                  <li>
                    <Link to="/">Skills</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Contact me</Link>
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
            <li tabIndex={0}>
              <Link to="/">
                About Me
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="/">Education</Link>
                </li>
                <li>
                  <Link to="/">Skills</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" onClick={clickBtn}>
                Contact me
              </a>
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
