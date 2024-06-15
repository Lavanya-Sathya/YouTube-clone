import React from "react";
import { setIsSearchTrue, setSearchQuery } from "../utils/searchSlice";
import { useDispatch } from "react-redux";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="px-3 py-2 bg-gray-200 rounded-xl"
      onClick={() => {
        dispatch(setIsSearchTrue());
        dispatch(setSearchQuery(name.toLowerCase()));
      }}
    >
      {name}
    </button>
  );
};

export default Button;
