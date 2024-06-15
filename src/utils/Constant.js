export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${
  import.meta.env.VITE_GOOGLE_API_KEY
}`;

export const YOUTUBE_SUGGESTION_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${
  import.meta.env.VITE_GOOGLE_API_KEY
}&q=`;

export const YOUTUBE_CHANNEL_ID = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${
  import.meta.env.VITE_GOOGLE_API_KEY
}&id=`;
