import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offer = {
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
  coordinates: [52.3309553943508, 4.85309666406198],
  isBookmark: false,
  isPremium: false,
  host: {
    nameUser: `Sam`,
    avatar: `avatar-max.jpg`,
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    ],
  }
};

it(`Render OfferCad`, () => {
  const tree = renderer.create(<OfferCard offer={offer} onOfferHover={() => {}} onTitleClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
