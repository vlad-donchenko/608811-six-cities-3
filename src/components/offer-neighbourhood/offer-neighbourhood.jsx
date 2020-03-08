import React from "react";
import {offersType, onTitleClickType, additionalClassType, renderOfferType} from "../../types/index";

const OfferNeighbourhood = ({offers, onTitleClick, additionalClass, renderOffer}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => {
          return renderOffer(offer, additionalClass, onTitleClick);
        })}
      </div>
    </section>
  );
};

OfferNeighbourhood.propTypes = {
  offers: offersType,
  onTitleClick: onTitleClickType,
  additionalClass: additionalClassType,
  renderOffer: renderOfferType
};

export default OfferNeighbourhood;
