import React, { useEffect, useState } from "react";
import SingleProject from "./SingleProject/SingleProject";

const Projects = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(" https://portfolio-server-sand.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="mb-20">
      <h3 className="text-purple-500 text-3xl text-center p-10 font-bold">
        My Project
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center items-end mt-5">
        {cards.map((card) => (
          <SingleProject card={card} key={card._id}></SingleProject>
        ))}
      </div>
    </div>
  );
};

export default Projects;
