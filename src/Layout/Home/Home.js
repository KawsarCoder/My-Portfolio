import React from "react";
import Projects from "../Projects/Projects";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              src="https://i.ibb.co/vwtKBwt/kawsir.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold">Hello! I am MD Kawsar</h1>
            <p className="py-6">Front End Web Developer</p>
            <button className="btn btn-primary">Hire me</button>
          </div>
        </div>
      </div>
      {/* Project section  */}
      <div className="pb-10">
        <Projects></Projects>
      </div>
      {/* Contact me section */}

      <div className="contact">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
