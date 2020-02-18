import React from "react";
import {shallow} from "enzyme";
import OfferCad from "./offer-cad.jsx";

const offer = {
  name: `Place 2`,
  index: 0,
  image: `apartment-02.jpg`,
  price: 400,
  type: `Private room`,
  rating: 4,
  isBookmark: true,
  isPremium: false,
};

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const main = shallow(<OfferCad offer={offer} onOfferHover={() => {}} onTitleClick={onTitleClick}/>);
  const title = main.find(`.place-card__name a`);
  title.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should offer be hover`, () => {
  const onOfferHover = jest.fn();
  const main = shallow(<OfferCad offer={offer} onOfferHover={onOfferHover} onTitleClick={() => {}}/>);

  main.simulate(`mouseover`);

  expect(onOfferHover.mock.calls.length).toBe(1);
});

