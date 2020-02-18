import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

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
            return (<Offer key={`${offer.index}`} offer={offer} onOfferHover={this._handleOfferHover} onTitleClick={onTitleClick}/>);
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
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default OfferList;
