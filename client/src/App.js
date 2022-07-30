import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./styles/style.css";
import Regsiter from "./components/Regsiter";
import Collection from "./components/Collection";
import authServices from "./services/auth.services";

function App() {
  let [result, setResult] = useState(null);
  let [input, setInput] = useState("");
  const API_KEY = "AIzaSyDUpiUqt6l0qSiGyg2Km-4TsT-LhU7cSlk";
  let searchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=${API_KEY}`;
  const DisplayVideos = async (url) => {
    const dataFetch = await fetch(url);
    let parseData = await dataFetch.json();
    setResult(parseData);
    console.log(parseData);
    console.log(url);
  };

  // 沒意義的，只是怕觸發useEffect重複對API發送request
  const [count, setCount] = useState(0);

  let [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    setCurrentUser(authServices.getCurrentUser());
  }, []);

  return (
    <div>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              API_KEY={API_KEY}
              result={result}
              setResult={setResult}
              input={input}
              setInput={setInput}
              DisplayVideos={DisplayVideos}
              count={count}
              searchURL={searchURL}
            />
          }
        />
        <Route
          path="/Fake-YT"
          element={
            <Homepage
              API_KEY={API_KEY}
              result={result}
              setResult={setResult}
              input={input}
              setInput={setInput}
              DisplayVideos={DisplayVideos}
              count={count}
              searchURL={searchURL}
            />
          }
        />
        <Route path="/register" element={<Regsiter />} />
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/collection"
          element={
            <Collection
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
