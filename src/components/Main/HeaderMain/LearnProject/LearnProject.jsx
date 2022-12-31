import React from "react";
import "./LearnProject.scss";
import tableWork from "../../../../images/tableP.png";

function LearnProject() {
  return (
    <section className="heading">
      <div className="heading__info">
        <img
          className="heading__image"
          src={tableWork}
          alt="Логотип практикума"
        />
        <h1 className="heading__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default LearnProject;
