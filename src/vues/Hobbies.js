import React from "react";
import Tooltip from "../components/Tooltip";

function Hobbies() {
  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        <li>musique {Tooltip("J'aime la musique")}</li>
        <li>modélisme</li>
        <li>jeux vidéo</li>
        <li>développement personnel, bien-être</li>
        <li>films, séries</li>
        <li>alimentation, cuisine</li>
      </ul>
    </div>
  );
}

export default Hobbies;
