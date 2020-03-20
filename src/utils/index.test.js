import {formatDate, getOfferList, extend, formatDateTime, getCurrentOffer, sortingOffers} from "./index";
import {offers} from "../mocks/test-offer";
import {CITIES, sortType} from "../const";


const sortedArray = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`],
    host: {
      avatarUrl: `avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 3,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.273877537499948,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: `apartment-01.jpg`,
    price: 200,
    rating: 5,
    title: `Beautiful & luxurious studio at great location - 3`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `apartment-02.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location - 1`,
    type: `apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `avatar-max.jpg`,
      id: 2,
      isPro: false,
      name: `Max`
    },
    id: 2,
    images: [`room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.45514938496378,
      longitude: 4.773877537499948,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: `apartment-03.jpg`,
    price: 350,
    rating: 3,
    title: `Beautiful & luxurious studio at great location - 2`,
    type: `apartment`
  }
];

it(`formatDate should get formatted date`, () => {
  expect(formatDate(`2019-10-08T14:13:56.569Z`)).toEqual(`October 8 2019`);
});

it(`formatDateTime should get formatted date`, () => {
  expect(formatDateTime(`2019-10-08T14:13:56.569Z`)).toEqual(`2019-09-08`);
});

it(`formatDateTime should get new object`, () => {
  expect(extend({activeCity: CITIES[3], currentOfferId: -1}, {activeCity: CITIES[0], currentOfferId: 1})).toEqual({
    activeCity: `Paris`,
    currentOfferId: 1
  });
});

it(`getOfferList should get array`, () => {
  expect(getOfferList(offers, CITIES[4])).toEqual([]);
});

it(`getCurrentOffer should get array`, () => {
  expect(getCurrentOffer(offers, 1)).toEqual(offers[0]);
});

it(`sortingOffers should get array`, () => {
  expect(sortingOffers(sortType.topRated, offers.slice(0, 3))).toEqual(sortedArray);
});
