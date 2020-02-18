import {getRandomInteger} from "../utils/utils";

const placeCardNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const images = [
  `apartment-01.jpg`,
  `room.jpg`,
  `apartment-02.jpg`,
  `apartment-03.jpg`,
  `room.jpg`
];

const generateOffers = () => {
  return placeCardNames.map((name, index) => {
    return {
      name,
      index,
      image: images[index],
      price: getRandomInteger(100, 500),
      type: Math.random() > 0.5 ? `Private room` : `Apartment`,
      rating: getRandomInteger(0, 5),
      isBookmark: Math.random() > 0.5,
      isPremium: Math.random() > 0.5,
    };
  });
};

export const offers =  generateOffers();
