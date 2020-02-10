import React from "react";
import Tooltip from "../components/Tooltip";

function Technologies() {
  return (
    <div className="technologies">
      <h2>technologies</h2>
      <ul>
        <li>CSS / HTML</li>
        <li>React</li>
        <li>Git</li>
        <li>Jira / TeamGantt</li>
        <li>Confluence</li>
        <li>Suite Adobe : Ai Id, Ps {Tooltip("Photoshop, Illustrator, InDesign")}</li>
        <li>Unity</li>
      </ul>
    </div>
  );
}

export default Technologies;
