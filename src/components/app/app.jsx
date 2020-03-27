import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import {offersType, onTitleClickType, onCityClickType, currentOfferIdType, activeCityType, onResetSortType} from "../../types/index";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import DetailsInfoAboutOffer from "../details-info-about-offer/details-info-about-offer.jsx";
import {getOfferList, getCurrentOffer} from "../../utils";

class App extends PureComponent {
  _renderApp() {
    const {offers, currentOfferId, activeCity, onTitleClick, onCityClick, onResetSort} = this.props;

    const offersList = getOfferList(offers, activeCity);
    const offer = getCurrentOffer(offers, currentOfferId);

    return offer ? <DetailsInfoAboutOffer onTitleClick={onTitleClick} offer={offer} nearbyActiveCity={activeCity}/> :
      <Main offers={offersList} activeCity={activeCity} onTitleClick={onTitleClick} onCityClick={onCityClick} onResetSort={onResetSort} />;
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
  onResetSort: onResetSortType
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  currentOfferId: state.currentOfferId,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onTitleClick(currentOfferId) {
    dispatch(ActionCreator.changeOfferId(currentOfferId));
  },
  onResetSort() {
    dispatch(ActionCreator.resetSort());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
