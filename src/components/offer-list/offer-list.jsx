import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {active: null};
    this._handleOfferHover = this._handleOfferHover.bind(this);
  }

  render() {
    const {offers, onTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => {
            return (<OfferCard key={`${offer.index}`} offer={offer} onOfferHover={this._handleOfferHover} onTitleClick={onTitleClick}/>);
          })
        }
      </div>
    );
  }
  _handleOfferHover(values) {
    this.setState({
      active: values
    });
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
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
};

export default OfferList;
