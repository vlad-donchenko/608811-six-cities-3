import React from "react";
import {activeCityType, offersType, onTitleClickType, onCityClickType} from "../../types/index";
import CityList from "../city-list/city-list.jsx";
import MainOffers from "../main-offers/main-offers.jsx";
import withOffer from "../../hocs/with-offers-list/with-offer-list";
import MainEmpty from "../main-empty/main-empty.jsx";

const MainOffersWrapper = withOffer(MainOffers);

const Main = (props) => {
  const {offers, activeCity, onTitleClick, onCityClick} = props;
  const isOffers = offers.length !== 0;

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
      <main className={`page__main page__main--index ${isOffers ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList activeCity={activeCity} onCityClick={onCityClick}/>
        <div className="cities">
          {isOffers ? <MainOffersWrapper offers={offers} onTitleClick={onTitleClick} activeCity={activeCity}/> : <MainEmpty activeCity={activeCity}/>}
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
