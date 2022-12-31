import React from "react";
import TechsElement from "../TechsElement/TechsElement";

function TechsElements() {
  return (
    <div className="techs-elements">
      <TechsElement technology="HTML" />
      <TechsElement technology="CSS" />
      <TechsElement technology="JS" />
      <TechsElement technology="React" />
      <TechsElement technology="Git" />
      <TechsElement technology="Express.js" />
      <TechsElement technology="mongoDB" />
    </div>
  );
}

export default TechsElements;
