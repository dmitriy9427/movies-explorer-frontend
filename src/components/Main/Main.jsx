import Header from "../Header/Header";
import MainHeader from "../Header/MainHeader/MainHeader";
import NavTab from "./HeaderMain/NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import MoviesHeader from "../Header/MoviesHeader/MoviesHeader";
import LearnProject from "./AboutProject/LearnProject/LearnProject";

function Main({ loggedIn }) {
  return (
    <>
      {loggedIn ? (
        <Header
          color={"header__theme_blue"}
          location={"header__container_movies"}
        >
          <MoviesHeader />
        </Header>
      ) : (
        <Header
          color={"header__theme_blue"}
          location={"header__container_landing"}
        >
          <MainHeader />
        </Header>
      )}
      <main className="landing">
        <LearnProject />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
