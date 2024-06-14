import React from "react";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaUserCircle,
  FaYoutube,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="fixed w-full bg-white px-2 py-4 flex justify-between items-center z-20">
      <div className="flex justify-center items-center gap-4 text-2xl">
        <FaBars onClick={handleMenu} className="cursor-pointer" />
        <div className="flex justify-center items-center gap-1">
          <FaYoutube className="text-red-400 text-3xl" />
          <span>YouTube</span>
        </div>
      </div>
      <div className="flex items-center ">
        <input
          type="text"
          placeholder="Search"
          className="border-2 w-[22rem]  p-2 pl-4 border-gray-600 focus:outline-none rounded-l-full"
        />
        <div className="p-2 px-4 border-2 border-l-0 border-gray-600 text-gray-500  rounded-r-full">
          <FaSearch size={24} />
        </div>
      </div>
      <div className="pr-4">
        <FaUserCircle size={24} />
      </div>
    </div>
  );
};

export default Header;
