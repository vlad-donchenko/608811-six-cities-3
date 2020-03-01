import React from "react";
import PropTypes from "prop-types";
import Map from "../map/map.jsx";

const MapNeighbourhood = ({prefix, offers}) => {
  return (
    <Map prefix={prefix} offers={offers}/>
  );
};

MapNeighbourhood.propTypes = {
  prefix: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default MapNeighbourhood;
