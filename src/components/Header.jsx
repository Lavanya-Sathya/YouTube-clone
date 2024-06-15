import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaUserCircle, FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/Constant";
import {
  cacheResult,
  setIsSearchTrue,
  setSearchQuery,
} from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  // toggle menu
  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  // usestate for seach results
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);

  // fetch cached search from redux store
  const cacheSearch = useSelector((store) => store.search.cacheSearch);
  const searchQuery = useSelector((store) => store.search.searchQuery);

  useEffect(()=>{
    setSearch(searchQuery);
  },[searchQuery])
  // search suggestions
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSearch[search]) {
        setSuggestions(cacheSearch[search]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [search]);

  // function to get the search suggestions
  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + search);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
    // cache the suggestions in redux store
    dispatch(cacheResult({ [search]: jsonData[1] }));
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
      <div>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            // onBlur={() => setShowSuggestion(false)}
            className="border-2 w-[22rem]  p-2 pl-4 border-gray-600 focus:outline-none rounded-l-full"
          />
          <div className="p-2 px-4 border-2 border-l-0 border-gray-600 text-gray-500  rounded-r-full">
            <FaSearch
              size={24}
              className="hover:scale-125 cursor-pointer"
              onClick={() => {
                dispatch(setIsSearchTrue());
                dispatch(setSearchQuery(search));
                setShowSuggestion(false);
              }}
            />
          </div>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute bg-white rounded-xl shadow-xl w-[22rem] px-2 py-4">
            {suggestions?.map((item, idx) => (
              <li
                key={idx}
                className="py-2 px-3 cursor-pointer rounded-lg hover:bg-slate-50"
                onClick={() => {
                  setSearch(item);
                  setShowSuggestion(false);
                }}
                onBlur={() => setShowSuggestion(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="pr-4">
        <FaUserCircle size={24} />
      </div>
    </div>
  );
};

export default Header;
