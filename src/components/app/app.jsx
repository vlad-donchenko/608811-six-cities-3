import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const handleTitleClick = () => {};

const App = (props) => {
  const {offerCount, offers} = props;

  return (
    <Main offerCount={offerCount} offers={offers} onTitleClick={handleTitleClick}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({index: PropTypes.number.isRequired, name: PropTypes.string.isRequired})).isRequired,
};

export default App;
