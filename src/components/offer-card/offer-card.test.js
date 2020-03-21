import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";
import {OfferPrefix} from "../../const";
import {offers} from "../../mocks/test-offer";

it(`Should render <OfferCad/>`, () => {
  const tree = renderer.create(<OfferCard additionalClass={OfferPrefix.CITIES_PLACE_CARD} offer={offers[0]} onOfferMouseEnter={() => {}} onOfferMouseLeave={() => {}} onTitleClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
