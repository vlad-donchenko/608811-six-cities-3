import React from "react";
import OffersNearbyList from "../offers-nearby-list/offers-nearby-list.jsx";
import Map from "../map/map.jsx";
import {OfferPrefix} from "../../const";
import {offersType, onTitleClickType, onOfferMouseLeaveType, onOfferMouseEnterType, hoveredOfferIdType} from "../../types/index";

const NearbyOffers = ({offers, onTitleClick, onOfferMouseLeave, onOfferMouseEnter, hoveredOfferId}) => {
  const additionalClass = OfferPrefix.NEAR_PLACES_CARD;

  return (
    <React.Fragment>
      <section className="property__map map">
        <Map offers={offers} hoveredOfferId={hoveredOfferId}/>
      </section>
      <div className="container">
        <OffersNearbyList offers={offers} onTitleClick={onTitleClick} onOfferMouseLeave={onOfferMouseLeave} onOfferMouseEnter={onOfferMouseEnter} additionalClass={additionalClass}/>
      </div>
    </React.Fragment>
  );
};

NearbyOffers.defaultProps = {
  hoveredOfferId: -1
};

NearbyOffers.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  onOfferMouseLeave: onOfferMouseLeaveType,
  onOfferMouseEnter: onOfferMouseEnterType,
  hoveredOfferId: hoveredOfferIdType
};

export default NearbyOffers;
