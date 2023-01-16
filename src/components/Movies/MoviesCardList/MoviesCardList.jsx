import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import card from "../../../images/image.png";
import "./MoviesCardList.scss";
import MoviestBtnStill from "../MoviestBtnStill/MoviestBtnStill";

function MoviesCardList() {
  return (
    <section className="movies__card_list">
      <div className="movies__card_list-container">
        <MoviesCard title="33 слова о дизайне" duration="1ч 42м" image={card} />
        <MoviesCard title="33 слова о дизайне" duration="1ч 42м" image={card} />
        <MoviesCard title="33 слова о дизайне" duration="1ч 42м" image={card} />
        <MoviesCard title="33 слова о дизайне" duration="1ч 42м" image={card} />
        <MoviesCard title="33 слова о дизайне" duration="1ч 42м" image={card} />

        <MoviestBtnStill />
      </div>
    </section>
  );
}

export default MoviesCardList;
