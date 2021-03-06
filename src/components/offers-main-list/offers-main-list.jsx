import React from "react";
import {offersType, onTitleClickType, additionalClassType} from "../../types/index";
import OfferCard from "../offer-card/offer-card.jsx";
import {OfferPrefix} from "../../const";

const OfferMainList = ({offers, onTitleClick}) => {
  const additionalClass = OfferPrefix.CITIES_PLACE_CARD;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} isNearby={false} onTitleClick={onTitleClick} offer={offer} additionalClass={additionalClass}/>))}
    </div>
  );
};

OfferMainList.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  additionalClass: additionalClassType,
};

export default OfferMainList;
