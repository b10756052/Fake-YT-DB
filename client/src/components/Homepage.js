import React, { useEffect } from "react";
import Videos from "./Videos";

const Homepage = ({
  API_KEY,
  result,
  setResult,
  input,
  setInput,
  DisplayVideos,
  count,
}) => {
  const popularURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=TW&key=${API_KEY}&maxResults=20`;

  useEffect(() => {
    if (result === null) {
      DisplayVideos(popularURL);
    } else {
      console.log("result state 不為空");
    }
  }, [count]);

  return (
    <div>
      <div className="videosList">
        {result &&
          result.items.map((data) => {
            return <Videos data={data} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
