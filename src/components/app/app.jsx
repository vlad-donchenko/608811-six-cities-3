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

    if (this.state.currentOffer !== null) {
      return (<DetailsInfoAboutOffer offer={this.state.currentOffer}/>);
    }

    return (<Main offers={offers} onTitleClick={this._handleTitleClick}/>);
  }

  _handleTitleClick(values) {
    this.setState({
      currentOffer: values,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details-info-about-offer">
            return (<DetailsInfoAboutOffer offer={this.state}/>);
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
