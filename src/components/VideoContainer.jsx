import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEOS_API } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isSearch = useSelector((store) => store.search.isSearch);
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const [errorDetails, setErrorDetails] = useState([]);
  useEffect(() => {
    if (isSearch) {
      getSearchVideos();
    } else {
      getVideo();
    }
  }, [searchQuery]);
  // get all the video

  const getVideo = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const jsonData = await data.json();
      setVideos(jsonData.items);
    } catch (error) {
      console.log(error);
      setErrorDetails(error);
    }
  };
  // get Search Video
  const getSearchVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const jsonData = await data.json();
      setVideos(jsonData.items);
    } catch (error) {
      console.log(error);
      setErrorDetails(error);
    }
  };
  return (
    <ErrorBoundary>
      {videos?.length > 0 ? (
        <div className="flex flex-wrap my-4 mx-2 gap-4">
          {videos.map((card, idx) => {
            const cardId = isSearch ? card.id?.videoId : card.id;
            return (
              cardId && (
                <Link to={"./watch?v=" + cardId} key={cardId + "-" + idx}>
                  <VideoCard item={card} />
                </Link>
              )
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center mt-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-500 mb-2">Oops!</h1>
            <p className="text-gray-600">Failed to fetch videos.</p>
            {/* <p className="text-gray-600">{errorDetails}</p> */}

            <button
              onClick={() => {
                if (isSearch) {
                  getSearchVideos();
                } else {
                  getVideo();
                }
              }}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </ErrorBoundary>
  );
};

export default VideoContainer;
