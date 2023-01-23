import React from "react";
import "./DiplomAbout.scss";
import DiplomDesc from "../DiplomDesc/DiplomDesc";

const DiplomAbout = () => {
  return (
    <div className="diplom_about">
      <DiplomDesc
        title="Дипломный проект включал 5 этапов"
        description="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
      />
      <DiplomDesc
        title="На выполнение диплома ушло 5 недель"
        description="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
      />
    </div>
  );
}

export default DiplomAbout;
