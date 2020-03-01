import React from "react";
import PropTypes from "prop-types";

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
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    room: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    host: PropTypes.shape({
      nameUser: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
    }).isRequired,
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  additionalClass: PropTypes.string.isRequired,
  renderOffer: PropTypes.func.isRequired,
};

export default OfferList;
