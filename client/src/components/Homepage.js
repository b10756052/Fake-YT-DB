import React, { useEffect } from "react";
import Videos from "./Videos";
import Search from "./Search";

const Homepage = ({
  API_KEY,
  result,
  setResult,
  input,
  setInput,
  DisplayVideos,
  count,
  searchURL,
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
      <Search
        API_KEY={API_KEY}
        result={result}
        setResult={setResult}
        input={input}
        setInput={setInput}
        DisplayVideos={() => {
          DisplayVideos(searchURL);
        }}
      />
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
