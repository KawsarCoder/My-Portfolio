import React from "react";

const Projects = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 ">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Meta Tube</h2>
          <p>
            You can learn from here many things about programming. You can add
            review in any service. You also can add your service in this
            platform. You can update and delete your review
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a href="https://github.com/KawsarCoder/Meta-Tube-Client-Side">
                {" "}
                Show more
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Meta Learn</h2>
          <p>
            This site create by MD. Kawsar for education purpose. It's full
            responsive site using Tailwind css & ReactJS. It's a one page site.
            You can visit any layout without login rather get premium Firebase
            Authentication will be added You can log in with email-password,
            number & Google.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a href="https://github.com/KawsarCoder/Meta-Learn-Client-Side">
                {" "}
                Show more
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Quiz Hunter</h2>
          <p>
            It's the site of about programming quiz. You can check your ability
            by participating in quiz. You can learn about the correct answer of
            the question that's why you can learn from this.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a href="https://github.com/KawsarCoder/Quiz-Hunter">
                {" "}
                Show more
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
