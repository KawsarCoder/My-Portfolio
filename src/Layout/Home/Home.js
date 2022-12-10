import React from "react";
import Projects from "../Projects/Projects";

const Home = () => {
  const clickBtn = () => {
    window.open("https://form.jotform.com/223434704837458");
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://ibb.co/98bBJTJ"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Hello! I am MD Kawsar</h1>
            <p className="py-6">Front End Web Developer</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* Project section  */}
      <div className="pb-10">
        <h3 className="text-purple-500 text-3xl text-center p-10 font-bold">
          My Project
        </h3>
        <Projects></Projects>
      </div>
      {/* Contact me  */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact with me!</h1>
            <p className="py-6">
              If you want to contact with me then send me a mail.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  <a
                    href="/"
                    onClick={clickBtn}
                    className="blank scrollbars-yes  toolbar-no w-96 h-96'"
                  >
                    Contact With me
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
