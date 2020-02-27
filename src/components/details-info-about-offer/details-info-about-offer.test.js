import React from "react";
import renderer from "react-test-renderer";
import DetailsInfoAboutOffer from "./details-info-about-offer";
import {offers} from "../../mocks/test-offer";

it(`Should render <DetailsInfoAboutOffer/>`, () => {
  const tree = renderer.create(<DetailsInfoAboutOffer offer={offers[0]}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
