import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {offers} from "../../mocks/test-offer";

it(`should render <Map/>`, () => {
  const tree = renderer.create(<Map offers={offers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
