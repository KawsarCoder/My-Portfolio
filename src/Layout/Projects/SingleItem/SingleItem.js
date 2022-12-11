import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleItem = () => {
  const projectsDetails = useLoaderData();
  const {
    title,
    imgone,
    imgtwo,
    imgthree,
    description,
    clientSide,
    serverSide,
    liveSide,
  } = projectsDetails;
  return (
    <div>
      <div>
        <h1 className="text-2xl text-purple-500 text-center font-bold mt-5">
          {title}
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 lg:p-10 gap-5">
          <div className="grid items-stretch">
            <img src={imgone} alt="" />
          </div>
          <div className="grid items-stretch">
            <img src={imgtwo} alt="" />
          </div>
          <div className="grid items-stretch">
            <img src={imgthree} alt="" />
          </div>
        </div>
      </div>
      <div className="card bg-neutral text-neutral-content mb-10 lg:mx-20">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={clientSide} className="btn btn-info">
              Client side
            </a>
            <div>
              {title === "Quiz Hunter" ? (
                <></>
              ) : (
                <>
                  {" "}
                  <a href={serverSide} className="btn btn-success">
                    Sever side
                  </a>
                </>
              )}
            </div>
            <a href={liveSide} className="btn btn-warning">
              Live side
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
