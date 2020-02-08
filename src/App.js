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
    <div className="App">
      <header>
        <h1>morgane gaillard</h1> <br />
        <h2>contact</h2>
        <p>
          8 quai Jules Courmont, 69002 Lyon <br />
          arlun3d@gmail.com <br />
          06 67 44 81 68 <br />
          artstation.com/arlun
        </p>
      </header>

      <div className="jobs-names">
        développeuse web <br />
        scrum master <br />
        assistante chef de projet <br />
        (web, application, jeu vidéo)
      </div>

      <div className="about">
        <h2>à propos</h2>
        <p>
          avec mon expérience de management d’équipe d’artistes dans le Jeu Vidéo, je souhaite approfondir et apporter
          mes connaissances dans la gestion de projet tout en respectant mes valeurs éthiques et responsables.
        </p>
      </div>

      {Projets()}
      {Valeurs()}
      {Formations()}
      {Compétences()}
      {Technologies()}
      {Hobbies()}
    </div>
  );
}

export default App;
