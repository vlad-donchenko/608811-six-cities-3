import React from "react";
import renderer from "react-test-renderer";
import NearbyOffers from "../nearbyOffers/nearbyOffers";
import {offers} from "../../mocks/test-offer";

it(`should render <NearbyOffers/>`, () => {
  const tree = renderer.create(<NearbyOffers offers={offers} onOfferMouseLeave={() => {
  }} hoveredOffer={() => {
  }} onOfferMouseEnter={() => {
  }} onTitleClick={() => {
  }}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
