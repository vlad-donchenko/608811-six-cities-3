import React from "react";
import {offersType, onTitleClickType, additionalClassType, onOfferMouseLeaveType, onOfferMouseEnterType} from "../../types/index";
import OfferCard from "../offer-card/offer-card.jsx";

const OffersNearbyList = ({offers, onTitleClick, additionalClass, onOfferMouseLeave, onOfferMouseEnter}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <OfferCard key={offer.id} onTitleClick={onTitleClick} offer={offer} onOfferMouseLeave={onOfferMouseLeave} onOfferMouseEnter={onOfferMouseEnter} additionalClass={additionalClass}/>))}
      </div>
    </section>
  );
};

OffersNearbyList.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  additionalClass: additionalClassType,
  onOfferMouseLeave: onOfferMouseLeaveType,
  onOfferMouseEnter: onOfferMouseEnterType
};

export default OffersNearbyList;
