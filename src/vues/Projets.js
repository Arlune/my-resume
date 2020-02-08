import React from "react";

function Projets() {
  return (
    <div>
      <h2>projets</h2>
      <ul className="projects-containter">
        <li>
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
        </li>

        <li>
          <h3>
            Gear.Club Unlimited 2 <em>(Switch)</em>
          </h3>
          <h4>Eden games</h4>
          <h5>janvier 2018 - juillet 2019 / Lyon</h5>
          <h6>Lead Environment Artist</h6>
          <p>
            management d’une équipe de 11 environment artists :
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
        </li>

        <li>
          <h3>
            Gear.Club Unlimited <em>(Switch)</em> <br />
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
        </li>
      </ul>
    </div>
  );
}

export default Projets;
