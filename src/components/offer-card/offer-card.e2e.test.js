import React from "react";
import {shallow} from "enzyme";
import OfferCard from "./offer-card.jsx";
import {offers} from "../../mocks/test-offer";
import {OfferPrefix} from "../../const";

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const main = shallow(<OfferCard additionalClass={OfferPrefix.CITIES_PLACE_CARD} offer={offers[0]} onOfferMouseLeave={() => {}} onOfferMouseEnter={() => {}} onTitleClick={onTitleClick}/>);
  const title = main.find(`.place-card__name a`);
  title.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should offer MouseEnter`, () => {
  const onOfferMouseEnter = jest.fn();
  const main = shallow(<OfferCard additionalClass={OfferPrefix.CITIES_PLACE_CARD} offer={offers[0]} onOfferMouseEnter={onOfferMouseEnter} onOfferMouseLeave={() => {}} onTitleClick={() => {}}/>);

  main.simulate(`mouseenter`);

  expect(onOfferMouseEnter.mock.calls.length).toBe(1);
});

it(`Should offer MouseLeave`, () => {
  const onOfferMouseLeave = jest.fn();
  const main = shallow(<OfferCard additionalClass={OfferPrefix.CITIES_PLACE_CARD} offer={offers[0]} onOfferMouseEnter={() => {}} onOfferMouseLeave={onOfferMouseLeave} onTitleClick={() => {}}/>);

  main.simulate(`mouseleave`);

  expect(onOfferMouseLeave.mock.calls.length).toBe(1);
});

