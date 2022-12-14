import React from "react";
import "./SavedMoviesCard.scss";

function SavedMoviesCard(props) {
  return (
    <div className="movies__card-save">
      <div className="movies__card_info-save">
        <h3 className="movies__card_title-save">{props.title}</h3>
        <p className="movies__card_duration-save">{props.duration}</p>
        <button type="button" className="button movies__card_delete-save" />
      </div>
      <div className="movies__card_image-save">
        <img
          className="movies__card_img-save"
          src={props.image}
          alt="Карточка фильма"
        />
      </div>
    </div>
  );
}

export default SavedMoviesCard;
