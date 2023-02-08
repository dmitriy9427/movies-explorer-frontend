import React from "react";
import "./LearnProject.scss";
import tableWork from "../../../../images/tableP.png";

const LearnProject = () => {
  return (
    <section className="heading">
      <img
        className="heading__image"
        src={tableWork}
        alt="Логотип практикума"
      />
      <h1 className="heading__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  );
};

export default LearnProject;
