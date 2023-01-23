import React from "react";
import "./MoviestBtnStill.scss";

function MoviestBtnStill(props) {
  return (
    <>
      {props.movies.length > 0 || props.moreMovies > props.movies.length ? (
        <button
          type="button"
          onClick={props.handleShowingMoreMovies}
          className="button movies__card_list-btn"
        >
          Еще
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default MoviestBtnStill;
