import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offers} from "../../mocks/test-offer";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
