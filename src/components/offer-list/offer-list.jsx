import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCad from "../offer-card/offer-cad.jsx";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {active: null};
    this._onOfferHover = this._onOfferHover.bind(this);
  }

  render() {
    const {offers, onTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => {
            return (<OfferCad key={`${offer.index}`} offer={offer} onOfferHover={this._onOfferHover} onTitleClick={onTitleClick}/>);
          })
        }
      </div>
    );
  }
  _onOfferHover(values) {
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
