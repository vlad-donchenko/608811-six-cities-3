import React from "react";
import {offersType, onTitleClickType, additionalClassType, renderOfferType} from "../../types/index";

const OfferList = ({offers, onTitleClick, additionalClass, renderOffer}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return renderOffer(offer, additionalClass, onTitleClick);
      })}
    </div>
  );
};

OfferList.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  additionalClass: additionalClassType,
  renderOffer: renderOfferType
};

export default OfferList;
