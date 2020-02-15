import React from "react";
import Tooltip from "../components/Tooltip";

function Compétences() {
  return (
    <div className="competences">
      <h2>compétences</h2>
      <ul>
        <li>Travail en équipe</li>
        <li>Management</li>
        <li>Documentation</li>
        <li>Français {Tooltip("Langue native")}</li>
        <li>Anglais {Tooltip("Parlé, écrit couramment")}</li>
      </ul>
    </div>
  );
}

export default Compétences;
