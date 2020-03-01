import React from "react";
import PropTypes from "prop-types";

const OfferNeighbourhood = ({neighbourhoodOffers, onTitleClick, additionalClass, renderOffer}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {neighbourhoodOffers.map((offer) => {
          return renderOffer(offer, additionalClass, onTitleClick);
        })}
      </div>
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
  })),
  onTitleClick: PropTypes.func.isRequired,
  renderOffer: PropTypes.func.isRequired,
  additionalClass: PropTypes.string.isRequired,
};

export default OfferNeighbourhood;
