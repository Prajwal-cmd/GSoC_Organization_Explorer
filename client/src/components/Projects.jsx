import React from "react";
import Project from "./Project";

const Projects = ({ year, project }) => {
  return (
    <div className="md:w-3/4 w-full p-2 mx-auto">
      <div className=" my-2  text-center">
        <h1 className="text-2xl bg-orange-300 text-black font-semibold">
          {year}
        </h1>
      </div>
      <div className="w-full p-3">
        <h3 className="text-gray-500">
          Number of Projects : {project?.num_projects}
        </h3>
        <div className="  text-gray-700 text-xs max-w-full ">
          <a
            href={project?.projects_url}
            className="inline-block max-w-full overflow-hidden  text-blue-500"
          >
            {project?.projects_url}
          </a>
        </div>
        {project && project?.projects?.map((data,i)=>(
            <Project key={i} data={data}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
