import axios from "axios";
// const API_URL = "https://fake-yt.herokuapp.com/api/collection";
const API_URL = "https://fake-yt-79b876f4cb2d.herokuapp.com/api/collection";

class CollectionService {
  get() {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL, {
      headers: {
        Authorization: token,
      },
    });
  }
  post(channelTitle, imgURL, title, videoURL) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      { channelTitle, imgURL, title, videoURL },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  delete(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.delete(API_URL + "/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new CollectionService();
