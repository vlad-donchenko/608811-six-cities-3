import React from "react";
import renderer from "react-test-renderer";
import OfferMain from "./offers-main-list.jsx";
import {offers} from "../../mocks/test-offer";
import {OfferPrefix} from "../../const";


it(`Should render <OfferMain/>`, () => {
  const tree = renderer.create(<OfferMain additionalClass={OfferPrefix.CITIES_PLACE_CARD} onOfferMouseLeave={() => {}} onOfferMouseEnter={() => {}} renderOffer={() => {}} offers={offers} onTitleClick={() => {
  }}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
