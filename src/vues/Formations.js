import React from "react";
import { useState } from "react";

function Formations() {
  const [isDisplayingMore, setIsDisplayingMore] = useState([false, false, false, false]);

  function toggleDisplayMore(i) {
    isDisplayingMore[i] = !isDisplayingMore[i];
    setIsDisplayingMore([...isDisplayingMore]);
  }

  return (
    <div className="formations">
      <h2>formations</h2>
      <ul>
        <li onClick={() => toggleDisplayMore(0)} className="more-info">
          <p>
            <h3>Développement Front-End</h3>
            <h5>Développeuse web</h5>
            <h6>En cours</h6>
          </p>
          {isDisplayingMore[0] && (
            <div>
              En auto-formation depuis plusieurs mois, je me forme sur React et tous les outils lié au développement web
              : HTML/CSS, Github. Pour me former, j'ai fait des exercices pour le CSS et l'HTML sur les sites
              CodeCademy, FreeCodeCamp ou les introductions à React sur le site officiel. Mon conjoint qui est
              Développeurs depuis plusieurs années m'aide également en me donnant des exercices types et des conseils
              techniques ou professionnels.
            </div>
          )}
        </li>

        <li onClick={() => toggleDisplayMore(1)} className="more-info">
          <p>
            <h3>Certification PSM1</h3>
            <h5>scrum master</h5>
            <h6>En cours</h6>
          </p>
          {isDisplayingMore[1] && (
            <div>
              Lectures, participation à des Meetups, visionnage de vidéo autour de l'agilité en vue de passer la
              certification PSM1
            </div>
          )}
        </li>

        <li onClick={() => toggleDisplayMore(2)} className="more-info">
          <p>
            <h3>Gamagora</h3>
            <h5>2014 - 2015 / Lyon</h5>
            <h6>Étudiante 3D Artist</h6>
          </p>
          {isDisplayingMore[2] && (
            <div>
              Licence d'une année de formation à l'infographie 3D spécialisée dans le Jeu Vidéo. Réalisation d'un projet
              de fin d'étude, Féline Good, avec une équipe de Développeurs et de Game Designers. Technologies : Maya,
              Zbrush, Photoshop, UnReal Engine
            </div>
          )}
        </li>

        <li onClick={() => toggleDisplayMore(3)} className="more-info">
          <p>
            <h3>E-Artsup</h3>
            <h5>2011 - 2014 / Lyon</h5>
            <h6>Étudiante en infographie</h6>
          </p>
          {isDisplayingMore[3] && (
            <div>
              Licence en trois ans à l'infographie générale. Dessin traditionnel, modèle vivant, typograpghie,
              perspective, 3D, game-design. Technologies : Photoshop, Illustrator, InDesign, HTML/CSS, C4D, 3DsMax
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Formations;
