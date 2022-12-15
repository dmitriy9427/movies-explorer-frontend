import React from "react";
import Promo from "../AboutProject/Promo/Promo";
import Portfolio from "./Portfolio/Portfolio";
import StudentInfo from "./StudentInfo/StudentInfo";

function AboutMe() {
  return (
    <section id="student" className="student">
      <Promo title="Студент" />
      <StudentInfo />
      <Portfolio />
    </section>
  );
}

export default AboutMe;
