import React from "react";
import "./Promo.scss";

function Promo(props) {
  return (
    <div className="promo">
      <h3 className="promo__title">{props.title}</h3>
    </div>
  );
}

export default Promo;
