import React from "react";
import { useState } from "react";

function Projets() {
  const [isDisplayingMore, setIsDisplayingMore] = useState([false, false, false]);

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
    <div className="projets">
      <h2>projets</h2>
      <ul className="projects-containter">
        <li onClick={() => toggleDisplayMore(0)} className="more-info">
          <h3>
            Hygie <em>(web app)</em>
          </h3>
          <h5>février 2019 - juin 2019 / lyon</h5>
          <h6>Assistante chef de projet</h6>
          <p>
            Création d’une application d’apprentissage médicale à destination des professionnels de santé. <br />
            Méthodologie : Kanban <br />
            Technologies : Angular / NodeJs
          </p>
          {displayMore(
            0,
            "Pendant plusieurs mois, en bénévolat, j'ai contribué à faire avancer un projet d'application d'apprentissage médicale. Cette application destinée aux professionnels de santé, leur permettait d'apprendre avec des QCM ou des questions libres, mais également la possibilité de créer des questions ainsi qu'un forum afin de discuter sur des sujets médicaux. J'ai contribué à la gamification du projet ainsi qu'à la gestion du projet en lui-même."
          )}
        </li>

        <li onClick={() => toggleDisplayMore(1)} className="more-info">
          <h3>
            Gear.Club Unlimited 2 <em>(Switch)</em>
          </h3>
          <h4>Eden games</h4>
          <h5>janvier 2018 - juillet 2019 / Lyon</h5>
          <h6>Lead Environment Artist</h6>
          <p>
            Management d’une équipe de 11 environment artists :
            <ul>
              <li>Gestion des contraintes techniques et graphiques</li>
              <li>Suivi et formation de l'équipe</li>
              <li>Planification et chiffrage des tâches : Jira, TeamGantt</li>
              <li>Réalisation de dossiers techniques en anglais : Confluence</li>
              <li>Agile Scrumban : daily, review, démo, retrospective</li>
              <li>Mise en place, actualisation et suivi de la Roadmap</li>
              <li>Technologie : C#</li>
            </ul>
          </p>
          {displayMore(
            1,
            "Mon post de Lead Environment Artist à débuté au début du projet Gear.Club Unlimited 2. J'ai repris l'équipe d'artiste au complet sous ma charge et veillée au bon fonctionnement de celle-ci. J'ai créée, planifiée, assignée et assistée au suivi et validation des tâches. Pour moi le bien-être de mon équipe était essentiel, pour cela j'ai énormément communiqué avec eux dans un esprit positif."
          )}
        </li>

        <li onClick={() => toggleDisplayMore(2)} className="more-info">
          <h3>
            Gear.Club Unlimited <em>(Switch)</em> & <br />
            Gear.Club <em>(IOS / Android)</em>
          </h3>
          <h4>Eden games</h4>
          <h5>2015 - 2018 / Lyon</h5>
          <h6>Environment Artist</h6>
          <ul>
            <li>Réalisation d'assets graphiques</li>
            <li>Habillage de multiples courses</li>
            <li>Planification et distribution des tâches : Trello</li>
            <li>Gestion, formation et suivi de stagiaires</li>
          </ul>
          {displayMore(
            2,
            "Après un stage de 6 mois chez Eden games, à la suite de mon école, j'ai été Environment Artist sur les projets Gear.Club et Gear.Club Unlimited. J'ai principalement créé, texturé et integré des assets graphiques, mais j'ai également pris en charge la formation et le suivi les stagiaires."
          )}
        </li>
      </ul>
    </div>
  );
}

export default Projets;
