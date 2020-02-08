import React from "react";
import ReactTooltip from "react-tooltip";

function Tooltip(message) {
  return (
    <span>
      <a data-tip={message}>i</a>
      <ReactTooltip place="right" type="info" effect="solid" />
    </span>
  );
}

export default Tooltip;
