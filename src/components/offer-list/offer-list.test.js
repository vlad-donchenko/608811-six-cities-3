import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import {offers} from "../../mocks/test-offer";
import {OfferPrefix} from "../../const";


it(`Should render <OfferList/>`, () => {
  const tree = renderer.create(<OfferList additionalClass={OfferPrefix.CITIES_PLACE_CARD} renderOffer={() => {}} offers={offers} onTitleClick={() => {
  }}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
