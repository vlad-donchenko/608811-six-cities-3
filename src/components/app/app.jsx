import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const onTitleClick = () => {};

const App = (props) => {
  const {offers} = props;

  return (
    <Main offers={offers} onTitleClick={onTitleClick}/>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({index: PropTypes.number.isRequired, name: PropTypes.string.isRequired})).isRequired,
};

export default App;
