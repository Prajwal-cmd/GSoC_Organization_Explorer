import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurPage } from '../slice/OrgSlice';

const Pagination = ({ curpage ,prevpage ,nextpage ,totalPages }) => {
    const dispatch = useDispatch()
  const maxNextPages = 5; 
  const nextPageButtons = Math.min(totalPages - curpage, maxNextPages);

  const renderNextPageButtons = () => {
    const nextPages = [];
    for (let i = 1; i <= nextPageButtons; i++) {
      const pageNumber = curpage + i;
      nextPages.push(
        <button
          key={pageNumber}
          className={`ml-2 px-3 py-1 border rounded-md ${curpage === pageNumber ? 'bg-blue-500 text-white' : 'bg-white'} ${curpage === pageNumber ? 'font-bold' : ''}`}
          onClick={() => dispatch(setCurPage(pageNumber))}
        >
          {pageNumber}
        </button>
      );
    }
    return nextPages;
  };

  return (
    <div className="flex justify-center mt-4 py-6">
      <button
        className="mr-2 px-3 py-1 border rounded-md bg-blue-500 text-white"
        onClick={() => dispatch(setCurPage(prevpage))}
        disabled={curpage === 1}
      >
        Prev
      </button>
      {
        totalPages==0?(<div className="px-3 py-1 border rounded-md bg-white">
        Page {1} of {1}
      </div>):(<div className="px-3 py-1 border rounded-md bg-white">
        Page {curpage} of {totalPages}
      </div>)
      }
      
      {renderNextPageButtons()}
    </div>
  );
};

export default Pagination;
