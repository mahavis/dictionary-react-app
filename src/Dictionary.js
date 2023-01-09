import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, Setkeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleSubmit(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSubmit);
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
    </div>
  );
}
