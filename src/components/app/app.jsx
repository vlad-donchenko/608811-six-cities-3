import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const onOfferHover = () => {};

const App = (props) => {
  const {offerCount, offers} = props;

  return (
    <Main offerCount={offerCount} offers={offers} onOfferHover={onOfferHover}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({index: PropTypes.number.isRequired, name: PropTypes.string.isRequired})).isRequired,
};

export default App;
