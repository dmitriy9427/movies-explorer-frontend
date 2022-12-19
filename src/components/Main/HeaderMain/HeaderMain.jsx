import React from "react";
import LearnProject from "./LearnProject/LearnProject";
import NavHeader from "./NavHeader/NavHeader";
import NavTab from "./NavTab/NavTab";
import "./HeaderMain.scss";
import Header from "../../Header/Header";

function HeaderMain({ loggedIn }) {
  return (
    <div className="header_main">
      {loggedIn ? <Header /> : <NavHeader />}
      <LearnProject />
      <NavTab />
    </div>
  );
}

export default HeaderMain;
