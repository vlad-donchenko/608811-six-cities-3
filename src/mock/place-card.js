import {getRandomInteger} from "../utils/utils";

const generateRandomArrayElement = (elements) => {
  const element = elements[getRandomInteger(0, elements.length - 1)];
  return element;
};

const placeCardNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const generatePlaceCard = (index) => {
  const name = generateRandomArrayElement(placeCardNames);
  const id = name + index;

  return {
    id,
    name,
  };
};

const generatePlaceCards = (count) => {
  return new Array(count)
    .fill(``)
    .map((element, i) => {
      return generatePlaceCard(i);
    });
};

export {generatePlaceCards};
