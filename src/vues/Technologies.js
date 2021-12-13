import React from "react";
import Tooltip from "../components/Tooltip";

function Technologies() {
  return (
    <div className="technologies">
      <h2>technologies</h2>
      <ul>
        <li>Notion {Tooltip("Gestion des projets, tâches, deadlines, etc.")}</li>
        <li>Figma</li>
        <li>CSS / HTML</li>
        <li>React</li>
        <li>Git</li>
        <li>Suite Adobe : Ai Id, Ps {Tooltip("Photoshop, Illustrator, InDesign")}</li>
      </ul>
    </div>
  );
}

export default Technologies;
