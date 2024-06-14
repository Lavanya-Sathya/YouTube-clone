import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  console.log("import.meta.env.GOOGLE_API_KEY", import.meta.env.GOOGLE_API_KEY);
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
