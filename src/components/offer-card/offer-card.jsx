import React from "react";
import {offerType, additionalClassType, onTitleClickType, onOfferHoverType, isNearbyType} from "../../types/index";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const OfferCard = ({offer, onTitleClick, additionalClass, onOfferHover, isNearby}) => {

  const {title, id, previewImage, price, type, rating, isFavorite, isPremium} = offer;
  const onHover = isNearby ? () => {} : onOfferHover;

  const markTemplate = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const premiumStatusElement = isPremium ? markTemplate : ``;

  return (
    <article className={`${additionalClass} place-card`} onMouseLeave={() => {
      onHover(null);
    }} onMouseEnter={() => {
      onHover(id);
    }}>
      {premiumStatusElement}
      <div className={`${additionalClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={`img/${previewImage}`} width="260" height="200" alt={title}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`}
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 2 * 10}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={() => (onTitleClick(id))}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.defaultProps = {
  isNearby: false
};

OfferCard.propTypes = {
  offer: offerType,
  isNearby: isNearbyType,
  additionalClass: additionalClassType,
  onTitleClick: onTitleClickType,
  onOfferHover: onOfferHoverType
};

const mapDispatchToProps = (dispatch) => ({
  onOfferHover(hoveredOfferId) {
    dispatch(ActionCreator.changeHoveredOffer(hoveredOfferId));
  }
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
