import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_ID } from "../utils/Constant";

const VideoCard = ({ item }) => {
  const { snippet } = item;
  const { channelId, channelTitle, title, thumbnails } = snippet;
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    getChannel();
  }, []);
  const getChannel = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_ID + channelId);
    const jsonData = await data.json();
    setChannel(jsonData.items[0]);
    console.log(jsonData.items[0]);
  };

  return (
    <div className="shadow-lg  min-w-[22rem] sm:w-[22rem] min-h-[20rem] ">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-xl w-full "
      />
      <div className="px-1 py-2 flex gap-4">
        <div className="w-[100px]">
          <img
            src={channel?.snippet?.thumbnails?.default?.url}
            alt="channel logo"
            className="w-[100px] rounded-full "
          />
        </div>
        <div>
          <h1 className="font-bold">{title}</h1>
          <p>{channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
