import React from "react";
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";
import image from "../../../images/c.jpg";
import "./SavedMoviesCardList.scss";

function SavedMoviesCardList() {
  return (
    <section className="saved__movies_card-list">
      <SavedMoviesCard
        title="Киноальманах «100 лет дизайна»"
        duration="1ч 42м"
        image={image}
      />
      <SavedMoviesCard
        title="Киноальманах «100 лет дизайна»"
        duration="1ч 42м"
        image={image}
      />
    </section>
  );
}

export default SavedMoviesCardList;
