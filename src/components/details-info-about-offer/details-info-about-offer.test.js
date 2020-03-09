import React from "react";
import renderer from "react-test-renderer";
import DetailsInfoAboutOffer from "./details-info-about-offer.jsx";
import {offers} from "../../mocks/test-offer";

it(`Should render <DetailsInfoAboutOffer/>`, () => {
  const tree = renderer.create(<DetailsInfoAboutOffer offer={offers[0]} onTitleClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
