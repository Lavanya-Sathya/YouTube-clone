import React from "react";
import { FaStream } from "react-icons/fa";
import { FaHouse, FaVideo } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="z-20 fixed left-0 w-[180px] px-2 shadow-xl bg-white min-h-full top-16">
      <ul className="px-1 py-2 flex flex-col justify-center text-lg border-b-2">
        <li className="p-1">
          <Link to="/" className="flex items-center gap-2">
            <FaHouse />
            <span>Home</span>
          </Link>
        </li>
        <li className="p-1">
          <Link to="/" className="flex items-center gap-2">
            <FaStream />
            <span>Shorts</span>
          </Link>
        </li>
        <li className="p-1">
          <Link to="/" className="flex items-center gap-2">
            <FaVideo />
            <span>Subscription</span>
          </Link>
        </li>
      </ul>
      <ul className="px-1 py-2 flex flex-col justify-center text-lg ">
        <li className="p-1">
          <Link to="/" className="flex items-center gap-2">
            <FaHouse />
            <span>Library</span>
          </Link>
        </li>
        <li className="p-1">
          <Link to="/" className="flex items-center gap-2">
            <FaStream />
            <span>History</span>
          </Link>
        </li>
        <li className="p-1">
          <Link to="/" className="flex items-center gap-2">
            <FaVideo />
            <span>Your Videos</span>
          </Link>
        </li>
        <li className="p-1">
          <Link to="/" className="flex items-center gap-2">
            <FaVideo />
            <span>Watch Later</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
