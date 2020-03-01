import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";
import {OfferPrefix} from "../../const";
import {offers} from "../../mocks/test-offer";

it(`Should render <OfferCad/>`, () => {
  const tree = renderer.create(<OfferCard additionalClass={OfferPrefix.MAIN_PAGE_OFFER_PREFIX} offer={offers[0]} onOfferHover={() => {}} onTitleClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
