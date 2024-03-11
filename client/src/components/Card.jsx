import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ project }) => {
    const navigate =useNavigate()
  const technologies = project?.technologies || [];
  const y = Object.keys(project?.years || {});
  const year =y.filter(i=>i!=="_id")
  

  const handleCardClick = () => {
    navigate(`/details/${project._id}`)
  };

  return (
    <div className="rounded-md lg:w-1/4 shadow-md p-4 flex flex-col max-w-sm  hover:shadow-lg cursor-pointer " onClick={handleCardClick}>
      {project?.image_url && (
        <img
          src={project.image_url}
          alt={project.name}
          className="rounded-t-md  w-full max-h-40	 object-contained"
          style={{ backgroundColor: project?.image_background_color }}
        />
      )}
      <div className="flex flex-col flex-grow">
        <h1 className="text-lg font-semibold mt-2">{project?.name}</h1>
        <p className="text-gray-600 mb-2">{project?.description}</p>
        {project?.category &&<h3 className="text-sm font-semibold">Category: {project.category}</h3>}
        <div className="flex flex-wrap">
          {technologies.map((technology, index) => (
            <span key={index} className="text-xs bg-gray-200 rounded-full px-2 py-1 m-1">
              {technology}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap">
          {year.map((y, index) => (
            <span key={index} className="text-xs text-white bg-orange-500 rounded-full px-2 py-1 m-1">
              {y}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
