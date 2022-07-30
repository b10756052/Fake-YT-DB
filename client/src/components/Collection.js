import React, { useEffect, useState } from "react";
import authServices from "../services/auth.services";
import { useNavigate } from "react-router-dom";
import collectionServices from "../services/collection.services";

const Collection = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    setCurrentUser(authServices.getCurrentUser());
  }, []);
  const navigate = useNavigate();
  const goLogin = () => {
    alert("導向登入頁面！");
    navigate("/login");
  };
  const goHome = () => {
    navigate("/");
  };

  let [collection, setCollection] = useState(null);
  useEffect(() => {
    if (collection === null) {
      console.log("抓collection裡面影片資料");
      collectionServices
        .get()
        .then((data) => {
          console.log("資料長這樣", data.data);
          setCollection(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const clickVideo = (e) => {
    window.open(e.currentTarget.children[2].className);
  };
  const deleteCollection = (e) => {
    // 避免Event Bubbling
    e.stopPropagation();
    console.log(e.currentTarget.parentElement.children[1].className);
    collectionServices
      .delete(e.currentTarget.parentElement.children[1].className)
      .then(() => {
        alert("刪除成功！");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ minHeight: "87.2vh" }}>
      {!currentUser && (
        <div style={{ padding: "3rem", minHeight: "90.2vh" }}>
          <h2>未登入狀態無法拜訪此頁面</h2>
          <button onClick={goLogin} className="btn btn-primary">
            前往登入
          </button>
        </div>
      )}

      {currentUser && collection == "" && (
        <div style={{ padding: "3rem" }}>
          <h1>目前暫無收藏影片！</h1>
          <br />
          <button onClick={goHome} className="btn btn-primary">
            前往收藏
          </button>
        </div>
      )}

      {currentUser && collection && collection.length != 0 && (
        <div className=" videosList">
          {collection.map((data) => {
            return (
              <div
                onClick={clickVideo}
                className="videos collectionVideos card card-body"
              >
                <h5 className="card-title">{data.title}</h5>
                <img className={data._id} src={data.imgURL} alt="影片縮圖" />
                <p className={data.videoURL}>《{data.channelTitle}》</p>
                <button
                  onClick={deleteCollection}
                  class="btn btn-outline-dark btn-sm "
                >
                  刪除
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Collection;
