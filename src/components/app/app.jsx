import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import {offersType} from "../../types/index";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import DetailsInfoAboutOffer from "../details-info-about-offer/details-info-about-offer.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentOfferId: null,
    };

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _renderApp() {
    const {offers} = this.props;
    const index = this._getCurrentOfferId(offers);

    return index !== -1 ? <DetailsInfoAboutOffer onTitleClick={this._handleTitleClick} offer={offers[index]}/> :
      <Main offers={offers} onTitleClick={this._handleTitleClick}/>;
  }

  _handleTitleClick(id) {
    this.setState({
      currentOfferId: id
    });
  }

  _getCurrentOfferId(offers) {
    const {currentOfferId} = this.state;

    return offers.findIndex((offer) => {
      return offer.id === currentOfferId;
    });
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details-info-about-offer">
            <DetailsInfoAboutOffer onTitleClick={this._handleTitleClick} offer={offers[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: offersType
};

export default App;
