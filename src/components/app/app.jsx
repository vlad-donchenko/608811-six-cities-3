import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleClickHandler = () => {};

const App = (props) => {
  const {offerCount, placeCards} = props;

  return (
    <Main offerCount={offerCount} placeCards={placeCards} onTitleClick={titleClickHandler}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  placeCards: PropTypes.arrayOf(PropTypes.shape({index: PropTypes.number.isRequired, name: PropTypes.string.isRequired})).isRequired,
};

export default App;
