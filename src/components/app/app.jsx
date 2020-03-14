import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import {offersType, onTitleClickType, onCityClickType, currentOfferIdType, activeCityType, onSortTypeClickType} from "../../types/index";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import DetailsInfoAboutOffer from "../details-info-about-offer/details-info-about-offer.jsx";
import {getOfferList, sortingOffers} from "../../utils";

class App extends PureComponent {
  _renderApp() {
    const {offers, currentOfferId, activeCity, onTitleClick, onCityClick, onSortTypeClick, activeSortType} = this.props;

    const offersList = getOfferList(offers, activeCity);
    const sortedOfferList = sortingOffers(activeSortType, offersList);

    const offer = this._getCurrentOffer(offers, currentOfferId);
    return offer ? <DetailsInfoAboutOffer onTitleClick={onTitleClick} offer={offer}/> :
      <Main offers={sortedOfferList} activeCity={activeCity} onTitleClick={onTitleClick} activeSortType={activeSortType} onSortTypeClick={onSortTypeClick} onCityClick={onCityClick}/>;
  }

  _getCurrentOffer(offers, id) {
    return offers.find((offer) => {
      return offer.id === id;
    });
  }

  render() {
    const {offers, onTitleClick} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details-info-about-offer">
            <DetailsInfoAboutOffer onTitleClick={onTitleClick} offer={offers[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  onCityClick: onCityClickType,
  currentOfferId: currentOfferIdType,
  activeCity: activeCityType,
  onSortTypeClick: onSortTypeClickType,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  currentOfferId: state.currentOfferId,
  activeSortType: state.activeSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onTitleClick(currentOfferId) {
    dispatch(ActionCreator.changeOfferId(currentOfferId));
  },
  onSortTypeClick(activeSortType) {
    dispatch(ActionCreator.changeSortType(activeSortType));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
