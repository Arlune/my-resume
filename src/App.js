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
          développeuse web <br />
          scrum master <br />
          assistante chef de projet <br />
          (web, application, jeu vidéo)
        </div>

        <div className="name">
          <h1>morgane gaillard</h1>
        </div>

        <div className="about">
          <h2>à propos</h2>
          <p>
            Après quatre années dans le Jeu Vidéo en tant qu'Artiste 3D puis chef d'équipe, je souhaite m'orienter dans
            le développement Web agile. Avec mon expérience artistique et de management d'équipe, je veux travailler au
            sein d'une équipe de développement agile et aider à supprimer les obstacles afin que l'équipe travaille dans
            les meilleures conditions possibles.
          </p>
        </div>

        <div className="contact">
          <h2>contact</h2>
          <p>
            8 quai Jules Courmont, 69002 Lyon <br />
            <a href="mailto:arlun3d@gmail.com">arlun3d@gmail.com</a> <br />
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
