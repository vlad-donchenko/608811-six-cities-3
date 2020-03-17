import React from "react";
import OffersNearbyList from "../offers-nearby-list/offers-nearby-list.jsx";
import Map from "../map/map.jsx";
import {OfferPrefix} from "../../const";
import {offersType, onTitleClickType, onOfferMouseLeaveType, onOfferMouseEnterType, hoveredOfferType} from "../../types/index";

const NearbyOffers = ({offers, onTitleClick, onOfferMouseLeave, onOfferMouseEnter, hoveredOffer}) => {
  const additionalClass = OfferPrefix.NEAR_PLACES_CARD;

  return (
    <React.Fragment>
      <section className="property__map map">
        <Map offers={offers} hoveredOffer={hoveredOffer}/>
      </section>
      <div className="container">
        <OffersNearbyList offers={offers} onTitleClick={onTitleClick} onOfferMouseLeave={onOfferMouseLeave} onOfferMouseEnter={onOfferMouseEnter} additionalClass={additionalClass}/>
      </div>
    </React.Fragment>
  );
};

NearbyOffers.defaultProps = {
  hoveredOffer: undefined
};

NearbyOffers.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  onOfferMouseLeave: onOfferMouseLeaveType,
  onOfferMouseEnter: onOfferMouseEnterType,
  hoveredOffer: hoveredOfferType
};

export default NearbyOffers;
