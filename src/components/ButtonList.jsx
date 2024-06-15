import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setIsSearchFalse, setSearchQuery } from "../utils/searchSlice";

const ButtonList = () => {
  const list = [
    "Songs",
    "Gaming",
    "Live",
    "Kids",
    "Animation",
    "Cricket",
    "Cooking",
    "Comedy",
    "Sports",
    "Mantras",
    "Drama",
    "Science",
  ];
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2">
      <button
        className="px-3 py-2 bg-gray-200 rounded-xl"
        onClick={() => {
          dispatch(setIsSearchFalse());
          dispatch(setSearchQuery(" "));
        }}
      >
        All
      </button>
      {list.map((item, idx) => (
        <Button key={idx} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
