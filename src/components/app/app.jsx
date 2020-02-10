import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {offerCount, placeCards} = props;

  return (
    <Main offerCount={offerCount} placeCards={placeCards}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  placeCards: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, name: PropTypes.string.isRequired})).isRequired,
};

export default App;
