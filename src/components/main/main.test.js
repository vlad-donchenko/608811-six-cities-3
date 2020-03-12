import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mocks/test-offer";
import {CITIES} from "../../const";

it(`Should render <Main/>`, () => {
  const tree = renderer
    .create(<Main
      offers={offers}
      onTitleClick={() => {
      }}
      onCityClick={() => {
      }}
      activeCity={CITIES[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
