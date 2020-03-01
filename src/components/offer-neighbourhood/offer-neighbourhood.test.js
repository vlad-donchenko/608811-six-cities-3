import React from "react";
import renderer from "react-test-renderer";
import OfferNeighbourhood from "./offer-neighbourhood";
import {offers} from "../../mocks/test-offer";
import {OfferPrefix} from "../../const";

it(`Should render <OfferNeighbourhood/>`, () => {
  const tree = renderer.create(<OfferNeighbourhood additionalClass={OfferPrefix.DETAILS_INFO_OFFER_PREFIX} renderOffer={() => {}} offers={offers} onTitleClick={() => {
  }}/>).toJSON();

  expect(tree).toMatchSnapshot();
});

