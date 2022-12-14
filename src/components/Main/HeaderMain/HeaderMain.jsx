import React from "react";
import LearnProject from "./LearnProject/LearnProject";
import NavHeader from "./NavHeader/NavHeader";
import NavTab from "./NavTab/NavTab";
import "./HeaderMain.scss";

function HeaderMain() {
  return (
    <div className="header_main">
      <NavHeader />
      <LearnProject />
      <NavTab />
    </div>
  );
}

export default HeaderMain;
