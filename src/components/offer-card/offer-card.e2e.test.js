import React from "react";
import {shallow} from "enzyme";
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

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const main = shallow(<OfferCard offer={offer} onOfferHover={() => {}} onTitleClick={onTitleClick}/>);
  const title = main.find(`.place-card__name a`);
  title.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should offer hover`, () => {
  const onOfferHover = jest.fn();
  const main = shallow(<OfferCard offer={offer} onOfferHover={onOfferHover} onTitleClick={() => {}}/>);

  main.simulate(`mouseover`);

  expect(onOfferHover.mock.calls.length).toBe(1);
});

