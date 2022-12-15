import React from "react";
import Promo from "../AboutProject/Promo/Promo";
import "./Techs.scss";
import TechsSection from "./TechsSection/TechsSection";

function Techs() {
  return (
    <section id="techs" className="techs__section">
      <Promo title="Технологии" />
      <TechsSection />
    </section>
  );
}

export default Techs;
