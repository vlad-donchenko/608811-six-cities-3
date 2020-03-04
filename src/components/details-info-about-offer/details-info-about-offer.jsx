import React from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import OfferNeighbourhood from "../offer-neighbourhood/offer-neighbourhood.jsx";
import Map from "../map/map.jsx";
import withOffer from "../hocs/with-offers-list/with-offer-list";
import {OfferPrefix} from "../../const";

const OfferNeighbourhoodWrapped = withOffer(OfferNeighbourhood);

const DetailsInfoAboutOffer = (props) => {
  const {offer, onTitleClick} = props;
  const {name, images, price, type, rating, room, adults, features, isBookmark, isPremium, host, reviews, neighbourhoodOffers} = offer;
  const {nameUser, avatar, description} = host;
  const additionalClass = OfferPrefix.DETAILS_PAGE;
  const isNeighbourhoodOffers = neighbourhoodOffers.length !== 0;

  const markTemplate = (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );

  const premiumStatusElement = isPremium ? markTemplate : ``;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((path) => {
                return (
                  <div key={`${path}`} className="property__image-wrapper">
                    <img className="property__image" src={`img/${path}`} alt="Photo studio"/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premiumStatusElement}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                <button
                  className={`property__bookmark-button button ${isBookmark ? `property__bookmark-button--active` : ``}`}
                  type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 2 * 10}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {room} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&rsquo;s inside</h2>
                <ul className="property__inside-list">
                  {features.map((feature, i) => {
                    return (
                      <li key={`${feature}-${i}`} className="property__inside-item">
                        ${feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={`img/${avatar}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {nameUser}
                  </span>
                </div>
                <div className="property__description">
                  {description.map((it, i) => {
                    return (
                      <p key={`${it}-${i}`} className="property__text">
                        {it}
                      </p>
                    );
                  })}
                </div>
              </div>
              <ReviewsList reviews={reviews}/>
            </div>
          </div>
          {(isNeighbourhoodOffers) && (
            <section className="property__map map">
              <Map offers={neighbourhoodOffers}/>
            </section>
          )}
        </section>
        <div className="container">
          {(isNeighbourhoodOffers) && (
            <OfferNeighbourhoodWrapped neighbourhoodOffers={neighbourhoodOffers} onTitleClick={onTitleClick} additionalClass={additionalClass}/>)}
        </div>
      </main>
    </div>
  );
};

DetailsInfoAboutOffer.propTypes = {
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
    reviews: PropTypes.array.isRequired,
    neighbourhoodOffers: PropTypes.array.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    host: PropTypes.shape({
      nameUser: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default DetailsInfoAboutOffer;
