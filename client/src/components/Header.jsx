import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../slice/OrgSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pageSearch, setPageSearch] = useState("");
  const handleSearch = () => {
    const searchItem = encodeURIComponent(pageSearch);
    dispatch(setSearch(searchItem));
    navigate("/")
  };
  return (
    <div className="sticky top-0 z-10 bg-blue-500 h-16 w-full flex justify-around items-center">
      <div>
        <h3 className="text-white text-2xl h-full mx-4 hidden md:block font-semibold ">
          Explore GSoC Organizations
        </h3>
      </div>
      <div className="">
        <div className="flex items-center bg-white rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Org, tech, category & more"
            className="w-full py-2 px-4 rounded-l-lg focus:outline-none"
            onChange={(e) => setPageSearch(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-lg m-1  hover:bg-blue-600 transition-colors duration-300"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div>
        <button
          className="flex items-center text-white gap-1 p-4 bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => navigate("/")}
        >
          <IoMdHome className="text-2xl" />
          <div className="text-xl">Home</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
