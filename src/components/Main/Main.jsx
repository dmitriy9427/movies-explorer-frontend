import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import HeaderMain from "./HeaderMain/HeaderMain";
import Techs from "./Techs/Techs";
import Footer from "../Footer/Footer";

const Main = ({ loggedIn }) => {
  return (
    <div className="main">
      <HeaderMain loggedIn={loggedIn} />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Main;
