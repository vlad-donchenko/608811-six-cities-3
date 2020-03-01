import React from "react";
import renderer from "react-test-renderer";
import OfferNeighbourhood from "./offer-neighbourhood.jsx";
import {offers} from "../../mocks/test-offer";
import {OfferPrefix} from "../../const";

it(`Should render <OfferNeighbourhood/>`, () => {
  const tree = renderer.create(<OfferNeighbourhood additionalClass={OfferPrefix.DETAILS_INFO_OFFER_PREFIX} renderOffer={() => {}} neighbourhoodOffers={offers[0].neighbourhoodOffers} onTitleClick={() => {
  }}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
