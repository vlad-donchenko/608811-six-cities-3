import {getRandomInteger} from "../utils/index";

const INDICATOR = 0.5;

const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const images = [
  `room.jpg`,
  `apartment-02.jpg`,
  `apartment-03.jpg`,
  `apartment-01.jpg`,
  `apartment-01.jpg`,
];

const goods = [
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

const names = [
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

const latitudes = [
  52.3909553943508,
  52.369553943508,
  52.3909553943508,
  52.3809553943508,
  52.3709553943508
];

const longitude = [
  4.85309666406198,
  4.85309666406198,
  4.929309666406198,
  4.939309666406198,
  4.979309666406198
];

const getGoods = () => goods.filter(() => Math.random() > INDICATOR);

const getDescription = () => {
  return descriptions.filter(() => {
    return Math.random() > INDICATOR;
  }).join(`. `);
};

const generateOffers = () => {
  return titles.map((title, id) => {
    return {
      bedrooms: getRandomInteger(1, 7),
      city: {
        location: {
          latitude: 52.38333,
          longitude: 4.9,
          zoom: 10,
        },
        name: `Amsterdam`
      },
      description: getDescription(),
      goods: getGoods(),
      host: {
        avatarUrl: avatars[getRandomInteger(0, avatars.length - 1)],
        id,
        isPro: Math.random() > INDICATOR,
        name: names[id]
      },
      id,
      images,
      isFavorite: Math.random() > INDICATOR,
      isPremium: Math.random() > INDICATOR,
      location: {
        latitude: latitudes[id],
        longitude: longitude[id],
        zoom: 8
      },
      maxAdults: getRandomInteger(1, 7),
      previewImage: images[getRandomInteger(0, images.length - 1)],
      price: getRandomInteger(100, 500),
      rating: getRandomInteger(0, 5),
      title,
      type: Math.random() > INDICATOR ? `Private room` : `Apartment`,
    };
  });
};

const offers = generateOffers();

export {offers, names};
