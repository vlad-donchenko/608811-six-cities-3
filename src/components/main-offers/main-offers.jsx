import React from "react";
import SortingOptions from "../sorting-options/sorting-options.jsx";
import OfferMainList from "../offers-main-list/offers-main-list.jsx";
import Map from "../map/map.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import {sortingOffers} from "../../utils";
import {OfferPrefix} from "../../const";
import {offersType, onTitleClickType, onSortTypeClickType, activeCityType, activeSortType, onOfferMouseLeaveType, onOfferMouseEnterType, hoveredOfferIdType} from "../../types/index";

const MainOffers = ({offers, onSortTypeClick, hoveredOfferId, activeSort, onTitleClick, activeCity, onOfferMouseLeave, onOfferMouseEnter}) => {

  const offerCount = offers.length;
  const offersList = sortingOffers(activeSort, offers);
  const additionalClass = OfferPrefix.CITIES_PLACE_CARD;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offerCount} places to stay in {activeCity}</b>
        <SortingOptions onSortTypeClick={onSortTypeClick} activeSort={activeSort} />
        <OfferMainList offers={offersList} onTitleClick={onTitleClick} onOfferMouseLeave={onOfferMouseLeave} onOfferMouseEnter={onOfferMouseEnter} additionalClass={additionalClass}/>
      </section>
      <div className="cities__right-section">
        <Map offers={offers} hoveredOfferId={hoveredOfferId}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeSort: state.activeSort,
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeClick(activeSort) {
    dispatch(ActionCreator.changeSortType(activeSort));
  },
});

MainOffers.defaultProps = {
  hoveredOfferId: -1
};

MainOffers.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  onSortTypeClick: onSortTypeClickType,
  activeCity: activeCityType,
  activeSort: activeSortType,
  onOfferMouseLeave: onOfferMouseLeaveType,
  onOfferMouseEnter: onOfferMouseEnterType,
  hoveredOfferId: hoveredOfferIdType
};

export {MainOffers};
export default connect(mapStateToProps, mapDispatchToProps)(MainOffers);
