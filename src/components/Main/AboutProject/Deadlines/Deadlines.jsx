import React from "react";
import "./Deadlines.scss";

const Deadlines = () => {
  return (
    <div className="deadlines">
      <p className="deadlines__week_one">1 неделя</p>
      <p className="deadlines__week_one-span">Back-end</p>
      <p className="deadlines__week_one deadlines__week_four">4 недели</p>
      <p className="deadlines__week_one-span deadlines__week_four-span">
        Front-end
      </p>
    </div>
  );
}

export default Deadlines;
