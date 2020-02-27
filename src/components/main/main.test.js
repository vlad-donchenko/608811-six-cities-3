import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mocks/test-offer";

it(`Should render <Main/>`, () => {
  const tree = renderer
    .create(<Main
      offers={offers}
      onTitleClick={() => {
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
