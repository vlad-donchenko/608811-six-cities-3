import React from "react";
import {shallow} from "enzyme";
import OfferCard from "./offer-card.jsx";
import {offers} from "../../mocks/test-offer";

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const main = shallow(<OfferCard offer={offers[0]} onOfferHover={() => {}} onTitleClick={onTitleClick}/>);
  const title = main.find(`.place-card__name a`);
  title.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should offer hover`, () => {
  const onOfferHover = jest.fn();
  const main = shallow(<OfferCard offer={offers[0]} onOfferHover={onOfferHover} onTitleClick={() => {}}/>);

  main.simulate(`mouseover`);

  expect(onOfferHover.mock.calls.length).toBe(1);
});

