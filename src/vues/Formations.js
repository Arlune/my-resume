import React from "react";
import { useState } from "react";

function Formations() {
  const [isDisplayingMore, setIsDisplayingMore] = useState([false, false, false, false]);

  function displayMore(i, message) {
    if (isDisplayingMore[i]) {
      return <div>{message}</div>;
    } else {
      return null;
    }
  }

  function toggleDisplayMore(i) {
    isDisplayingMore[i] = !isDisplayingMore[i];
    setIsDisplayingMore([...isDisplayingMore]);
  }

  return (
    <div className="formations">
      <h2>formations</h2>
      <ul>
        <li onClick={() => toggleDisplayMore(0)} className="more-info">
          <h3>Développement Front-End</h3>
          <h5>Développeuse web</h5>
          <h6>En cours</h6>
          {displayMore(
            0,
            "En auto-formation depuis plusieurs mois, je me forme sur React et tous les outils lié au développement web : HTML/CSS, Github"
          )}
        </li>

        <li onClick={() => toggleDisplayMore(1)} className="more-info">
          <h3>Certification PSM1</h3>
          <h5>scrum master</h5>
          <h6>En cours</h6>
          {displayMore(
            1,
            "Lectures, participation à des Meetups, visionnage de vidéo autour de l'agilité en vue de passer la certification PSM1"
          )}
        </li>

        <li onClick={() => toggleDisplayMore(2)} className="more-info">
          <h3>Gamagora</h3>
          <h5>2014 - 2015 / Lyon</h5>
          <h6>Étudiante 3D Artist</h6>
          {displayMore(
            2,
            "Licence d'une année de formation à l'infographie 3D spécialisée dans le Jeu Vidéo. Réalisation d'un projet de fin d'étude, Féline Good, avec une équipe de Développeurs et de Game Designers. Technologies : Maya, Zbrush, Photoshop, UnReal Engine"
          )}
        </li>

        <li onClick={() => toggleDisplayMore(3)} className="more-info">
          <h3>E-Artsup</h3>
          <h5>2011 - 2014 / Lyon</h5>
          <h6>Étudiante en infographie</h6>
          {displayMore(
            3,
            "Licence en trois ans à l'infographie générale. Dessin traditionnel, modèle vivant, typograpghie, perspective, 3D, game-design. Technologies : Photoshop, Illustrator, InDesign, HTML/CSS, C4D, 3DsMax"
          )}
        </li>
      </ul>
    </div>
  );
}

export default Formations;
