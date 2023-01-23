import React from "react";
import "./MoviestBtnStill.scss";

function MoviestBtnStill(props) {
  return (
    <button
      type="button"
      onClick={props.handleShowingMoreMovies}
      className="button movies__card_list-btn"
    >
      Еще
    </button>
  );
}

export default MoviestBtnStill;
