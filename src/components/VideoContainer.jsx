import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setVideos(jsonData.items);
  };
  return (
    <div className="flex flex-wrap my-4 mx-2 gap-4 ">
      {videos.map((card) => (
        <Link to={"./watch?v=" + card.id} key={card.id}>
          <VideoCard item={card} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
