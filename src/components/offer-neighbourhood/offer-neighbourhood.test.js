import React from "react";
import renderer from "react-test-renderer";
import OfferNeighbourhood from "./offer-neighbourhood.jsx";
import {offers} from "../../mocks/test-offer";
import {MAX_NEIGHBOURHOOD_OFFERS, OfferPrefix} from "../../const";

it(`Should render <OfferNeighbourhood/>`, () => {
  const tree = renderer.create(<OfferNeighbourhood additionalClass={OfferPrefix.DETAILS} renderOffer={() => {}} offers={offers.slice(0, MAX_NEIGHBOURHOOD_OFFERS)} onTitleClick={() => {
  }}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
