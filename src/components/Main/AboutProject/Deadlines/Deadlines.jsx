import React from "react";
import "./Deadlines.scss";

const Deadlines = () => {
  return (
    <div className="deadlines">
      <p className="deadlines__week-one">1 неделя</p>
      <p className="deadlines__week-one-span">Back-end</p>
      <p className="deadlines__week-one deadlines__week-four">4 недели</p>
      <p className="deadlines__week-one-span deadlines__week-four-span">
        Front-end
      </p>
    </div>
  );
};

export default Deadlines;
