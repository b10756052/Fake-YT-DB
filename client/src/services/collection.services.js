import axios from "axios";
const API_URL = "http://localhost:8080/api/collection";

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
  post() {}
}

export default new CollectionService();
