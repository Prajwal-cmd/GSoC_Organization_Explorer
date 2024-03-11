import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppLayout from "../Layout/AppLayout";
import { useNavigate } from "react-router-dom";
import Projects from "../components/Projects";
import Loader from "../components/Loader";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [project, setProject] = useState(null);
  const [yearKey,setYearKey]=useState([])
  const [error,setError]=useState("")

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/detail?id=${id}`);
      setProject(response.data);
      const y = Object.keys(response.data?.years || {});
      const year = y.filter(i => i !== "_id");
      setYearKey(year);
      
    } catch (error) {
      setError(error)
    }
  };
  fetchData();
}, [id]);


if(error){
      return <h1 className="text-2xl text-center font-bold">Error Getting Try Again </h1>;
    }
  
  return (
    <div className="p-4 w-full  bg-gray-100" style={{ height: 'calc(100% - 64px)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          {project ? <h1 className="text-2xl font-bold">{project.name} </h1>: <Loader />}
        </div>
        {project && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={project.image_url}
                alt="Project Image"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
            <div>
              <p className="text-lg text-gray-800 mb-4">{project.description}</p>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Category:</h2>
                <p>{project.category}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Email:</h2>
                <p>{project.contact_email}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Topics:</h2>
                <ul className="flex gap-2 flex-wrap">
                  {project.topics.map((topic, index) => (
                    <li className="mx-2" key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Technologies:</h2>
                <ul className="flex gap-2 flex-wrap">
                  {project.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <h2 className="font-lg">

     {
        project && yearKey.map((key,i)=>(
            <Projects key={i} year={key} project={project.years?.[key]} />
        ))
     }

      </h2>
    </div>
  );
};

export default AppLayout()(Details);
