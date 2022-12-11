import React from "react";

const About = () => {
  return (
    <div>
      <div className="card bg-neutral text-neutral-content my-10">
        <div className="card-body items-center text-center">
          <h2 className="card-title">About me</h2>
          <p className="w-80 text-center">
            I am determined to set myself up in this sector and obtain a
            challenging position applying creative problem solving and learn
            management skills to achieve optimum utilisation of its resources
            and maximum profits.
            <br /> <br />I am studying in computer technology at Chattogram
            Polytechnic Institute
          </p>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-purple-500 text-3xl text-center p-10 font-bold">
          Skills
        </h3>
        <div className="grid grid-cols-1 gap-10 justify-items-center">
          <div>
            <label className="mr-10" htmlFor="">
              HTML5
            </label>
            <progress
              className="progress progress-accent w-56"
              value="95"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="mr-10" htmlFor="">
              CSS3
            </label>
            <progress
              className="progress progress-primary w-56"
              value="90"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="mr-10" htmlFor="">
              JavaScript
            </label>
            <progress
              className="progress progress-secondary w-56"
              value="80"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="mr-10" htmlFor="">
              ReactJS
            </label>
            <progress
              className="progress progress-success w-56"
              value="75"
              max="100"
            ></progress>
          </div>
          <div>
            <label className="mr-10" htmlFor="">
              ExpressJS
            </label>
            <progress
              className="progress progress-info w-56"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
