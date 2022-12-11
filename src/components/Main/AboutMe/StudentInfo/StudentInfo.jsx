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
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
          экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать
          музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015
          года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как
          прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами
          и&nbsp;ушёл с&nbsp;постоянной работы.
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
