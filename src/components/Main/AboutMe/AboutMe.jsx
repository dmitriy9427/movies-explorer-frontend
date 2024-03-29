import React from "react";
import Promo from "../AboutProject/Promo/Promo";
import Portfolio from "./Portfolio/Portfolio";
import StudentInfo from "./StudentInfo/StudentInfo";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="student">
      <Promo title="Студент" />
      <StudentInfo />
      <Portfolio />
    </section>
  );
}

export default AboutMe;
