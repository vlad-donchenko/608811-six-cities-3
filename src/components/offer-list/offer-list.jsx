import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCad from "../offer-card/offer-cad";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {active: null};
  }

  render() {
    const {offers, onGetActiveMouseOver} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer, i) => {
            return (<OfferCad key={`offers.name-${i + 1}`} offer={offer} onGetActiveMouseOver={onGetActiveMouseOver}/>);
          })
        }
      </div>
    );
  }
}

OfferList.propTypes = {
  onGetActiveMouseOver: PropTypes.func.isRequired,
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
