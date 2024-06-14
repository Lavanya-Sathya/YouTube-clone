import React from "react";

const VideoCard = ({ item }) => {
  const { snippet, statistics } = item;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-lg  min-w-[22rem] sm:w-[22rem] min-h-[20rem] ">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-xl w-full "
      />
      <div className="px-1 py-2">
        <h1 className="font-bold">{title}</h1>
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
