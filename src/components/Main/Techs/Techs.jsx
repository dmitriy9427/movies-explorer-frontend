import React from "react";
import Promo from "../AboutProject/Promo/Promo";
import TechsSection from "./TechsSection/TechsSection";
import "./Techs.scss";

const Techs = () => {
  return (
    <section id="techs" className="techs-section">
      <div className="tech">
        <Promo title="Технологии" />
        <TechsSection />
      </div>
    </section>
  );
}

export default Techs;
