const placeCardNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const generatePlaceCards = () => {
  return placeCardNames.map((name, index) => {
    return {
      name,
      index
    };
  });
};

export {generatePlaceCards};
