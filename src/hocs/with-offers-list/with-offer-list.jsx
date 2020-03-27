import React, {PureComponent} from 'react';
import {offersType} from "../../types/index";

const withOffer = (Component) => {
  class WithOffer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        hoveredOfferId: -1,
      };
      this._handleOfferMouseEnter = this._handleOfferMouseEnter.bind(this);
      this._handleOfferLeave = this._handleOfferLeave.bind(this);
    }

    render() {
      const hoveredOfferId = this.state.hoveredOfferId;

      return (
        <Component {...this.props} hoveredOfferId={hoveredOfferId} onOfferMouseEnter={ this._handleOfferMouseEnter} onOfferMouseLeave={this._handleOfferLeave}/>
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
