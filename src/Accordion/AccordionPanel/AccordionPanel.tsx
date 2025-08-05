import { useState } from "react";
import "./AccordionPanel.css";

export const AccordionPanel = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => setExpanded((prev) => !prev);

  return (
    <div className="accordionPanel">
      <div className="accordionPanelHeader">
        <h3 className="accordionPanelHeaderTitle">{title}</h3>
        <button onClick={handleClick}>{expanded ? "^" : "v"}</button>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
};
