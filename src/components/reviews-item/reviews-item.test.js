import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";
import {reviews} from "../../mocks/test-reviews";

it(`Should render <ReviewsItem/>`, () => {
  const tree = renderer.create(<ReviewsItem review={reviews[0]}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
