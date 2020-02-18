import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Offer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, onOfferHover, onTitleClick} = this.props;
    const {name, image, price, type, rating, isBookmark, isPremium} = offer;
    const markTemplate = (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );

    const markElement = isPremium ? markTemplate : ``;

    return (
      <article className="cities__place-card place-card" onMouseOver={() => (onOfferHover(offer))}>
        {markElement}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={`img/${image}`} width="260" height="200" alt={name}/>
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
            <a href="#" onClick={onTitleClick}>{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

Offer.propTypes = {
  onTitleClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Offer;
