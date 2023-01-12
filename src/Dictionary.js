import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, Setkeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleSubmit(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSubmit);
    let pexelsApiKey =
      "563492ad6f9170000100000121f2d5eddd1947ed888bc63d3f3f8cee";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    Setkeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>What word are you trying to understand🧠...</h1>
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="🧐Type a word... "
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">for eg: sunrise, solo, travel, variety...</div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
