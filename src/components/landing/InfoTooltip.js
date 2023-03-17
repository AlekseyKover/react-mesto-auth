import React from "react";

function InfoTooltip({ isOpen, title, onClose, image }) {
  return (
    <div className={`popup ${isOpen ? "popup_is-opened" : ""}`}>
      <div className="popup__container">
        <>
          <img className="popup__image" src={image} />
          <h2 className="popup__title">{title}</h2>
          <button
            className="popup__close"
            type="button"
            name="close-button"
            onClick={onClose}
          />
        </>
      </div>
    </div>
  );
}

export default InfoTooltip;
