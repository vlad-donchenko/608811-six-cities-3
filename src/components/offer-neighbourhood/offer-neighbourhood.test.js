import React from "react";
import renderer from "react-test-renderer";
import OfferNeighbourhood from "./offer-neighbourhood";
import {offers} from "../../mocks/test-offer";
import {OfferPrefix} from "../../const";

it(`Should render <OfferList/>`, () => {
  const tree = renderer.create(<OfferNeighbourhood prefix={OfferPrefix.DETAILS_INFO_OFFER_PREFIX} neighbourhoodOffers={offers[0].neighbourhoodOffers} onTitleClick={() => {
  }}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
