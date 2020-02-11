import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {offerCount, placeCards, onTitleClick} = props;

  return (
    <Main offerCount={offerCount} placeCards={placeCards} onTitleClick={onTitleClick}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  placeCards: PropTypes.arrayOf(PropTypes.shape({index: PropTypes.number.isRequired, name: PropTypes.string.isRequired})).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default App;
