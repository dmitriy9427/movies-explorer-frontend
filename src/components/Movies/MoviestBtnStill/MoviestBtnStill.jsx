import React from "react";
import "./MoviestBtnStill.scss";

const MoviestBtnStill = ({ handleShowingMoreMovies }) => {
  return (
    <button
      className="button movies__card_list-btn"
      type="button"
      onClick={handleShowingMoreMovies}
    >
      Еще
    </button>
  );
};

export default MoviestBtnStill;
