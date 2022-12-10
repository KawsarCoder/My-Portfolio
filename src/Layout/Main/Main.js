import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import NavbarTab from "../Home/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <NavbarTab></NavbarTab>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
