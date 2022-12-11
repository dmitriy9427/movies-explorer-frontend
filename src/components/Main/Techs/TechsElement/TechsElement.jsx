import React from "react";
import "./TechsElement.scss";

function TechsElement(props) {
  return (
    <div className="techs__element">{props.technology}</div>
  );
}

export default TechsElement;
