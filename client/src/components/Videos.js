import React from "react";

const Videos = ({ data }) => {
  let videoURL = `https://www.youtube.com/watch?v=${data.id}`;
  let searchVideoURL = `https://www.youtube.com/watch?v=${data.id.videoId}`;
  const clickVideo = () => {
    if (data.id.videoId) {
      window.open(searchVideoURL);
    } else {
      window.open(videoURL);
    }
  };
  return (
    <div onClick={clickVideo} className="videos card card-body">
      <h5 className="card-title">{data.snippet.title}</h5>
      <img src={data.snippet.thumbnails.medium.url} alt="影片縮圖" />
      {data.statistics && (
        <p className="viewCount">Views : {data.statistics.viewCount}</p>
      )}
      <p>《{data.snippet.channelTitle}》</p>
    </div>
  );
};

export default Videos;
