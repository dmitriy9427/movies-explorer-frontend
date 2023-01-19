import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import HeaderMain from "./HeaderMain/HeaderMain";
import Techs from "./Techs/Techs";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div>
      <HeaderMain />

      <main>
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
