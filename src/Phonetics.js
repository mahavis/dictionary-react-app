import React from "react";
import "./Phonetic.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        🔉👂
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
