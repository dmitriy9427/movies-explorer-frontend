import React from "react";
import "./DiplomDesc.scss";

function DiplomDesc(props) {
  return (
    <div className="diplom">
      <h3 className="diplom__title">{props.title}</h3>
      <p className="diplom__description">{props.description}</p>
    </div>
  );
}

export default DiplomDesc;
