import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-8 absolute top-24 sm:left-48">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
