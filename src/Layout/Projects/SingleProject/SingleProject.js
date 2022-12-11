import React from "react";
import { Link } from "react-router-dom";
const SingleProject = ({ card }) => {
  const { _id, title, description } = card;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/projects/${_id}`}> Show more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
