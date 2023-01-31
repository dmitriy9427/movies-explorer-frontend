import React from "react";
import LearnProject from "./LearnProject/LearnProject";
import NavHeader from "./NavHeader/NavHeader";
import NavTab from "./NavTab/NavTab";
import Header from "../../Header/Header";
import "./HeaderMain.scss";

const HeaderMain = ({ loggedIn }) => {
  return (
    <div className="header-main">
      {loggedIn ? <Header /> : <NavHeader />}
      <LearnProject />
      <NavTab />
    </div>
  );
};

export default HeaderMain;
