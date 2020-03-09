import React, {PureComponent} from 'react';
import OfferCard from "../../offer-card/offer-card.jsx";

const withOffer = (Component) => {
  class WithOffer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {active: null};
      this._handleOfferHover = this._handleOfferHover.bind(this);
    }

    render() {
      return (
        <Component {...this.props} renderOffer={(offer, additionalClass, onTitleClick) => {
          return (<OfferCard key={`${offer.id}`} additionalClass={additionalClass} offer={offer} onOfferHover={this._handleOfferHover} onTitleClick={onTitleClick}/>);
        }}/>
      );
    }

    _handleOfferHover(values) {
      this.setState({
        active: values
      });
    }
  }

  return WithOffer;
};

export default withOffer;
