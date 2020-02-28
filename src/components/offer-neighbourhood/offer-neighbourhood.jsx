import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list.jsx";

const OfferNeighbourhood = ({neighbourhoodOffers, onTitleClick, isMainPage}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <OfferList offers={neighbourhoodOffers} onTitleClick={onTitleClick} isMainPage={isMainPage}/>
    </section>
  );
};

OfferNeighbourhood.propTypes = {
  neighbourhoodOffers: PropTypes.arrayOf(PropTypes.shape({
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
  isMainPage: PropTypes.bool.isRequired,
};

export default OfferNeighbourhood;
