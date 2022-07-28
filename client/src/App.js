import React, { useState } from "react";
import Homepage from "./components/Homepage";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/style.css";

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

  return (
    <div>
      <Nav />
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
      <Homepage
        API_KEY={API_KEY}
        result={result}
        setResult={setResult}
        input={input}
        setInput={setInput}
        DisplayVideos={DisplayVideos}
        count={count}
      />
      <Footer />
    </div>
  );
}

export default App;
