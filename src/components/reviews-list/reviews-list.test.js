import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {offers} from "../../mocks/test-offer";

it(`Should render <ReviewsItem/>`, () => {
  const tree = renderer.create(<ReviewsList reviews={offers[0].reviews}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
