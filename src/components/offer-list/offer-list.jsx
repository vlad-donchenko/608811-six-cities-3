import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCad from "../offer-card/offer-cad.jsx";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {active: null};
  }

  render() {
    const {offers, onOfferHover} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => {
            return (<OfferCad key={`${offer.index}`} offer={offer} onOfferHover={onOfferHover}/>);
          })
        }
      </div>
    );
  }
}

OfferList.propTypes = {
  onOfferHover: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
  })).isRequired
};

export default OfferList;
