import React from "react";
import collectionServices from "../services/collection.services";

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
  const addCollection = (e) => {
    let savedURL;
    e.stopPropagation();

    if (data.id.videoId) {
      savedURL = searchVideoURL;
    } else {
      savedURL = videoURL;
    }
    collectionServices
      .post(
        data.snippet.channelTitle,
        data.snippet.thumbnails.medium.url,
        data.snippet.title,
        savedURL
      )
      .then((videoExist) => {
        console.log(videoExist);
        if (videoExist) alert(videoExist.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data === "Unauthorized") {
          alert("未登入狀態無法收藏");
        } else {
          alert(error);
        }
      });
  };
  return (
    <div onClick={clickVideo} className="videos card card-body">
      <h5 className="card-title">{data.snippet.title}</h5>
      <img src={data.snippet.thumbnails.medium.url} alt="影片縮圖" />
      {data.statistics && (
        <p className="viewCount">Views : {data.statistics.viewCount}</p>
      )}
      <p>《{data.snippet.channelTitle}》</p>
      <button onClick={addCollection} class="btn btn-outline-dark btn-sm ">
        收藏
      </button>
    </div>
  );
};

export default Videos;
