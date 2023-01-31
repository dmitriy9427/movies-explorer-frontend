import React from "react";
import Deadlines from "./Deadlines/Deadlines";
import DiplomAbout from "./DiplomAbout/DiplomAbout";
import Promo from "./Promo/Promo";
import "./AboutProject.scss";

const AboutProject = () => {
  return (
    <div id="about-project" className="about-projects">
      <Promo title="О проекте" />
      <DiplomAbout />
      <Deadlines />
    </div>
  );
};

export default AboutProject;
