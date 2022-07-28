import React from "react";

const Search = ({
  API_KEY,
  result,
  setResult,
  input,
  setInput,
  DisplayVideos,
}) => {
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="searchBox">
      <div className="searchComponent input-group mb-3   ">
        <label id="search"></label>
        <input
          onChange={inputChange}
          type="text"
          name="search"
          className="form-control "
          // placeholder="Search"
        />
        <button
          onClick={DisplayVideos}
          type="button"
          class="btn btn-outline-secondary "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
