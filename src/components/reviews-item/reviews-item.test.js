import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item";
import {offers} from "../../mocks/test-offer";

it(`Should render <ReviewsItem/>`, () => {
  const tree = renderer.create(<ReviewsItem review={offers[0].reviews[0]}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
