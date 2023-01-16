import React from "react";
import Promo from "../AboutProject/Promo/Promo";
import "./Techs.scss";
import TechsSection from "./TechsSection/TechsSection";

function Techs() {
  return (
    <section id="techs" className="techs__section">
      <div className="tech">
        <Promo title="Технологии" />
        <TechsSection />
      </div>
    </section>
  );
}

export default Techs;
