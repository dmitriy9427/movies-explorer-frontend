import React from "react";
import photo from "../../../../images/photo.jpg";
import "./StudentInfo.scss";

function StudentInfo() {
  return (
    <div className="student__information">
      <div className="student__info">
        <h2 className="student__title">Дмитрий</h2>
        <h4 className="student_profession">
          Фронтенд-разработчик, 28&nbsp;лет
        </h4>
        <p className="student__about">
          Я живу в Санкт-Петербурге, закончил СамГТУ. Занимаюсь спортом, в
          свободное время чтение и прогулки, теперь полюбил разработку.
        </p>
        <a
          href="https://github.com/dmitriy9427"
          target="_blank"
          className="student__link"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <div className="student__photo">
        <img className="student__img" src={photo} alt="Фотография студента" />
      </div>
    </div>
  );
}

export default StudentInfo;
