import React from "react";
import Deadlines from "./Deadlines/Deadlines";
import DiplomAbout from "./DiplomAbout/DiplomAbout";
import Promo from "./Promo/Promo";
import "./AboutProject.scss";

function AboutProject() {
  return (
    <div id="about-project" className="about__projects">
      <Promo title="О проекте" />
      <DiplomAbout />
      <Deadlines />
    </div>
  );
}

export default AboutProject;
