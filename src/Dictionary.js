import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, Setkeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }

  function handleKeywordChange(event) {
    Setkeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word...         🔍"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
