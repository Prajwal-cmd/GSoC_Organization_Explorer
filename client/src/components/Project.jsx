import React, { useEffect, useRef } from 'react';

const Project = ({ data }) => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current && data?.description) {
      // Clear any existing content
      descriptionRef.current.innerHTML = '';

      // Create a div element and set its innerHTML
      const descriptionElement = document.createElement('div');
      descriptionElement.innerHTML = data.description;

      // Append the newly created element to the ref
      descriptionRef.current.appendChild(descriptionElement);
    }
  }, [data?.description]);

  return (
    <div className='w-full p-2 bg-slate-300 m-3 shadow-sm'>
      {data?.title && (
        <div className='flex flex-wrap items-center m-1 justify-start'>
          <span className='font-semibold mr-2'>Title: </span>
          <span>{data?.title}</span>
        </div>
      )}
      {data?.student_name && (
        <div className='flex flex-wrap m-1 items-center justify-start'>
          <span className='mr-2 font-semibold'>Student Name: </span>
          <span>{data?.student_name}</span>
        </div>
      )}
      {data?.project_url && (
        <div className='flex flex-wrap m-1 items-center justify-start text-xs'>
          <span className='font-semibold mr-2'>Project url: </span>
          <a href={data?.project_url} className='overflow-hidden text-blue-500'>
            {data?.project_url}
          </a>
        </div>
      )}
      {data?.description && (
        <div className='flex flex-wrap m-1 items-center justify-start'>
          <span className='mr-2 font-semibold'>Description: </span>
          <div ref={descriptionRef}></div>
        </div>
      )}
      {data?.code_url && (
        <div className='flex flex-wrap m-1 items-center justify-start text-xs'>
          <span className='font-semibold mr-2'>Code url: </span>
          <a href={data?.code_url} className='overflow-hidden text-blue-500'>
            {data?.code_url}
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
