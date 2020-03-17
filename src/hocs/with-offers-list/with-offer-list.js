import React, {PureComponent} from 'react';
import {offersType} from "../../types/index";
import {getCurrentOffer} from "../../utils";

const withOffer = (Component) => {
  class WithOffer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        hoveredOfferId: null,
      };
      this._handleOfferMouseEnter = this._handleOfferMouseEnter.bind(this);
      this._handleOfferLeave = this._handleOfferLeave.bind(this);
    }

    render() {
      const id = this.state.hoveredOfferId;
      const {offers} = this.props;
      const hoveredOffer = getCurrentOffer(offers, id);

      return (
        <Component {...this.props} hoveredOffer={hoveredOffer} onOfferMouseEnter={ this._handleOfferMouseEnter} onOfferMouseLeave={this._handleOfferLeave}/>
      );
    }

    _handleOfferMouseEnter(id) {
      this.setState({
        hoveredOfferId: id
      });
    }

    _handleOfferLeave() {
      this.setState({
        hoveredOfferId: -1
      });
    }
  }

  WithOffer.propTypes = {
    offers: offersType
  };

  return WithOffer;
};

export default withOffer;
