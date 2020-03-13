import React from "react";
import {activeCityType, offersType, onTitleClickType, onCityClickType} from "../../types/index";
import OfferList from "../offer-list/offer-list.jsx";
import Map from "../map/map.jsx";
import withOffer from "../hocs/with-offers-list/with-offer-list";
import {OfferPrefix} from "../../const";
import CityList from "../city-list/city-list.jsx";
import SortingOptions from "../sorting-options/sorting-options.jsx";

const OfferListWrapped = withOffer(OfferList);

const Main = (props) => {
  const {offers, activeCity, onTitleClick, onCityClick} = props;
  const additionalClass = OfferPrefix.NEAR_PLACES_CARD;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList activeCity={activeCity} onCityClick={onCityClick}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <SortingOptions/>
              <OfferListWrapped offers={offers} onTitleClick={onTitleClick} additionalClass={additionalClass}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  onCityClick: onCityClickType,
  activeCity: activeCityType
};

export default Main;
