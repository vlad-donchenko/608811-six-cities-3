import React from "react";
import PropTypes from "prop-types";

const OfferCard = (props) => {
  const {offer, onOfferHover, onTitleClick} = props;
  const {name, images, price, type, rating, isBookmark, isPremium} = offer;

  const markTemplate = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const premiumStatusElement = isPremium ? markTemplate : ``;

  return (
    <article className="cities__place-card place-card" onMouseOver={() => (onOfferHover(offer))}>
      {premiumStatusElement}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${images[0]}`} width="260" height="200" alt={name}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isBookmark ? `place-card__bookmark-button--active` : ``}`}
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
          <a href="#" onClick={() => (onTitleClick(offer))}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  onTitleClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    room: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    host: PropTypes.shape({
      nameUser: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OfferCard;
