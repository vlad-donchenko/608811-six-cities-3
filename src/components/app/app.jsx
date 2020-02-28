import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import DetailsInfoAboutOffer from "../details-info-about-offer/details-info-about-offer.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentOffer: null,
    };

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _renderApp() {
    const {offers} = this.props;
    const {currentOffer} = this.state;

    return currentOffer ? <DetailsInfoAboutOffer onTitleClick={this._handleTitleClick} offer={currentOffer}/> :
      <Main offers={offers} onTitleClick={this._handleTitleClick}/>;
  }

  _handleTitleClick(values) {
    this.setState({
      currentOffer: values,
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
  offers: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
};

export default App;
