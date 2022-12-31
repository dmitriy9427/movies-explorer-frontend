import React from "react";
import LearnProject from "./LearnProject/LearnProject";
import NavHeader from "./NavHeader/NavHeader";
import NavTab from "./NavTab/NavTab";
import "./HeaderMain.scss";
import Header from "../../Header/Header";

function HeaderMain() {
  return (
    <div className="header_main">
      <Header />
      <LearnProject />
      <NavTab />
    </div>
  );
}

export default HeaderMain;
