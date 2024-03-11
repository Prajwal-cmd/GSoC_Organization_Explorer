import React from 'react'
import {   useDispatch } from 'react-redux';
import { setYear ,setCurPage} from '../slice/OrgSlice';

const Filters = ({ filters, year }) => {
  const dispatch =useDispatch()
    return (
      <div className="flex items-center flex-wrap justify-center gap-2">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={(e) => {dispatch(setYear(filter))
            dispatch(setCurPage(1))}}
            className={`text-${filter === year ? 'white bg-orange-500' : 'orange-500'} hover:text-orange-600 hover:bg-orange-400 font-medium py-1 px-1 rounded focus:outline-none border border-orange-500 hover:border-orange-600`}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  };

export default Filters