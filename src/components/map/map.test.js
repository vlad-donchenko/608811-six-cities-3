import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {leaflet} from "../../__mocks__/leaflet";

const offers = [
  {
    name: `Place 2`,
    index: 0,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 400,
    type: `Private room`,
    rating: 4,
    room: 7,
    adults: 10,
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3709553943508, 4.85309666406198],
    isBookmark: true,
    isPremium: false,
    host: {
      nameUser: `Sam`,
      avatar: `avatar-max.jpg`,
      description: [
        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      ],
    }
  },
  {
    name: `Place 2`,
    index: 1,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 200,
    type: `Apartment`,
    rating: 2,
    room: 10,
    adults: 20,
    features: [`Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3309553943508, 4.85309666406198],
    isBookmark: true,
    isPremium: true,
    host: {
      nameUser: `Sam`,
      avatar: `avatar-max.jpg`,
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      ],
    }
  },
  {
    name: `Place 2`,
    index: 2,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 300,
    type: `Apartment`,
    rating: 5,
    room: 6,
    adults: 12,
    features: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3719553943508, 4.85309666406198],
    isBookmark: false,
    isPremium: false,
    host: {
      nameUser: `Judy`,
      avatar: `avatar-angelina.jpg.jpg`,
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      ],
    }
  },
  {
    name: `Place 2`,
    index: 3,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 100,
    type: `Apartment`,
    rating: 0,
    room: 1,
    adults: 2,
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3419553943508, 4.85309666406198],
    isBookmark: false,
    isPremium: false,
    host: {
      nameUser: `Sam`,
      avatar: `avatar-max.jpg`,
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      ],
    }
  },
  {
    name: `Place 2`,
    index: 4,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
    price: 100,
    type: `Apartment`,
    rating: 0,
    room: 4,
    adults: 8,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Baby seat`, `Cabel TV`],
    city: [52.38333, 4.9],
    coordinates: [52.3999553943508, 4.85309666406198],
    isBookmark: false,
    isPremium: false,
    host: {
      nameUser: `Sam`,
      avatar: `avatar-max.jpg`,
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      ],
    }
  }
];

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map offers={offers}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
