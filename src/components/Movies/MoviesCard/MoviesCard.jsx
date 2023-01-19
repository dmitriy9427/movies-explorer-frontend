import React from "react";
import "./MoviesCard.scss";

function MoviesCard(props) {
  return (
    <div className="movies__card">
      <div className="movies__card_info">
        <h3 className="movies__card_title">{props.name}</h3>
        <p className="movies__card_duration">{props.duration}</p>
        <button
          type="button"
          className="button movies__card_like movies__card_like-active"
        />
      </div>
      <a className="movies__card_image" href={props.trailerLink}>
        <img
          className="movies__card_img"
          src={props.thumbnail}
          alt={props.name}
        />
      </a>
    </div>
  );
}

export default MoviesCard;
