import React from "react";
import renderer from "react-test-renderer";
import DetailsInfoAboutOffer from "./details-info-about-offer";

const offer = {
  name: `Place 2`,
  index: 0,
  images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`],
  price: 400,
  type: `Private room`,
  rating: 4,
  room: 7,
  adults: 10,
  features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
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
};

it(`Should render <DetailsInfoAboutOffer/>`, () => {
  const tree = renderer.create(<DetailsInfoAboutOffer offer={offer}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
