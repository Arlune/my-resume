import React from "react";
import Tooltip from "../components/Tooltip";

function Hobbies() {
  return (
    <div className="hobbies">
      <h2>hobbies</h2>
      <ul>
        <li>Musique {Tooltip("J'aime la musique")}</li>
        <li>Modélisme</li>
        <li>Jeux vidéo</li>
        <li>Développement personnel, bien-être</li>
        <li>Films, séries</li>
        <li>Alimentation, cuisine</li>
      </ul>
    </div>
  );
}

export default Hobbies;
