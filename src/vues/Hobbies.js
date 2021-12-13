import React from "react";
import Tooltip from "../components/Tooltip";

function Hobbies() {
  return (
    <div className="hobbies">
      <h2>hobbies</h2>
      <ul>
        <li>
          Musique{" "}
          {Tooltip("Il m'arrive de faire de la harpe, mais j'écoute surtout beaucoup de styles musicaux différents")}
        </li>
        <li>Modélisme {Tooltip("Peinture et sculpture de figurines, principalement de l'univers Warhammer")}</li>
        <li>Jeux vidéo {Tooltip("Principalement des MMORPGs et en ce moment je suis sur World of Warcraft")}</li>
        <li>
          Développement personnel, bien-être{" "}
          {Tooltip("Je lis et visionne des vidéos sur le développement personnel et le bien-être intérieur")}
        </li>
        <li>Films, séries {Tooltip("En ce moment je regarde la série Arcane")}</li>
        <li>
          Alimentation, cuisine
          {Tooltip(
            "Depuis quelques temps je réalise mes plats moi-même, si possible végétariens voir vegans avec des produits locaux"
          )}
        </li>
      </ul>
    </div>
  );
}

export default Hobbies;
