import {getRandomInteger} from "../utils/utils";
const CHECK_INDICATOR = 0.5;

const placeCardNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const images = [
  `apartment-01.jpg`,
  `apartment-02.jpg`,
  `apartment-03.jpg`,
  `room.jpg`
];

const features = [
  `Wi-Fi`,
  `Heating`,
  `Kitchen`,
  `Fridge`,
  `Washing machine`,
  `Coffee machine`,
  `Dishwasher`,
  `Towels`,
  `Baby seat`,
  `Cabel TV`
];

const hostNames = [
  `Angelina`,
  `Max`,
  `Sam`,
  `Nick`,
  `Jane`
];

const avatars = [
  `avatar-angelina.jpg`,
  `avatar-max.jpg`
];

const descriptions = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful`,
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century`
];

const getFeatures = () => features.filter(() => Math.random() > CHECK_INDICATOR);

const getDescription = () => descriptions.filter(() => Math.random() > CHECK_INDICATOR);

const generateOffers = () => {
  return placeCardNames.map((name, index) => {
    return {
      name,
      index,
      images,
      price: getRandomInteger(100, 500),
      type: Math.random() > CHECK_INDICATOR ? `Private room` : `Apartment`,
      rating: getRandomInteger(0, 5),
      room: getRandomInteger(1, 7),
      adults: getRandomInteger(1, 7),
      features: getFeatures(),
      isBookmark: Math.random() > CHECK_INDICATOR,
      isPremium: Math.random() > CHECK_INDICATOR,
      host: {
        nameUser: hostNames[index],
        avatar: avatars[getRandomInteger(0, avatars.length - 1)],
        description: getDescription(),
      }
    };
  });
};

export const offers = generateOffers();
