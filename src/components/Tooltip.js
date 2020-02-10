import React from "react";
import ReactTooltip from "react-tooltip";
import info from "../assets/info.svg";

function Tooltip(message) {
  return (
    <span>
      <a data-tip={message}>
        <img src={info} className="info" alt="info" />
      </a>
      <ReactTooltip place="right" type="info" effect="solid" />
    </span>
  );
}

export default Tooltip;
