import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import {offers} from "../../mocks/test-offer";

it(`Should render <OfferList/>`, () => {
  const tree = renderer.create(<OfferList offers={offers} onTitleClick={() => {
  }}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
