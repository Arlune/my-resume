import React from "react";
import "./App.css";
import Projets from "./vues/Projets";
import Valeurs from "./vues/Valeurs";
import Formations from "./vues/Formations";
import Compétences from "./vues/Compétences";
import Technologies from "./vues/Technologies";
import Hobbies from "./vues/Hobbies";

function App() {
  return (
    <div>
      <div className="container">
        <div className="header">
          NB: Cliquez sur les différentes expériences ou formations pour en apprendre davantage
        </div>
        <div className="jobs-names">
          Infographiste
          <br />
          Product Manager, Product Owner <br />
          <i>(web, application, jeu vidéo)</i>
        </div>

        <h1 className="name">
          <div>morgane</div>
          <div>gaillard</div>
        </h1>

        <div className="about">
          <h2>à propos</h2>
          <p>
            Après quatre années dans le Jeu Vidéo en tant qu'Artiste 3D. Je suis depuis plus d'une année au sein de
            l'entreprise IOmentum en tant qu'infographiste mais également et surtout en tant que Product Manager.
            <span className="mobil-hide">
              <br />
              Avec mon expérience artistique et de management d'équipe, je peux travailler au sein d'une équipe de
              développement agile et aider à supprimer les obstacles afin que l'équipe travaille dans les meilleures
              conditions possibles. <br />
              <br />
              Autonome, rigoureuse et organisée, j’aime apprendre, avoir des initiatives et proposer de nouvelles idées.
            </span>
          </p>
        </div>

        <div className="contact">
          <h2>contact</h2>
          <p>
            43 rue Thomas Blanchet, 69008 LYON
            <br />
            <a href="mailto:morgane.gaillard@iomentum.com">morgane.gaillard@iomentum.com</a> <br />
            06 67 44 81 68 <br />
            <a href="https://www.artstation.com/arlun" target="_blank">
              artstation.com/arlun
            </a>
            <br />
            <a href="https://github.com/Arlune" target="_blank">
              github.com/Arlune
            </a>
          </p>
        </div>

        {Projets()}
        {Formations()}
        {Technologies()}
        {Compétences()}
        {Hobbies()}
        {Valeurs()}
      </div>
    </div>
  );
}

export default App;
